cccetechApp
    .service('servicesFactory', [function(){
        var services = [
                            {name:"Service Consulting", img:"img/data.png", description:""},
                            {name:"Data Service", img:"img/tech.jpg", description:""},
                            {name:"Password Recovery", img:"img/tech2.jpg", description:""},
                            {name:"Computer Remote Access", img:"img/trello.jpg", description:""},
                            {name:"Accounting Software Consulting", img:"img/tech4.png", description:""},
                            {name:"Ordering Machine Office Supplies", img:"img/tech3.jpg", description:""},
                            {name:"Surveillance Camera Installation", img:"img/tech2.jpg", description:""},
                            {name:"Automatic Film and Case Packing", img:"img/trello.jpg", description:""}
        ];
        this.getServices = function(){
            return services;
        };
        this.getService = function(index){
            return services[index];
        };
    }])

    .service('comparisonFactory', [function(){
        var comparisons = [
                            {name:"Experience", img:"", description:"30 years of mechanical experience, overseas factory trained"},
                            {name:"Affordability", img:"", description:"Lower cost for higher quality compared to traditional services"},
                            {name:"Flexibility", img:"", description:"Willing to travel across the nation for on-site tech support"}
        ];
        this.getComparisons = function(){
            return comparisons;    
        };
    }])

;