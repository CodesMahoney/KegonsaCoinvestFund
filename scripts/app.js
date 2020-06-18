var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.html"
        })
        .when("/Strategy", {
            templateUrl: "strategy.html"
        })
        .when("/Partners", {
            templateUrl: "partners.html"
        })
        .when("/Exits", {
            templateUrl: "exits.html"
        });
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});
