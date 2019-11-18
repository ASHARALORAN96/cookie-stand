'use strict';
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
var stores =[];
console.log(stores);
function Location(name,
    min,
    max,
    avgCookies,
    salesPerHour) {

    this.name = name;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.salesPerHour =[];
    this.totalCookies = 0;
   this.getAvgCookies();
}


Location.prototype.getRandomCustemer = function () {
   var randomCustemer= Math.floor(Math.random() * ((this.max) - (this.min)) + this.min);
//    console.log(randomCustemer);
    return randomCustemer;
    
};

Location.prototype.getAvgCookies = function () {
    for (var i = 0; i < hours.length; i++) {
        var maltiplyAvg = Math.ceil(this.avgCookies * this.getRandomCustemer());
        this.salesPerHour.push(maltiplyAvg);
        this.totalCookies += this.salesPerHour[i];
        // console.log('total',this.salesPerHour);
        // console.log('total',this.totalCookies)
    };

}


//headerRender
var storeContener = document.getElementById('cookiesStore');
var tableEl = document.createElement('table');
storeContener.appendChild(tableEl);



function headerRender(){
var headerEl = document.createElement('tr');///create row for time header
tableEl.appendChild(headerEl);
var td = document.createElement('td');
headerEl.appendChild(td);
td.textContent='  ';
for (var i = 0; i < hours.length; i++) {
    var td1El = document.createElement('td');
    td1El.textContent = hours[i];       
    headerEl.appendChild(td1El);
}

}
 //randomstoriesrender
function storesLocation(){
    var tr2El = document.createElement('tr');
    tableEl.appendChild(tr2El);
    // for (var x = 0; x < stores.length; x++) {
//  var tr1El =document.createElement('tr');
//   tableEl.appendChild(tr1El);
//   var tr2El =document.createElement('tr');
//   tableEl.appendChild(tr2El);
//   var tr3El= document.createElement('tr');
//   tableEl.appendChild(tr3El);
//   var tr4El =document.createElement('tr');
//   tableEl.appendChild(tr4El);
    for (var j = 0; j < hours.length; j++) {
        var td2El = document.createElement('td');
        td2El.textContent = this.salesPerHour[j];       
        tr2El.appendChild(td2El);
}

}
// footerRender

console.log(Location);

var seattle = new Location('seattle', 23, 65, 6.3,this.salesPerHour);
var tokyo = new Location('tokyo',3,24,1.2,this.salesPerHour);
var dubai = new Location('dubai',11,38,3.7,this.salesPerHour);
var paris = new Location('paris',20,38,2.3,this.salesPerHour);
var lima = new Location('lima',2,16,4.6,this.salesPerHour);
stores.push(seattle, tokyo,dubai,paris,lima);
console.log(stores);
headerRender();
storesLocation();


// seattle object
//var seattle ={
 //name: "seattle",
 //min:23,
 //max:65,
 //avgCookies:6.3,
 //salesPerHour:[],
 //totalCookiesArr:0,
   // getRandomCustemer:function() {
     //   return Math.floor(Math.random() * ((this.max) - (this.min)) + this.min);
  //  },
  //  getAvgCookies:function(){
    //     for (var i = 0; i < storeArr.length; i++) {
      //   var maltiplyAvg=Math.ceil(this.avgCookies*this.getRandomCustemer());
        //  this.salesPerHour.push(maltiplyAvg);
          //this.totalCookiesArr= this.salesPerHour[i] + this.totalCookiesArr;
        //} return this.salesPerHour;
//},
//renderStoreName: function ()  {
    //var storeName = document.getElementById('cookiesStore');
   // var articleEl = document.createElement('article');
   // storeName.appendChild(articleEl);

   // var h1El = document.createElement('h1');
   // h1El.textContent = this.name;
   // articleEl.appendChild(h1El);

   // var ulEL = document.createElement('ul');
   // articleEl.appendChild(ulEL);
    //for (var i = 0; i < storeArr.length ; i++) {
     //   var liEl = document.createElement('li');
      //  ulEL.appendChild(liEl);
      //  liEl.textContent = storeArr[i]  + this.salesPerHour[i] + "  cookies";
    //}
  // var totalLiEl = document.createElement('li');
   //ulEL.appendChild(totalLiEl);
   //totalLiEl.textContent = "total : " + this.totalCookiesArr +"  cookies";


//}



// tokyo object
// var tokyo ={
//     name: "tokyo",
//     min:3,
//     max:24,
//     avgCookies:1.2,
//     salesPerHour:[],
//     totalCookiesArr:0,
//     getRandomCustemer:function() {
//         return Math.floor(Math.random() * ((this.max) - (this.min)) + this.min);

//        },
//        getAvgCookies:function(){
//             for (var i = 0; i < storeArr.length; i++) {
//             var maltiplyAvg=Math.ceil(this.avgCookies*this.getRandomCustemer());
//              this.salesPerHour.push(maltiplyAvg);
//              this.totalCookiesArr = this.salesPerHour[i] + this.totalCookiesArr; 
//            }
//            return this.salesPerHour;
//    },
//    render: function()  {
//        var storeName = document.getElementById('cookiesStore');
//        var articleEl = document.createElement('article');
//        storeName.appendChild(articleEl);

//        var h1El = document.createElement('h1');
//        h1El.textContent = this.name;
//        articleEl.appendChild(h1El);

