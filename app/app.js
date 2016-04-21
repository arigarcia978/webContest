'use strict';

// Declare app level module which depends on views, and components
angular.module('app', ['ui.router']).
	config(['$stateProvider', '$urlRouterProvider', 
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('main', {
					url: '/',
					templateUrl: './app/views/main.html'
				})
				.state('about', {
					url: '/about',
					templateUrl: './app/views/aboutus.html'
				})
				.state('contact', {
					url: '/contact',
					templateUrl: './app/views/contactus.html'
				})
				.state('ieee_info', {
					url: '/ieee',
					templateUrl: './app/views/ieee.html'
				});

			$urlRouterProvider.otherwise('/');
		}
	]);