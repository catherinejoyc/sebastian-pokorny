// Sidebar
function activateNavItem(navItemId) {
  var navItems, i;
  navItems = document.getElementsByClassName("navItem");

  var listLength = navItems.length;
  for (i = 0; i < listLength; i++) {
    navItems[i].className = navItems[i].className.replace(" active", "");
  }

  console.log(navItemId);
  document.getElementById(navItemId).className += " active";
}

window.onscroll = function() {updateNavItemOnScroll()};

function updateNavItemOnScroll() {
  if (window.pageYOffset > (document.getElementById("contact").offsetTop - 20)){
    activateNavItem('navItemContact');
  } else if (window.pageYOffset > (document.getElementById("about-me").offsetTop - 20)){
    activateNavItem('navItemAboutMe');
  } else if (window.pageYOffset > (document.getElementById("workflow").offsetTop - 20)){
    activateNavItem('navItemWorkflow');
  } else if (window.pageYOffset > (document.getElementById("portfolio").offsetTop - 20)){
    activateNavItem('navItemPortfolio');
  } else if (window.pageYOffset > (document.getElementById("skills").offsetTop - 20)){
    activateNavItem('navItemSkills');
  } else {
    activateNavItem('navItemHome');
  }
}
