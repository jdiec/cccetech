cccetechApp
    .controller('MainController', ['$scope', '$document', '$location',
                '$anchorScroll', 
                function($scope, $document, $location, $anchorScroll){
                    
            $scope.iterations = function(steps){
                var arr = [];
                for(var i=1; i<=steps; i++){
                    arr.push(i);
                }
                return arr;
            }
            
            $scope.duScrollTo = function(targetID){
                  
                  var element = angular.element(document.getElementById(targetID));
                  $document.scrollToElementAnimated(element);
            };
            
            
            
//            $scope.anchorScrollTo = function(targetID){
//                $location.hash(targetID);
//                $anchorScroll();
//            };
        
        
    }])

    .controller('ServicesController', ['$scope', 
                'servicesFactory', '$stateParams', 
                function($scope, servicesFactory, $stateParams){
        
            $scope.services = servicesFactory.getServices();        
    }])

    .controller('ServiceDetailController', 
                ['$scope', 'servicesFactory', '$stateParams',
                 function($scope, servicesFactory, $stateParams){
                     
            $scope.service = servicesFactory
                            .getService(parseInt($stateParams.id,10));                     
    }])
    
    .controller('ComparisonsController', ['$scope', 
                'comparisonFactory', 
                function($scope, comparisonFactory){
        
            $scope.comparisons = comparisonFactory
                                    .getComparisons();
        
    }])


;