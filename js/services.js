cccetechApp
    .service('servicesFactory', [function(){
            var services = [
                                {id:0, name:"Service Consulting", img:"img/data.png", description:""},
                                {id:1, name:"Data Service", img:"img/tech.jpg", description:""},
                                {id:2, name:"Password Recovery", img:"img/tech2.jpg", description:""},
                                {id:3, name:"Computer Remote Access", img:"img/trello.jpg", description:""},
                                {id:4, name:"Accounting Software Consulting", img:"img/tech4.png", description:""},
                                {id:5, name:"Ordering Machine Office Supplies", img:"img/tech3.jpg", description:""},
                                {id:6, name:"Surveillance Camera Installation", img:"img/tech2.jpg", description:""},
                                {id:7, name:"Automatic Film and Case Packing", img:"img/trello.jpg", description:""}
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
                                {id:0, name:"Experience", img:"", description:"30 years of mechanical experience, overseas factory trained"},
                                {id:1, name:"Affordability", img:"", description:"Lower cost for higher quality compared to traditional services"},
                                {id:2, name:"Flexibility", img:"", description:"Willing to travel across the nation for on-site tech support"}
            ];
            this.getComparisons = function(){
                return comparisons;    
            };
    }])

;