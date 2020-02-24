var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

var seattle = {

    minCust: 23, maxCust: 65, avgCookiePerCust: 6.3, amountOfCookies: [], totalCookies: 0, seattleCookies: [],
    noOfCustomorPerHour: 0,
   

    noOfCustomer: function () {

        for (i = 0; i < hours.length; ++i) {

            this.noOfCustomorPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);

            var cookiesPerHour = this.noOfCustomorPerHour * this.avgCookiePerCust;

            this.amountOfCookies.push(Math.floor(cookiesPerHour));

            this.totalCookies = Math.floor(this.totalCookies + cookiesPerHour);

            this.seattleCookies.push(`${hours[i]}: ${this.amountOfCookies[i]} cookies `)

            

        }

      //  return [this.seattleCookies, this.totalCookies]; we dont need to return
    },


        sales: function () {

        var mainTag = document.getElementById('sec1');

        dataArtic = document.createElement('article');

        mainTag.appendChild(dataArtic);

        var cityh3 = document.createElement('h3')

        dataArtic.appendChild(cityh3);
        
        cityh3.textContent = 'Seattle';
        
        var unorderList = document.createElement('ul');

        cityh3.appendChild(unorderList);

        
        for (var counter = 0 ; counter<hours.length ; counter++){

            var cookiesList = document.createElement('li');

        unorderList.appendChild(cookiesList);

        cookiesList.textContent = this.seattleCookies[counter] ;
        }
        
        cookiesList.textContent = `Total Cookies Sold Today: ${this.totalCookies}`;
       

    }
}

//seattle.noOfCustomer(seattle.minCust, seattle.maxCust);
seattle.noOfCustomer();
seattle.sales();

// function getRandomNumber(min,max) {
//     var Customers = Math.floor(Math.random()* (max-min+1) + min); 
//     return Customers;
// }



// console.log(seattle.cookiesPerHour);
// console.log(seattle.arrcookie);

// console.log(seattle.noOfCustomorPerHour);
// console.log('Cookies',seattle.amountOfCookies);
// console.log(seattle.seattleCookies);
// console.log('Total:',seattle.totalCookies);




var Tokyo = {

    minCust: 3, maxCust: 34, avgCookiePerCust: 1.2, amountOfCookies: [], totalCookies: 0, seattleCookies: [],
    noOfCustomorPerHour: 0,
   

    noOfCustomer: function () {

        for (i = 0; i < hours.length; ++i) {

            this.noOfCustomorPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);

            var cookiesPerHour = this.noOfCustomorPerHour * this.avgCookiePerCust;

            this.amountOfCookies.push(Math.floor(cookiesPerHour));

            this.totalCookies = Math.floor(this.totalCookies + cookiesPerHour);

            this.seattleCookies.push(`${hours[i]}: ${this.amountOfCookies[i]} cookies `)

            

        }

      //  return [this.seattleCookies, this.totalCookies]; we dont need to return
    },


        sales: function () {

        var mainTag = document.getElementById('sec1');

        dataArtic = document.createElement('article');

        mainTag.appendChild(dataArtic);

        var cityh3 = document.createElement('h3')

        dataArtic.appendChild(cityh3);
        
        cityh3.textContent = 'Tokyo';
        
        var unorderList = document.createElement('ul');

        cityh3.appendChild(unorderList);

        
        for (var counter = 0 ; counter<hours.length ; counter++){

            var cookiesList = document.createElement('li');

        unorderList.appendChild(cookiesList);

        cookiesList.textContent = this.seattleCookies[counter] ;
        }
        
        cookiesList.textContent = `Total Cookies Sold Today: ${this.totalCookies}`;
       

    }
}

//seattle.noOfCustomer(seattle.minCust, seattle.maxCust);
Tokyo.noOfCustomer();
Tokyo.sales();







