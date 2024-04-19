

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 3000);
//     });
// }


// async function getWeatherData() {
//     await api();
//     await api();
// }




function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success data");
    }, 2000);
  });
}

async function getAllData(){
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
    console.log("getting data5...");
    await getData(5);
    console.log("getting data6...");
    await getData(6);
}

(async function (){
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
    console.log("getting data5...");
    await getData(5);
    console.log("getting data6...");
    await getData(6);
})();








// console.log("featching data 1");

// //promise chain

// getData(1).then((res) => {
//   console.log("featching data 2");
//   return getData(2);
// })
//   .then((res) => {
//     console.log("featching data 3");
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
// })

// function getData (dataId, getNextData){
//    return new Promise ((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 10000);
//    });
// }

// const getPromise = () => {
//     return new Promise ((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// })

// promise.catch((err) =>{
//     console.log("promise rejected", err);
// })

// function asyncFunc(){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data 1");
//             resolve("success");
//             // reject("some error occured");
//         }, 4000);
//     });
// }

// console.log("fetching data 1....");
// let p1 = asyncFunc();

// p1.then((res) =>{
//     console.log(res);
// })

// p1.catch((err) =>{
//     console.log(err);
// })

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("success data 1");
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success data 2");
//         }, 4000)
//     });
// }

// console.log("fetching data 1...");

// let p1 = asyncFunc1();

// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data 2...");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     })
// })

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });


// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// console.log("one");
// console.log("two");
// setTimeout(() =>{
//     console.log("three");
// }, 4000);
// console.log("four");
// console.log("five");

// function sum(a, b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);]

// function getData (dataId) {
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000)
// }

// getData(1);
