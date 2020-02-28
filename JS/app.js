'use strict'

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
var storeLocation = []

function Shop(name, minCust, maxCust, avgCookiePerCust) {
    this.name = name
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiePerCust = avgCookiePerCust;
    this.amountOfCookiesPerHour = [];
    this.noOfCustomorPerHour = 0;
    this.totalCookies = 0;
    storeLocation.push(this);  //push the whole object in storeLocation asa an array of objects 
    //it like doing  [seattle,tokyo,etc..]
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
var storesTable = document.createElement('table');
storesTable.setAttribute("id","tab")
articleData.appendChild(storesTable);



function header() {


    var tableRow = document.createElement('tr');
    storesTable.appendChild(tableRow);
    var tableColumn = document.createElement('th');
    tableRow.appendChild(tableColumn);
    tableColumn.textContent = 'Location';
    for (var columns = 0; columns <= hours.length; columns++) {
        tableColumn = document.createElement('th');
        tableRow.appendChild(tableColumn);
        tableColumn.textContent = hours[columns];

    }

    tableColumn.textContent = ('Daily Location Total')

}

Shop.prototype.finalTouches = function () {
    var cookiesRow = document.createElement('tr');
    storesTable.appendChild(cookiesRow)
    var cookiescolumn = document.createElement('td')
    cookiesRow.appendChild(cookiescolumn)
    cookiescolumn.textContent = this.name
    for (var rowLength = 0; rowLength <= hours.length; rowLength++) {
        var cookiescolumn = document.createElement('td')
        cookiesRow.appendChild(cookiescolumn)
        cookiescolumn.textContent = this.amountOfCookiesPerHour[rowLength]  //pay attention to your property
    }
    // var cookiescolumn = document.createElement('td')  // WHY does it add another column???
    // cokiesRow.appendChild(cookiescolumn)
    cookiescolumn.textContent = this.totalCookies
    // console.log(rowLength);
    // console.log(counter2);


}


// console.log(hours.length);
var everyShopTotal = 0;

var totalOfTotals = function () {

    var totalRow = document.createElement('tr');
    storesTable.appendChild(totalRow);
    var tableColumn = document.createElement('td')
    totalRow.appendChild(tableColumn);
    tableColumn.textContent = 'Total'
    for (var hourlyCookieSum = 0; hourlyCookieSum < hours.length; hourlyCookieSum++) {
        console.log('lllllllll', hours.length);


        var sumit = 0;
        var tableColumn = document.createElement('td');
        totalRow.appendChild(tableColumn);

        for (var i = 0; i < 5; i++) {

            sumit += storeLocation[i].amountOfCookiesPerHour[hourlyCookieSum];

            console.log(sumit, `i =${i} , hours=${hourlyCookieSum}`);
        }
        tableColumn.textContent = sumit;
        everyShopTotal += sumit;

        console.log('dsdsd  ', everyShopTotal);

    }


    var lastcell = document.createElement('td')
    totalRow.appendChild(lastcell);
    lastcell.textContent = everyShopTotal
}





var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);













header();

for (var counter2 = 0; counter2 < storeLocation.length; counter2++) {
    storeLocation[counter2].calculateNofCookies();
    storeLocation[counter2].sumOfTheCookies();
    storeLocation[counter2].finalTouches();
}
totalOfTotals();



console.log(lima.amountOfCookiesPerHour);  //its more professional to comment consol.log() after finishing
console.log(dubai.totalCookies);
console.log(tokyo.name);



console.log(tokyo.totalCookies);






function getRandomNumber(min, max) {                        //Helper function
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// name, minCust, maxCust, avgCookiePerCust

var myForm = document.getElementById('cookieForm');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = event.target.location.value;
    console.log(name);

    var minCust = event.target.minCust.value;
    var maxCust = event.target.maxCust.value;
    var avgCookiePerCust = event.target.avgCust.value;
    var cookieObj = new Shop(name, minCust, maxCust, avgCookiePerCust)

    cookieObj.calculateNofCookies();
    cookieObj.sumOfTheCookies();
    cookieObj.finalTouches();
    
    document.getElementById("tab").deleteRow(storeLocation.length);
    console.log(storeLocation.length);
    totalOfTotals();
    
    myForm.reset();
})