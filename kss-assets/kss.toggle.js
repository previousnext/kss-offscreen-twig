/**
 * Toggle certain elements when the controlling button is clicked.
 */
document.querySelectorAll('.kss-js-toggle').forEach(function (el) {
  var toggle = el;
  var toggleName = toggle.getAttribute('aria-controls');
  var toggleCloseMethod = toggle.getAttribute('data-toggle-close');
  var toggleEl = document.querySelector('#' + toggleName);
  var isOpen = false;

  var toggleElement = function () {
    if (isOpen) {
      toggleClose();
    }
    else {
      toggleOpen();
    }
    isOpen = !isOpen;
  };

  var toggleOpen = function () {
    toggle.classList.add('is-active');
    toggle.setAttribute('aria-expanded', 'true');
    toggleEl.classList.add('is-active');
    toggleEl.setAttribute('aria-hidden', 'false');
  };

  var toggleClose = function () {
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    toggleEl.classList.remove('is-active');
    toggleEl.setAttribute('aria-hidden', 'true');
  };

  // Toggle on click.
  toggle.addEventListener('click', function () {
    toggleElement();
  });

  // Close on esc.
  toggle.addEventListener('keyup', function (e) {
    if (e.which === 27 && isOpen) {
      toggleElement();
    }
  });

  // Close on outside click, if set.
  if (toggleCloseMethod === 'outside') {
    document.addEventListener('click', function (e) {
      var target = e.target;
      if (target !== toggle && target !== toggleEl &&
        !toggleEl.contains(target) && isOpen) {
        toggleElement();
      }
    });
  }
});
