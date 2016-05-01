cccetechApp
    .controller('MainController', ['$scope', function($scope){
        $scope.iterations = function(steps){
            var arr = [];
            for(var i=1; i<=steps; i++){
                arr.push(i);
            }
            return arr;
        }
    }])

    .controller('ServicesController', ['$scope', 'servicesFactory', function($scope, servicesFactory){
        
        $scope.services = servicesFactory.getServices();
        
    }])
    
    .controller('ComparisonsController', ['$scope', 'comparisonFactory', function($scope, comparisonFactory){
        
        $scope.comparisons = comparisonFactory.getComparisons();
        
    }])


;