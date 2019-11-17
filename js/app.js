var storeArr =['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: '];

var Seattle ={
 name: "seattle",
 min:23,
 max:65,
 avgCookies:6.3,
 salesPerHour:[],
 totalCookiesArr:0,
    getRandomCustemer:function() {
        return Math.floor(Math.random() * ((this.max) - (this.min)) + this.min);
    },
    getAvgCookies:function(){
         for (var i = 0; i < storeArr.length; i++) {
         var maltiplyAvg=Math.ceil(this.avgCookies*this.getRandomCustemer());
          this.salesPerHour.push(maltiplyAvg);
          this.totalCookiesArr= this.salesPerHour[i] + this.totalCookiesArr;
        } return this.salesPerHour;
},
render: function()  {
    var storeName = document.getElementById('cookiesStore');
    var articleEl = document.createElement('article');
    storeName.appendChild(articleEl);

    var h1El = document.createElement('h1');
    h1El.textContent = this.name;
    articleEl.appendChild(h1El);

    var ulEL = document.createElement('ul');
    articleEl.appendChild(ulEL);
    for (var i = 0; i < storeArr.length ; i++) {
        var liEl = document.createElement('li');
        ulEL.appendChild(liEl);
        liEl.textContent = storeArr[i]  + this.salesPerHour[i] + "  cookies";
    }
   var totalLiEl = document.createElement('li');
   ulEL.appendChild(totalLiEl);
   totalLiEl.textContent = "total : " + this.totalCookiesArr +"  cookies";

    
}
}
Seattle.getRandomCustemer();
Seattle.getAvgCookies();
Seattle.render();

