'use strict';

// Declare app level module which depends on views, and components
angular.module('app', ['ui.router']).
	config(['$stateProvider', '$urlRouterProvider', 
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('main', {
					url: '/',
					templateUrl: 'views/main.html'
				})
				.state('about', {
					url: '/about',
					templateUrl: 'views/aboutus.html'
				})
				.state('contact', {
					url: '/contact',
					templateUrl: 'views/contactus.html'
				})
				.state('ieee_info', {
					url: '/ieee',
					templateUrl: 'views/ieee.html'
				});

			$urlRouterProvider.otherwise('/');
		}
	]);