'use strict';

var storeContener = document.getElementById('cookiesStore');
var tableEl = document.createElement('table');
storeContener.appendChild(tableEl);
var hours = ['6am ', '7am  ', '8am  ', '9am  ', '10am  ', '11am  ', '12am  ', '1pm   ', '2pm   ', '3pm  ', '4pm  ', '5pm  ', '6pm  ', '7pm '];
var stores = [];

// console.log(stores);
function Location(name,
    min,
    max,
    avgCookies) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.salesPerHour = [];
    this.totalCookies = 0;
    stores.push(this);
    this.getAvgCookies();

}
// header
function headerRender() {
    var headerEl = document.createElement('tr');///create row for time header
    tableEl.appendChild(headerEl);
    var th = document.createElement('th');
    headerEl.appendChild(th);
    th.textContent = '  ';
    for (var i = 0; i < hours.length; i++) {
        var th1El = document.createElement('th');
        th1El.textContent = hours[i];
        headerEl.appendChild(th1El);
    }
    var thEl = document.createElement('th');
    headerEl.appendChild(thEl);
    thEl.textContent = " total";

}
// random custemer
Location.prototype.getRandomCustemer = function () {
    var randomCustemer = Math.floor(Math.random() * ((this.max) - (this.min)) + this.min);
    return randomCustemer;
}
// get Avg Cookies
Location.prototype.getAvgCookies = function () {
    for (var i = 0; i < hours.length; i++) {
        var maltiplyAvg = Math.ceil(this.avgCookies * this.getRandomCustemer());
        this.salesPerHour.push(maltiplyAvg);
        this.totalCookies += this.salesPerHour[i];
    }

}
// Shop render 
Location.prototype.ShopRender = function () {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.name;
    for (var j = 0; j < hours.length; j++) {
        var td2El = document.createElement('td');
        td2El.textContent = this.salesPerHour[j];
        trEl.appendChild(td2El);
    }

    var totalTdEl = document.createElement('td');
    trEl.appendChild(totalTdEl);
    totalTdEl.textContent = this.totalCookies;
}
// the event function
function handleSubmit(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var min = event.target.min.value;
    var max = event.target.max.value;
    var avgCookies = event.target.avgCookies.value;
    var newStores = new Location(name,min,max,avgCookies);
    var rowCount = tableEl.rows.length;
    tableEl.deleteRow(rowCount -1);
    newStores.ShopRender();
    renderFooter();
    form.reset();
}
var form = document.getElementById('newLocation');
form.addEventListener("submit",handleSubmit);

// footer
function renderFooter() {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = 'Total';
    var megaTotal = 0;

    for (var i = 0; i < hours.length; i++) {
        var sum = 0;
        for (var j = 0; j < stores.length; j++) {
            sum += stores[j].salesPerHour[i];
            megaTotal += stores[j].salesPerHour[i];
        }
        tdEl = document.createElement('td');
        tdEl.textContent = sum;
        trEl.appendChild(tdEl);
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = megaTotal;
    trEl.appendChild(tdEl);
}
// form handleSubmit

var seattle = new Location('seattle', 23, 65, 6.3);
var tokyo = new Location('tokyo', 3, 24, 1.2);
var dubai = new Location('dubai', 11, 38, 3.7);
var paris = new Location('paris', 20, 38, 2.3);
var lima = new Location('lima', 2, 16, 4.6);


headerRender();
for (var x = 0; x < stores.length; x++) {
    stores[x].ShopRender();
}
renderFooter();   
