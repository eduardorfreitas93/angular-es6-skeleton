'use strict';

import testeTpl from './pages/teste/teste.html';

function routeConfig($urlRouterProvider, $stateProvider, resolverProvider) {
  'ngInject';

  $stateProvider
      .state('teste', {
        url: '/teste',
        templateUrl: testeTpl,
        controller: require('./pages/teste/teste.controller'),
        controllerAs: 'teste',
        resolve:{
          ocLazy: resolverProvider.asyncPagePrealoading
        }
      });

  $urlRouterProvider.otherwise('/');
}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

