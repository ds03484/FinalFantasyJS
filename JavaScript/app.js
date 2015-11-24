/**
 * Created by ds034_000 on 11/16/2015.
 */

var app = angular.module('FinalFantasyApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: '/FinalFantasyJS/Home.html'
        }).
        when('/characters/:id', {
            controller: 'CharController',
            templateUrl: '/FinalFantasyJS/FFChar.html'
        }).
        otherwise({
            redirectTo: '/'
        });
});