//        var ulEL = document.createElement('ul');
//        articleEl.appendChild(ulEL);
//        for (var i = 0; i < storeArr.length ; i++) {
//            var liEl = document.createElement('li');
//            ulEL.appendChild(liEl);
//            liEl.textContent = storeArr[i]  + this.salesPerHour[i] + "  cookies";
//        }
//           var totalLiEl = document.createElement('li');
//           ulEL.appendChild(totalLiEl);
//           totalLiEl.textContent = "total : " + this.totalCookiesArr + "  cookies";



//    }
//    }
//    tokyo.getRandomCustemer();
//    tokyo.getAvgCookies();
//    tokyo.render();

// // dubai object
// var dubai ={
//     name: "dubai",
//     min:11,
//     max:38,
//     avgCookies:3.7,
//     salesPerHour:[],
//     totalCookiesArr:0,
//     getRandomCustemer:function() {
//         return Math.floor(Math.random() * ((this.max) - (this.min)) + this.min);

//        },
//        getAvgCookies:function(){
//             for (var i = 0; i < storeArr.length; i++) {
//             var maltiplyAvg=Math.ceil(this.avgCookies*this.getRandomCustemer());
//              this.salesPerHour.push(maltiplyAvg);
//              this.totalCookiesArr = this.salesPerHour[i] + this.totalCookiesArr; 
//            }
//            return this.salesPerHour;
//    },
//    render: function()  {
//        var storeName = document.getElementById('cookiesStore');
//        var articleEl = document.createElement('article');
//        storeName.appendChild(articleEl);

//        var h1El = document.createElement('h1');
//        h1El.textContent = this.name;
//        articleEl.appendChild(h1El);

//        var ulEL = document.createElement('ul');
//        articleEl.appendChild(ulEL);
//        for (var i = 0; i < storeArr.length ; i++) {
//            var liEl = document.createElement('li');
//            ulEL.appendChild(liEl);
//            liEl.textContent = storeArr[i]  + this.salesPerHour[i] + "  cookies";
//        }
//           var totalLiEl = document.createElement('li');
//           ulEL.appendChild(totalLiEl);
//           totalLiEl.textContent = "total : " + this.totalCookiesArr + "  cookies";



//    }
//    }
//    dubai.getRandomCustemer();
//    dubai.getAvgCookies();
//    dubai.render();
// // paris Object
//  var paris ={
//     name: "paris",
//     min:20,
//     max:38,
//     avgCookies:2.3,
//     salesPerHour:[],
//     totalCookiesArr:0,
//        getRandomCustemer:function() {
//            return Math.floor(Math.random() * ((this.max) - (this.min)) + this.min);
//        },
//        getAvgCookies:function(){
//             for (var i = 0; i < storeArr.length; i++) {
//             var maltiplyAvg=Math.ceil(this.avgCookies*this.getRandomCustemer());
//              this.salesPerHour.push(maltiplyAvg);
//              this.totalCookiesArr= this.salesPerHour[i] + this.totalCookiesArr;
//            } return this.salesPerHour;
//    },
//    render: function()  {
//        var storeName = document.getElementById('cookiesStore');
//        var articleEl = document.createElement('article');
//        storeName.appendChild(articleEl);

//        var h1El = document.createElement('h1');
//        h1El.textContent = this.name;
//        articleEl.appendChild(h1El);

//        var ulEL = document.createElement('ul');
//        articleEl.appendChild(ulEL);
//        for (var i = 0; i < storeArr.length ; i++) {
//            var liEl = document.createElement('li');
//            ulEL.appendChild(liEl);
//            liEl.textContent = storeArr[i]  + this.salesPerHour[i] + "  cookies";
//        }
//       var totalLiEl = document.createElement('li');
//       ulEL.appendChild(totalLiEl);
//       totalLiEl.textContent = "total : " + this.totalCookiesArr +"  cookies";   
//    }
//    }
//     paris.getRandomCustemer();
//     paris.getAvgCookies();
//     paris.render();

//     // lima object
//    var lima ={
//     name: "lima",
//     min:2,
//     max:16,
//     avgCookies:4.6,
//     salesPerHour:[],
//     totalCookiesArr:0,
//     getRandomCustemer:function() {
//         return Math.floor(Math.random() * ((this.max) - (this.min)) + this.min);

//        },
//        getAvgCookies:function(){
//             for (var i = 0; i < storeArr.length; i++) {
//             var maltiplyAvg=Math.ceil(this.avgCookies*this.getRandomCustemer());
//              this.salesPerHour.push(maltiplyAvg);
//              this.totalCookiesArr = this.salesPerHour[i] + this.totalCookiesArr; 
//            }
//            return this.salesPerHour;
//    },
//    render: function()  {
//        var storeName = document.getElementById('cookiesStore');
//        var articleEl = document.createElement('article');
//        storeName.appendChild(articleEl);

//        var h1El = document.createElement('h1');
//        h1El.textContent = this.name;
//        articleEl.appendChild(h1El);

//        var ulEL = document.createElement('ul');
//        articleEl.appendChild(ulEL);
//        for (var i = 0; i < storeArr.length ; i++) {
//            var liEl = document.createElement('li');
//            ulEL.appendChild(liEl);
//            liEl.textContent = storeArr[i]  + this.salesPerHour[i] + "  cookies";
//        }
//           var totalLiEl = document.createElement('li');
//           ulEL.appendChild(totalLiEl);
//           totalLiEl.textContent = "total : " + this.totalCookiesArr + "  cookies";
//    }
//    }
//    lima.getRandomCustemer();
//    lima.getAvgCookies();
//    lima.render();


