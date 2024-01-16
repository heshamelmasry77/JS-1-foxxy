// // setTimeout
//
// // it is a method ( function )
// // si to used to execute a function
// // after a specific period of time
//
//
// // 1.
//
// setTimeout(function () {
//     console.log("Hello Jack");
// }, 5000);
//
//
// setTimeout(logHello, 5000);
//
//
// function logHello() {
//     console.log("Hello Jack two");
// }
//
// // 1. select the element with class .loader
//
// const loading = document.querySelector(".loader");
// console.log("loader element", loading);
//
// // 2. use the setTimeout
//
// setTimeout(function () {
//     // 3. change the inner HTML of the loading
//     loading.innerHTML = "Finished Loading my boy ;))))";
// }, 5000);

const counterContainer = document.querySelector(".counter");
let timeLeft = 10;

//         if the timeLeft  > 0


// 1. everytime 1 second
// 2. change the innerHTML
// 3. reduce the timeLeft by 1  timeLeft--
// 4. condition

// else
// counterContainer innerHTML to be counter finished

//1. select the container of the ad
const offer = document.querySelector(".ad");
console.log("offer", offer);

// 2. setTimeout

setTimeout(function () {
    offer.style.display = "block";
}, 3000);




