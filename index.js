// let popCornSize = "L";

// if(popCornSize === 'S'){
//     console.log("Pop-corn price : 50");
// }if(popCornSize === 'M'){
//     console.log("Pop-corn price : 100");
// }if(popCornSize === 'L'){
//     console.log("Pop-corn price : 200");
// }if(popCornSize === 'XL'){
//     console.log("Pop-corn price : 250");
// }


// let str = "apple";

// if(str[0] === 'a' &&  str.length == 5){
//     console.log("good string");
// }


// let weekNo = 6;

// switch(weekNo){
//     case (1) : {
//         console.log("Monday");
//         break;
//     }case (2) : {
//         console.log("Tuesday");
//         break;
//     }case (3) : {
//         console.log("Wednessday");
//         break;
//     }case (4) : {
//         console.log("Thrusday");
//         break;
//     }case (5) : {
//         console.log("Friday");
//         break;
//     }case (6) : {
//         console.log("Saturday");
//         break;
//     }case (7) : {
//         console.log("Sunday");
//         break;
//     }
// }


// let firstNumber = 382;
// let secondNumber = 43242;

// let reminderFN = firstNumber%10;
// let reminderSN = secondNumber%10;
// if(reminderFN === reminderSN) console.log("True");
// else console.log("False");

// const name = prompt("Enter your Name","Enter your age");
// // const age = prompt();  
// alert(`${name} is ${age} year old.`);



// fun();
// console.log(x);
// let x = 9;

// function fun(){
//     var a = 4;
//     fun2();
//     function fun2(){
//         console.log(a);
//     }
// }



// function fun(){
//     let a = 4;
//     function fun2(){
//         console.log(a);
//     }
//     a =9;
//     return fun2();
// }

// var z = fun();
// // console.log(z);
// z();


// function x(){
//     let  a = 90;
//     return function y(){
//         let b = 60;
//         return function z(){
//             console.log(a,b);
//         }
        
//     }
     
// }
// var f = x();
// console.log(f);
// f();


// function fun(){
//     for(var i =0;i<=5;i++){
//         let a = i;
//         setTimeout(function (){
//         console.log(a);
//         },i*1000);
//     }
//     console.log("hello")
// }
// fun();

//example of data hiding and data privacy using clouser
// function counter(){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(count);
//     }
// }
// let counter1 = counter();
// counter1();
// counter1();
// let counter2 = counter();
// counter2();
// counter2();
// counter2();


//example of data hiding and data privacy with constructor using clouser

// function counter(){
//     let count = 0;
//     this.increament = function (){
//         count++;
//         console.log(count);
//     }    
//     this.decreament = function (){
//         count--;
//         console.log(count);
//     }
// }
// let counter1 = new counter();
// counter1.increament();
// counter1.increament();
// counter1.increament();
// counter1.decreament();


//Function Statement 
// function a(){
//     console.log("this is a statement function");
// }
// a();

// //function expression

// //b();  -it give type error bcoz its not obey hoisting 
// var b = function(){
//     console.log("this is a expression function");
// }
// b();


//Anonymous function

// function (){

// }




// setTimeout(function (){
//     console.log("timer");
// },4000);

// //Callback function in JS
// function y(callback){
//     console.log("Y");
//     callback();
// }

// y(function callback(){
//     console.log("callback");
// });


//Event Listenner
// document.getElementById("clickMe").addEventListener("click",function (){
//     console.log("button clicked")
// });



// let arr = [
//     "this is my era",
//     "i am your boss",
//     "my name is gurjeet"
// ]

// function xyz(){
//     arr.forEach((arr,i) => console.log(`Line ${i} = `,arr));
// }
// xyz();



//setTimeout trust issue

// console.log('code start');

// setTimeout(function (){
//     console.log("callback")
// },5000);

// let startTime  = new Date().getTime();
// let endTime  = startTime;
// while(endTime < startTime+3000){
//     // console.log("while running");

//     endTime = new Date().getTime();
// }
// console.log("while end");





//HIGHER ORDER FUNCTION

// const radius = [87,3,455,67,56,8];

// // const calculateCircustance = function(radius){
// //     const circumstance = [];
// //     for(let i=0;i<radius.length;i++){
// //         circumstance.push(2 * Math.PI * radius[i]);
// //     }
// //     return circumstance;
// // }
// // console.log(calculateCircustance(radius));

// // function calculateArea(calculateCircustance){
// //     const ans = calculateCircustance*calculateCircustance/4*Math.PI;
// //     return ans;
// // }

// // console.log(calculateArea(calculateCircustance));

// const area = function (radius){
//     return Math.PI*radius*radius;
// }

// const circumstace = function (radius){
//     return 2*Math.PI*radius;
// }

// const diameter = function (radius){
//     return 2*radius;
// }


// function calculate(radius,logic){
//     const ans = [];
//     for(let i=0;i<radius.length;i++){
//         ans.push(logic(radius[i]));
//     }
    
//     return ans;
// }

// console.log(radius.map(area));

// // console.log(calculate(radius,area));
// // console.log(calculate(radius,circumstace));
// // console.log(calculate(radius,diameter));



// MAP, FILTER & REDUCE FUNCTION IN JS

// const arr = [2,6,3,9,5,1];

// function double(x){
//     return x*2;
// }

// // console.log(arr.map(double));
// console.log(arr.map((x) => x*2));

// function getlessthen4(r){
//     return r<4;
// }

// // console.log(arr.filter(getlessthen4));
// console.log(arr.filter((r) => r<4));



// function fun(){
//     for(var i =0;i<=5;i++){
//         let a = i;
//         setTimeout(function (){
//         console.log(a);
//         },i*1000);
//     }
//     console.log("hello")
// }
// fun();


// function run(){
//     setTimeout(() =>{
//         for(var i=0;i<=5;i++){
//             console.log(i);
//         }
//     },2000);
    
// }
// run();s
for(let i = 0;i<=3;i++)
{
    const log = () => {
        console.log(i);
    }
    setTimeout(log,100); 
}