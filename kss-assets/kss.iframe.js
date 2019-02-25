(function () {
  'use strict';

  /**
   * Simple utility for embedded iframes to make them responsive.
   *
   * Usage: window.top.resizeIframe(this); from within any embedded iframe.
   *
   * Must appear first in the source order.
   *
   * @param {Window} frameWindow
   *   Window object of a child frame.
   */
  window.resizeIframe = function (frameWindow) {
    var framePath = frameWindow.location.pathname.split('/');
    var frameSrc = framePath.slice(-1).pop();
    var frame = document.querySelector('iframe[src="' + frameSrc + '"]');
    var resizeIframe = function () {
      if (frame) {
        frame.style.height = frameWindow.document.body.offsetHeight + 'px';
      }
    };
    var whileWaitingForLoad = setInterval(resizeIframe, 200);
    frameWindow.document.addEventListener('DOMContentLoaded', resizeIframe);
    frameWindow.addEventListener('load', function () {
      // After the window has loaded, clear the interval 5 seconds later. In
      // some cases load was fired very quickly, but inside resources like maps
      // were still loading. @todo, possibly fire on other events on the inside
      // window instead of relying on timeouts.
      setTimeout(function () {
        clearInterval(whileWaitingForLoad);
      }, 5000);
      resizeIframe();
    });
    frameWindow.addEventListener('resize', resizeIframe);
  };

})();
