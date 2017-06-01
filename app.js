'use strict';

var app = angular.module('FeedForwardAdmin', ['ngRoute', 'ngMaterial', 'ngResource', 'nvd3', 'firebase', 'lfNgMdFileInput', 'oitozero.ngSweetAlert']);

app.config(['$routeProvider',
    function ($routeProvider) {
		$routeProvider.
		when('/login-register', {
			templateUrl: 'components/login-register/login-registerTemplate.html',
			controller: 'LoginRegisterController'
		}).
		when('/sites', {
			templateUrl: 'components/site-list/site-listTemplate.html',
			controller: 'SiteListController'
		}).
		when('/feedback', {
			templateUrl: 'components/feedback-detail/feedback-detailTemplate.html',
			controller: 'FeedbackDetailController'
		}).
		when('/nutrition', {
			templateUrl: 'components/nutrition-list/nutrition-listTemplate.html',
			controller: 'NutritionListController'
		}).
		when('/perminfo', {
			templateUrl: 'components/permanent-info/permanent-infoTemplate.html',
			controller: 'PermanentInfoController'
		}).
		when('/perminfo/:id', {
			templateUrl: 'components/permanent-info-detail/permanent-info-detailTemplate.html',
			controller: 'PermanentInfoDetailController'
		}).
		when('/nutrition/:id', {
			templateUrl: 'components/nutrition-detail/nutrition-detailTemplate.html',
			controller: 'NutritionDetailController'
		}).
		otherwise({
			redirectTo: '/nutrition'
		});
}])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('amber')
    .accentPalette('orange')
		.warnPalette('teal');
});;