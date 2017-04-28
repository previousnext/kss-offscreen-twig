(function () {

  // Define variables.
  var $fullscreenLink   = $('.kss-fullscreen__button');
  var $fullscreen       = $('.kss-fullscreen');

  // Fullscreen is not active by default.
  var fullscreenActive  = false;

  // Toggle fullscreen.
  var toggleFullscreen = function () {
    if (fullscreenActive) {
      $fullscreen.removeClass('is-fullscreen');
      $fullscreenLink.removeClass('is-active').attr('aria-expanded', 'false');
    }
    else {
      $fullscreen.addClass('is-fullscreen');
      $fullscreenLink.addClass('is-active').attr('aria-expanded', 'true');
    }
    fullscreenActive = !fullscreenActive;
  };

  // Toggle fullscreen with click.
  $fullscreenLink.click(function () {
    toggleFullscreen();
    return false;
  });

})();
