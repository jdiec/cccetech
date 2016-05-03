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
                'content' : {
                    templateUrl : 'views/main.html',  
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
                'content@' : {
                    templateUrl : 'views/servicedetails.html',
                    controller : 'ServiceDetailController'
                }
            }
        })
    
    
    
});