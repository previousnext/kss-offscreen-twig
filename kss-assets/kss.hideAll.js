var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('hideAll')) {
  document.body.classList.add('kss--hide-all');
}
