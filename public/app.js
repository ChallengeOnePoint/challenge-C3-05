angular
    .module('app', [
    'ui.router',
    'ui.bootstrap'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        /*   .state('clients', {
               url: '/clients',
               templateUrl: 'views/clients.html',
               controller: 'ClientsController'
           })*/
            .state('board', {
            url: '/',
            templateUrl: 'board.html',
            controller: 'BoardController'
        })
        $urlRouterProvider.otherwise('/');
    }])
    .run(['$state', '$rootScope', function ($state, $rootScope) {
	$rootScope.open = false;
	$rootScope.socket = io.connect();
 }]);