var tokyo ={
    name: "tokyo",
    min:3,
    max:24,
    avgCookies:1.2,
    salesPerHour:[],
    totalCookiesArr:0,
    getRandomCustemer:function() {
        return Math.floor(Math.random() * ((this.max) - (this.min)) + this.min);

       },
       getAvgCookies:function(){
            for (var i = 0; i < storeArr.length; i++) {
            var maltiplyAvg=Math.ceil(this.avgCookies*this.getRandomCustemer());
             this.salesPerHour.push(maltiplyAvg);
             this.totalCookiesArr = this.salesPerHour[i] + this.totalCookiesArr; 
           }
           return this.salesPerHour;
   },
   render: function()  {
       var storeName = document.getElementById('cookiesStore');
       var articleEl = document.createElement('article');
       storeName.appendChild(articleEl);
   
       var h1El = document.createElement('h1');
       h1El.textContent = this.name;
       articleEl.appendChild(h1El);
   
       var ulEL = document.createElement('ul');
       articleEl.appendChild(ulEL);
       for (var i = 0; i < storeArr.length ; i++) {
           var liEl = document.createElement('li');
           ulEL.appendChild(liEl);
           liEl.textContent = storeArr[i]  + this.salesPerHour[i] + "  cookies";
       }
          var totalLiEl = document.createElement('li');
          ulEL.appendChild(totalLiEl);
          totalLiEl.textContent = "total : " + this.totalCookiesArr + "  cookies";

           
    
   }
   }
   tokyo.getRandomCustemer();
   tokyo.getAvgCookies();
   tokyo.render();

   var dubai ={
       name: "dubai",
       min:11,
       max:38,
       avgCookies:3.7,
       salesPerHour:[],
       totalCookiesArr:0,
       getRandomCustemer: function () {
        return Math.floor(Math.random() * ((this.max) - (this.min)) + this.min);
       },
       getAvgCookies: function () {
          for (var i = 0; i < storeArr.length; i++) {
             var maltiplyAvg= Math.ceil(this.avgCookies*this.getRandomCustemer());
             this.salesPerHour.push(maltiplyAvg);  
             this.totalCookiesArr = this.salesPerHour[i] + this.totalCookiesArr;
          } return this.salesPerHour;
       },
       render: function () {
           storeName = document.getElementById('cookiesStore');
           articleEl = document.createElement('article');
           storeName.appendChild(articleEl);
           var h1El = document.createElement('h1');
             h1El.textContent = this.name;
             articleEl.appendChild(h1El);
           ulEL= document.createElement('ul');
           articleEl.appendChild(ulEL);
           for (var i = 0; i < storeArr.length; i++) {
            liEl = document.createElement('li');
            ulEL.appendChild(liEl);
            liEl.textContent = storeArr[i] + this.salesPerHour + " cookies ";
        }
            totalLiEl= document.createElement('li');
            ulEL.appendChild(totalLiEl);
            totalLiEl.textContent= "total : " + this.totalCookiesArr + ' cookies';
               
           
       }
    }
    dubai.getRandomCustemer();
    dubai.getavgCookies();
    dubai.render();

 var paris ={
    name: "paris",
    min:20,
    max:38,
    avgCookies:2.3,
    salesPerHour:[],
    totalCookiesArr:0,
       getRandomCustemer:function() {
           return Math.floor(Math.random() * ((this.max) - (this.min)) + this.min);
       },
       getAvgCookies:function(){
            for (var i = 0; i < storeArr.length; i++) {
            var maltiplyAvg=Math.ceil(this.avgCookies*this.getRandomCustemer());
             this.salesPerHour.push(maltiplyAvg);
             this.totalCookiesArr= this.salesPerHour[i] + this.totalCookiesArr;
           } return this.salesPerHour;
   },
   render: function()  {
       var storeName = document.getElementById('cookiesStore');
       var articleEl = document.createElement('article');
       storeName.appendChild(articleEl);
   
       var h1El = document.createElement('h1');
       h1El.textContent = this.name;
       articleEl.appendChild(h1El);
   
       var ulEL = document.createElement('ul');
       articleEl.appendChild(ulEL);
       for (var i = 0; i < storeArr.length ; i++) {
           var liEl = document.createElement('li');
           ulEL.appendChild(liEl);
           liEl.textContent = storeArr[i]  + this.salesPerHour[i] + "  cookies";
       }
      var totalLiEl = document.createElement('li');
      ulEL.appendChild(totalLiEl);
      totalLiEl.textContent = "total : " + this.totalCookiesArr +"  cookies";   
   }
   }
    paris.getRandomCustemer();
    paris.getAvgCookies();
    paris.render();

   var lima ={
    name: "lima",
    min:2,
    max:16,
    avgCookies:4.6,
    salesPerHour:[],
    totalCookiesArr:0,
    getRandomCustemer:function() {
        return Math.floor(Math.random() * ((this.max) - (this.min)) + this.min);

       },
       getAvgCookies:function(){
            for (var i = 0; i < storeArr.length; i++) {
            var maltiplyAvg=Math.ceil(this.avgCookies*this.getRandomCustemer());
             this.salesPerHour.push(maltiplyAvg);
             this.totalCookiesArr = this.salesPerHour[i] + this.totalCookiesArr; 
           }
           return this.salesPerHour;
   },
   render: function()  {
       var storeName = document.getElementById('cookiesStore');
       var articleEl = document.createElement('article');
       storeName.appendChild(articleEl);
   
       var h1El = document.createElement('h1');
       h1El.textContent = this.name;
       articleEl.appendChild(h1El);
   
       var ulEL = document.createElement('ul');
       articleEl.appendChild(ulEL);
       for (var i = 0; i < storeArr.length ; i++) {
           var liEl = document.createElement('li');
           ulEL.appendChild(liEl);
           liEl.textContent = storeArr[i]  + this.salesPerHour[i] + "  cookies";
       }
          var totalLiEl = document.createElement('li');
          ulEL.appendChild(totalLiEl);
          totalLiEl.textContent = "total : " + this.totalCookiesArr + "  cookies";
   }
   }
   lima.getRandomCustemer();
   lima.getAvgCookies();
   lima.render();

