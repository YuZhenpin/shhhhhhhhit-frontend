(function() {
  'use strict';

  angular
    .module('shhhhhhhhitFrontend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
