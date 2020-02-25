'use strict'

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
var storeLocation = [seattle, tokyo, dubai, paris, lima]

function Shop(name, minCust, maxCust, avgCookiePerCust) {
    this.name = name
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiePerCust = avgCookiePerCust;
    this.amountOfCookiesPerHour = [];
    this.noOfCustomorPerHour = 0;
    this.totalCookies = 0;
}



Shop.prototype.calculateNofCookies = function () {

    for (var cookiesPerHourCounter = 0; cookiesPerHourCounter < hours.length; cookiesPerHourCounter++) {

        this.noOfCustomorPerHour = getRandomNumber(this.minCust, this.maxCust);
        //console.log(this.noOfCustomorPerHour);

        this.amountOfCookiesPerHour.push(Math.floor(this.noOfCustomorPerHour * this.avgCookiePerCust));
        //console.log(this.amountOfCookiesPerHour);

    }
}

Shop.prototype.sumOfTheCookies = function () {

    for (var totalCookieCounter = 0; totalCookieCounter < hours.length; totalCookieCounter++) {

        this.totalCookies += this.amountOfCookiesPerHour[totalCookieCounter];

    }
}


document.getElementById('sec1');
var articleData = document.createElement('article');
sec1.appendChild(articleData);


Shop.prototype.header = function () {

    var storesTable = document.createElement('table');

    articleData.appendChild(storesTable);


    var tableRow = document.createElement('tr');
    storesTable.appendChild(tableRow);
    var tableColumn = document.createElement('th');
    tableRow.appendChild(tableColumn);
    tableColumn.textContent = 'Location';
    for (var columns = 0; columns < 16; columns++) {
        tableColumn = document.createElement('th');
        tableRow.appendChild(tableColumn);
        tableColumn.textContent = hours[columns];

    }

    tableColumn.textContent = ('Daily Location Total')
}

Shop.prototype.finalToushes = function(){

var storesTable = document.createElement('table');  
sec1.appendChild(storesTable);
var tableRow = document.createElement('tr');
    storesTable.appendChild(tableRow);
//for(var r=0; r<5; r++){
    
    for(var c=0; c<16; c++){
    var tableColumn = document.createElement('td');
    tableRow.appendChild(tableColumn);
    tableColumn.textContent =  storeLocation[0];
   
}
}
//}







var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);

seattle.header();
tokyo.calculateNofCookies();  //put it after var seattle
tokyo.sumOfTheCookies();
seattle.finalToushes();

var storeLocation = [seattle, tokyo, dubai, paris, lima]

for (var counter2 = 0; counter2 < storeLocation.length; counter2++) {
    storeLocation[counter2].calculateNofCookies();
    storeLocation[counter2].sumOfTheCookies();
}



console.log(lima.amountOfCookiesPerHour);
console.log(dubai.totalCookies);
console.log(tokyo.name);



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



