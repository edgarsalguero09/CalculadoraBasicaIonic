angular.module('starter.routes', [])

.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
	.state('index',{
		url:'/home',
		templateUrl: 'templates/cuadro.html',
		controller:'cuadroControlador'
	})
	$urlRouterProvider.otherwise('/home')
});
