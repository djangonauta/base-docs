(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    configurarAncoras();
    Fancybox.bind('.data-fb', {});
  });

  function configurarAncoras() {
    const ancoras = document.querySelectorAll('[href^=http]');

    ancoras.forEach(function (ancora) {
      ancora.setAttribute('target', '_blank');
      ancora.setAttribute('rel', 'noopener noreferrer');
    });
  }
})();
