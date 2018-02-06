var toggle = document.getElementById('kss-offscreen-toggle');

var desktopWidth = 769;
var toggleOpen = true;

var toggleMenu = function () {
  if (toggleOpen) {
    document.body.classList.remove('is-moved');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
  }
  else {
    document.body.classList.add('is-moved');
    toggle.classList.add('is-active');
    toggle.setAttribute('aria-expanded', 'true');
  }
  toggleOpen = !toggleOpen;
};

if (window.innerWidth <= desktopWidth) {
  toggleOpen = true;
  toggleMenu();
}

toggle.addEventListener('click', function () {
  toggleMenu();
});