var Dubai = {

    minCust: 11, maxCust: 38, avgCookiePerCust: 3.7, amountOfCookies: [], totalCookies: 0, seattleCookies: [],
    noOfCustomorPerHour: 0,
   

    noOfCustomer: function () {

        for (i = 0; i < hours.length; ++i) {

            this.noOfCustomorPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);

            var cookiesPerHour = this.noOfCustomorPerHour * this.avgCookiePerCust;

            this.amountOfCookies.push(Math.floor(cookiesPerHour));

            this.totalCookies = Math.floor(this.totalCookies + cookiesPerHour);

            this.seattleCookies.push(`${hours[i]}: ${this.amountOfCookies[i]} cookies `)

            

        }

      //  return [this.seattleCookies, this.totalCookies]; we dont need to return
    },


        sales: function () {

        var mainTag = document.getElementById('sec1');

        dataArtic = document.createElement('article');

        mainTag.appendChild(dataArtic);

        var cityh3 = document.createElement('h3')

        dataArtic.appendChild(cityh3);
        
        cityh3.textContent = 'Dubai';
        
        var unorderList = document.createElement('ul');

        cityh3.appendChild(unorderList);

        
        for (var counter = 0 ; counter<hours.length ; counter++){

            var cookiesList = document.createElement('li');

        unorderList.appendChild(cookiesList);

        cookiesList.textContent = this.seattleCookies[counter] ;
        }
        
        cookiesList.textContent = `Total Cookies Sold Today: ${this.totalCookies}`;
       

    }
}

//seattle.noOfCustomer(seattle.minCust, seattle.maxCust);
Dubai.noOfCustomer();
Dubai.sales();





var Paris = {

    minCust: 20, maxCust: 38, avgCookiePerCust: 2.3, amountOfCookies: [], totalCookies: 0, seattleCookies: [],
    noOfCustomorPerHour: 0,
   

    noOfCustomer: function () {

        for (i = 0; i < hours.length; ++i) {

            this.noOfCustomorPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);

            var cookiesPerHour = this.noOfCustomorPerHour * this.avgCookiePerCust;

            this.amountOfCookies.push(Math.floor(cookiesPerHour));

            this.totalCookies = Math.floor(this.totalCookies + cookiesPerHour);

            this.seattleCookies.push(`${hours[i]}: ${this.amountOfCookies[i]} cookies `)

            

        }

      //  return [this.seattleCookies, this.totalCookies]; we dont need to return
    },


        sales: function () {

        var mainTag = document.getElementById('sec1');

        dataArtic = document.createElement('article');

        mainTag.appendChild(dataArtic);

        var cityh3 = document.createElement('h3')

        dataArtic.appendChild(cityh3);
        
        cityh3.textContent = 'Paris';
        
        var unorderList = document.createElement('ul');

        cityh3.appendChild(unorderList);

        
        for (var counter = 0 ; counter<hours.length ; counter++){

            var cookiesList = document.createElement('li');

        unorderList.appendChild(cookiesList);

        cookiesList.textContent = this.seattleCookies[counter] ;
        }
        
        cookiesList.textContent = `Total Cookies Sold Today: ${this.totalCookies}`;
       

    }
}

//seattle.noOfCustomer(seattle.minCust, seattle.maxCust);
Paris.noOfCustomer();
Paris.sales();




var Lima = {

    minCust: 2, maxCust: 16, avgCookiePerCust: 4.6, amountOfCookies: [], totalCookies: 0, seattleCookies: [],
    noOfCustomorPerHour: 0,
   

    noOfCustomer: function () {

        for (i = 0; i < hours.length; ++i) {

            this.noOfCustomorPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);

            var cookiesPerHour = this.noOfCustomorPerHour * this.avgCookiePerCust;

            this.amountOfCookies.push(Math.floor(cookiesPerHour));

            this.totalCookies = Math.floor(this.totalCookies + cookiesPerHour);

            this.seattleCookies.push(`${hours[i]}: ${this.amountOfCookies[i]} cookies `)

            

        }

      //  return [this.seattleCookies, this.totalCookies]; we dont need to return
    },


        sales: function () {

        var mainTag = document.getElementById('sec1');

        dataArtic = document.createElement('article');

        mainTag.appendChild(dataArtic);

        var cityh3 = document.createElement('h3')

        dataArtic.appendChild(cityh3);
        
        cityh3.textContent = 'Lima';
        
        var unorderList = document.createElement('ul');

        cityh3.appendChild(unorderList);

        
        for (var counter = 0 ; counter<hours.length ; counter++){

            var cookiesList = document.createElement('li');

        unorderList.appendChild(cookiesList);

        cookiesList.textContent = this.seattleCookies[counter] ;
        }
        
        cookiesList.textContent = `Total Cookies Sold Today: ${this.totalCookies}`;
       

    }
}

//seattle.noOfCustomer(seattle.minCust, seattle.maxCust);
Lima.noOfCustomer();
Lima.sales();