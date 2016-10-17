'use strict';

/**
 * @ngdoc overview
 * @name acresApp
 * @description
 * # acresApp
 *
 * Main module of the application.
 */
angular
    .module('acresApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial'
    ])
    .config(function($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('green', {
                'default': '400', // by default use shade 400 from the pink palette for primary intentions
                'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
            })
            // If you specify less than all of the keys, it will inherit from the
            // default shades
            .accentPalette('orange', {
                'default': '200' // use shade 200 for default, and keep all other shades the same
            });

    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/login', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'login'
            })
            .otherwise({
                redirectTo: '/'
            });
    });