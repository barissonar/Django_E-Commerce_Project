function showMenu() {
  var menu = document.querySelector(".container");
  menu.style.display = "block";
}

function hideMenu() {
  var menu = document.querySelector(".container");
  menu.style.display = "none";
}

function toggleContainer() {
  var timeout;
  var menu = document.querySelector(".container");
  var icon = document.querySelector(".cart");


  document.addEventListener('mousemove', function (event) {

    if (menu.contains(event.target) || icon.contains(event.target)) {
      showMenu();
      clearTimeout(timeout);
      console.log('container içinde')

    }
    else {
      clearTimeout(timeout);
      console.log('container dışında')
      timeout = setTimeout(function () {
        hideMenu();
      }, 200)
    }


  });


}
  window.addEventListener('DOMContentLoaded', function () {
    toggleContainer();
  });

