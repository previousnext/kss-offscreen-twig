/**
 * Change iframe viewport.
 */
document.querySelectorAll('.kss-js-viewport').forEach(function (el) {
  var list = el;
  var buttons = list.querySelectorAll('button');
  var main = document.querySelector('.kss-main');
  var iframes = document.querySelectorAll('.kss-section__example-iframe');
  var grid = document.querySelector('.kss-grid');

  var setViewport = function (target) {
    var value = target.innerHTML;
    buttons.forEach(function (button) {
      button.classList.remove('is-active');
    });
    target.classList.add('is-active');

    if (value === 'Infinite') {
      main.classList.remove('kss-container');
    } else {
      main.classList.add('kss-container');
    }

    iframes.forEach(function (iframe) {
      if (value === 'Medium') {
        iframe.classList.add('kss-container--medium');
        grid.classList.add('kss-container--medium');
      }
      else {
        iframe.classList.remove('kss-container--medium');
        grid.classList.remove('kss-container--medium');
      }

      if (value === 'Small') {
        iframe.classList.add('kss-container--small');
        grid.classList.add('kss-container--small', 'kss-grid--force-mobile');
      }
      else {
        iframe.classList.remove('kss-container--small');
        grid.classList.remove('kss-container--small', 'kss-grid--force-mobile');
      }
    });
  };

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      setViewport(e.currentTarget);
      e.preventDefault();
    });
  });
});
