angular.module('directivePractice', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/')
        $stateProvider
    })
