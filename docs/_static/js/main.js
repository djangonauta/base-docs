(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    configurarAncoras();
  });

  function configurarAncoras() {
    const ancoras = document.querySelectorAll('[href^=http]');

    ancoras.forEach(function (ancora) {
      ancora.setAttribute('target', '_blank');
      ancora.setAttribute('rel', 'noopener noreferrer');
    });
  }
})();
