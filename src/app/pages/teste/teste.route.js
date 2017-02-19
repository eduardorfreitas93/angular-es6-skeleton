'use strict';

import testeTpl from './teste.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('teste', {
      url: '/teste',
      templateUrl: testeTpl,
      controller: require('./teste.controller'),
      controllerAs: 'teste'
    });

}

export default routeConfig;
