cccetechApp
    .controller('MainController', ['$scope', '$location',
                '$anchorScroll', 
                function($scope, $location, $anchorScroll){
                    
            $scope.iterations = function(steps){
                var arr = [];
                for(var i=1; i<=steps; i++){
                    arr.push(i);
                }
                return arr;
            }
            
            $scope.anchorScrollTo = function(targetID){
                $location.hash(targetID);
                $anchorScroll();
            };
        
        
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
                     
            console.log($scope.service);
    }])
    
    .controller('ComparisonsController', ['$scope', 
                'comparisonFactory', 
                function($scope, comparisonFactory){
        
            $scope.comparisons = comparisonFactory
                                    .getComparisons();
        
    }])


;