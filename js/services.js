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

    .service('testimonialsFactory', [function(){
            var testimonials = [
                    {
                     id:0, 
                     author:"Montgomery Burns",
                     title:"Owner & CEO",
                     organization:"Springfield Nuclear Power Plant",
                     date:"",
                     comment:"Awesome services! Definitely coming back in the future! Heheh.."
                    },
                    {
                     id:1, 
                     author:"Stewie Griffin", 
                     title:"Evil Genius", 
                     organization:"Griffin residence", 
                     date:"", 
                     comment:"They know 110% what they're doing! If only they could shower more, that would be great!"},
                    {
                    id:2, 
                    author:"Tony Montana", 
                    title:"Founder & CEO", 
                    organization:"Montana Realty Company", 
                    date:"", 
                    comment:"I've got a maximum security surveillance system installed, I can finally sleep tonight!"},
                    {
                    id:3, 
                    author:"Michael Scott", 
                    title:"Regional Manager", 
                    organization:"The Office", 
                    date:"", 
                    comment:"They helped me set up a machine that can print loads of paper in a matter of seconds! Better watch out Dwight!"
                    },
                    {
                     id:4, 
                     author:"Jack Bauer", 
                     title:"Field Agent", 
                     organization:"CTU", 
                     date:"", 
                     comment:"Chloe, you'd better take a look at this."}
            ];
            
            this.getTestimonials = function(){
                return testimonials;
            };
        
//            this.getTestimonial = function(index){
//                return testimonials[index];  
//            };
            
    }])

;