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

    for (var j = 0; j < hours.length; j++) {
        var td2El = document.createElement('td');
        td2El.textContent = stores;       
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

