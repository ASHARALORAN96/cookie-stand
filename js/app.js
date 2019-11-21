'use strict';

var storeContener = document.getElementById('cookiesStore');
var tableEl = document.createElement('table');
storeContener.appendChild(tableEl);
var hours = ['6 AM ', '7 AM  ', '8 AM  ', '9AM  ', '10 AM  ', '11 AM ', '12 AM  ', '1 PM  ', '2 PM   ', '3 PM  ', '4 PM  ', '5 PM ', '6 PM  ', '7 PM '];
var stores = [];

// console.log(stores);
function Shop(name,
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
    thEl.textContent = " Total";

}
// random custemer
Shop.prototype.getRandomCustemer = function () {
    var randomCustemer = Math.floor(Math.random() * ((this.max) - (this.min)) + this.min);
    return randomCustemer;
}
// get Avg Cookies
Shop.prototype.getAvgCookies = function () {
    for (var i = 0; i < hours.length; i++) {
        var maltiplyAvg = Math.ceil(this.avgCookies * this.getRandomCustemer());
        this.salesPerHour.push(maltiplyAvg);
        this.totalCookies += this.salesPerHour[i];
    }

}
// Shop render 
Shop.prototype.ShopRender = function () {
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
    var name =event.target.name.value;
    var min =parseInt(event.target.min.value);
    var max =parseInt(event.target.max.value);
    var avgCookies =parseFloat(event.target.avgCookies.value);
    var newStores = new Shop(name,min,max,avgCookies);
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

var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);


headerRender();
for (var x = 0; x < stores.length; x++) {
    stores[x].ShopRender();
}
renderFooter();   
