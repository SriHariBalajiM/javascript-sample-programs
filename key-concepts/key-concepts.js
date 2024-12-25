/* callback - A fucntion that is passed as an arguement to another function
             They are used to handle asynchronous operations such as:
                    Reading a file
                    Interacting with database
                    Network Requests */
//sum(display,5,10);
//subtract(display,10,5);

function sum(callback,x,y){
    let result=x+y;
    callback(result);
}

function subtract(callback,x,y){
    let result=x-y;
    callback(result);
}

function display(result){
    console.log(result)
}

/* forEach() - Method used to iterate over the elements in an array 
            And applies a specific condition (callback) to each elements,
    array.forEach(callback) ---> behind the scenes it will hold the element,index and the array. */

//let fruits=["apple","banana","mango","strawberry"];

//fruits.forEach(uppercase);
//fruits.forEach(capitalize);
//fruits.forEach(display);

function uppercase(element,index,array){
          array[index]= element.toUpperCase();
}

function capitalize(element,index,array){
    array[index]= element.charAt(0).toUpperCase()+element.slice(1);
}

function display(element){
    console.log(element);
}


// Map()- accepts the callback and applies the function to all the elements in the array.
//     It is similar to forEach() but it returns a new array. It is used to transform the data in an array.


// const numbers=[1,2,3,4,5,6]
// const squaredNumbers= numbers.map(square);
// const cubeNumbers= numbers.map(cube);


// console.log(squaredNumbers);
// console.log(cubeNumbers);

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}

// const dates=['2024-01-11','2024-01-15','2023-12-25','2025-4-14'];
// const formattedDates=dates.map(formatDates);

// console.log(formattedDates);

function formatDates(element){
    const parts= element.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}


// filter() - creates a new array by filtering out the elements in an array

// const ages=[23,6,39,12,34,19,18];
// const adults=ages.filter(isAdult);

// console.log(adults);

function isAdult(element){
    return element>=18;
}

// reduce()- used to reduce the elements of the array to a single value.

// const marks=[93,45,67,89,92];
// const total = marks.reduce(getAverage);
// let average=total/marks.length;

// console.log(average)

function getAverage(accumulator,element){
    return accumulator+element;
}


//array of objects

// const fruits =[{name:"apple",color:"red",calories:95},
//     {name:"banana",color:"yellow",calories:101},
//     {name:"pineapple",color:"yellow",calories:60},
//     {name:"orange",color:"orange",calories:77},
//     {name:"pomegranate",color:"red",calories:92},
// ];

//forEach
// fruits.forEach((fruit)=>{
//    // console.log(fruit.name);
// });

//filter

//const redColoredFruits= fruits.filter((fruit)=>fruit.color==='red' );
//console.log(redColoredFruits);

//map

//const fruitColors= fruits.map((fruit)=>fruit.color);
//console.log(fruitColors);

//reduce

//const maxCalorieFruit = fruits.reduce((max,element)=>max.calories>element.calories? max:element );
//console.log(maxCalorieFruit);

//sort
//const numbers=[1,10,9,5,7,6,2,4,3,8];

//numbers.sort((a,b)=> a-b); //ascending order
//numbers.sort((a,b)=> b-a); //descending order

//console.log(numbers);

const peoples=[{name:'Sri',age:24,weight:100},
    {name:'sow',age:26,weight:62},
    {name:'jaggy',age:23,weight:77},
];

peoples.sort((a,b)=>a.weight - b.weight);
peoples.sort((a,b)=>a.name.localeCompare(b.name));

//console.log(peoples);

//closure - A function that is defined inside another function.
            // The inner function has access to the variable and scope of the outer function.
            // It helps in state maintanence and allows for private property.
            // Used frequently in frameworks like React,angular,Vue.js

            function createGame(){
                let score=0;

                function increment(points){
                    score+=points;
                    return console.log(`The point is increased by ${points} and the score is ${score}pts`);
                }
                function decrement(points){
                    score-=points;
                    return console.log(`The point is decreased by ${points} and the score is ${score}pts`);
                }
                score=1000;
                return {increment,decrement};
            }

            const game=new createGame();
            game.increment(6);
            game.increment(7);
            game.decrement(3);

// Error - An object which is created to represent a error that may occur. It oftens occurs during user input interactions/ network request.
// It is handled by try, catch and finally block
// try {}- encloses the code which may cause the potential error
// catch{} - catches and handles any thrown error from try{}
//finally - it executes always. Generally they are used to close the request/connections or to clear the resources


// Callback Hell() 
//A situation in javascript where a callback is nested with other callbacks to a degree where it becomes difficult to read.
//It is an old pattern to handle asynchronous functions.
//Nowadays we will be using promise/async+await to avoid this callback hell.


