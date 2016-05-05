var cccetechApp = angular.module('cccetechApp', ['ui.router', 'ngAnimate', 'duScroll']);

cccetechApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('app', {
            url : '/',
            views : {
                'header' : {
                    templateUrl : 'views/header.html',
                },
                'services' : {
                    templateUrl : 'views/services.html'  
                },
                'main' : {
                    templateUrl : 'views/main.html'  
                },
                'footer' : {
                    templateUrl : 'views/footer.html',
                }
            }
        })
        //view@state: {}
        .state('app.details', {
            url : 'services/:id',
            views : {
                'services@' : {
                    templateUrl : 'views/servicedetails.html',
                    controller : 'ServiceDetailController'
                }
            }
        })
});






