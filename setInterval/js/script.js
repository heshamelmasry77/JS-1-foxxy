// setInterval

// the setInterval method is
// similar to the setTimeout, but
// it executes
// a function at a certain
// interval until it is
// cleared

let count = 0;
const intervalId = setInterval(function () {
    console.log("hello from the other world!!");
    count++; // increment
    if (count === 5) {
        clearInterval(intervalId);
    }
}, 1000);


const container = document.querySelector(".container");

let counter = 0;

const ulIntervalId = setInterval(function () {

    counter++; // 1
    container.innerHTML += `<li> Hesh the ${counter} </li>`;
    // container.innerHTML += "<li>" +  "Hesh the " + counter  + "</li>"
    // I want to clear the interval if I reach counter of 5

    if (counter === 5) {
        clearInterval(ulIntervalId);
    }

}, 1000);
















