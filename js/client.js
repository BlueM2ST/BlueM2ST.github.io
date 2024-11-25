let navClicked = false;
function navBarClicked() {
  let menu = document.getElementById("menu-collapse");
  if (navClicked) {
    menu.style.width = "0";
    navClicked = false;
  } else {
    menu.style.width = "25%";
    navClicked = true;
  }
}