// function task1(callback){
//     setTimeout(()=>{
//         console.log('task 1 is completed');
//         callback();
//     },3000);
// }

// function task2(callback){
//     setTimeout(()=>{
//         console.log('task 2 is completed');
//         callback();
//     },2000);
// }

// function task3(callback){
//     setTimeout(()=>{
//         console.log('task 3 is completed');
//         callback();
//     },1000);
// }

// function task4(callback){
//     setTimeout(()=>{
//         console.log('task 4 is completed');
//         callback();
//     },500);
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("All tasks are completed");
//             })
//         })
//     })
// });
// task2();
// task3();
// task4();
// console.log('All tasks completed');

// Promise
// It is object used to handle asynchronous operations. Wrap the promise object around the {async code}. A promise promises to return a value.
// return new promise((resolved,rejected)=>{async code});

// function task1(){
//     return new Promise((resolved,rejected)=>{
//         const isTaskCompleted=true;
//         setTimeout(()=>{
//             if(isTaskCompleted){
//             resolved('task 1 is completed');
//             }
//             else{
//                 rejected('Failed to complete task 1');
//             }
//         },3000);
//     });
// }

// function task2(){
//     const isTaskCompleted=true;
// return new Promise((resolved,rejected)=>{
//     setTimeout(()=>{
//         if(isTaskCompleted){
//             resolved('task 2 is completed');
//             }
//             else{
//                 rejected('Failed to complete task 2');
//             }    },2000);
// });
// }

// function task3(){
//     return new Promise((resolved,rejected)=>{
//         const isTaskCompleted=false;
//         setTimeout(()=>{
//             if(isTaskCompleted){
//                 resolved('task 3 is completed');
//                 }
//                 else{
//                     rejected('Failed to complete task 3');
//                 }        },1000);
//     });
// }

// function task4(){
//     const isTaskCompleted=true;
//     return new Promise((resolved,rejected)=>{
//         setTimeout(()=>{
//   if(isTaskCompleted){
//                 resolved('task 3 is completed');
//                 }
//                 else{
//                     rejected('Failed to complete task 3');
//                 }          },500);
//     });
// }

// task1().then((value)=>{console.log(value);return task2();}).then((value)=>{console.log(value);return task3();}).then((value)=>{
//     console.log(value); return task4();
// }).then((value)=>{console.log(value);console.log('All the tasks are completed')}).catch((error)=>console.error(error));


// Async/Await
// async – makes an function to return a promise
// await – makes an async function to wait for a promise
// By combining these both, we can write an asynchronous code in a synchronous manner.
// Method chaining is not required.

function task1(){
    return new Promise((resolved,rejected)=>{
        const isTaskCompleted=true;
        setTimeout(()=>{
            if(isTaskCompleted){
            resolved('task 1 is completed');
            }
            else{
                rejected('Failed to complete task 1');
            }
        },3000);
    });
}

function task2(){
    const isTaskCompleted=true;
return new Promise((resolved,rejected)=>{
    setTimeout(()=>{
        if(isTaskCompleted){
            resolved('task 2 is completed');
            }
            else{
                rejected('Failed to complete task 2');
            }    },2000);
});
}

function task3(){
    return new Promise((resolved,rejected)=>{
        const isTaskCompleted=true;
        setTimeout(()=>{
            if(isTaskCompleted){
                resolved('task 3 is completed');
                }
                else{
                    rejected('Failed to complete task 3');
                }        },1000);
    });
}

function task4(){
    const isTaskCompleted=true;
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
  if(isTaskCompleted){
                resolved('task 4 is completed');
                }
                else{
                    rejected('Failed to complete task 3');
                }          },500);
    });
}

async function doTasks() {
try{
 const result1 = await task1();
 console.log(result1);

 const result2 = await task2();
 console.log(result2);

 const result3 = await task3();
 console.log(result3);

 const result4 = await task4();
 console.log(result4);

 console.log('All tasks are completed');
}
catch(error){
    console.error(error);
}
}

doTasks();



// JSON – Javascript object notation, basically a data-interchange format.
//       It is generally used for exchanging a data between the server and the web-application.
//       JSON Files – {key:value},[{},{},]

//        JSON.stringfy() – used to convert a javascript object to a json string
//        JSON.parse() – used to convert a json string to a js object.
//        fetch()- it is used to fetch data from the json file.


// Fetching data from an api 
// fetch() is a built in javascript function used to making HTTP request to fetch some resources(JSON images, data,files etc..)
// It simplifies the asynchrounous data fetching in javascript and used for interacting with API’s to retrieve and fetch data asynchrounously over the web.
// fetch(url,{options});
