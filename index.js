/** Sidenav **/
function link() {
  document.getElementById("mySidenav").classList.remove("sidenavToggle");
  document.getElementById("bodys").classList.remove("body1");
  document.getElementById("hamburger").style.display = "block";
  document.getElementById("close").style.display = "none";
}

function openBtn() {
  document.getElementById("bodys").classList.add("body1");
  document.getElementById("mySidenav").classList.add("sidenavToggle");
  document.getElementById("hamburger").style.display = "none";
  document.getElementById("close").style.display = "block";
}
function closeBtn() {
  document.getElementById("bodys").classList.remove("body1");
  document.getElementById("mySidenav").classList.remove("sidenavToggle");
  document.getElementById("hamburger").style.display = "block";
  document.getElementById("close").style.display = "none";
}

/**Alert**/
$(document).ready(function () {
  document.oncontextmenu = function () {
    return false;
  };

  $(document).mousedown(function (e) {
    if (e.button == 2) {
      alert("You Do Not Have This Permission!");
      return false;
    }
    return true;
  });
});
