// -------------------------------------------------------------

console.log(names);
let names="Mitali"
//ReferenceError: Cannot access 'names' before initialization

//--------------------------------------------------------------

const a = 1<2<3;  //1 is less than 2 and also 3
const b = 1>2>3;  //3 is greater than 2 and also 1 

console.log(a,b)

//a is true , b is false

//---------------------------------------------------------------


let str= 'jscafe'
str='cscafe'
console.log(str)

//cscafe

//----------------------------------------------------------------


console.log(5>"15"<5); //true
console.log(7>"15"<7); //true
console.log(7<"85">5); //true

//-----------------------------------------------------------------

console.log(1);

setTimeout (()=>{
    console.log(2);
},1000);

setTimeout(()=>{
    console.log(3);
},0);

console.log(4);

//1,4,3, after one second 2 

//--------------------------------------------------------------------

Promise.all
Promise.any
Promise.allSettled
Promise.race

//---------------------------------------------------------------------

numb = 6;
console.log(numb);
let numb;

//ReferenceError:canont access 'numb' before initialization

console.log(typeof typeof 1); //string
console.log(typeof 1); //number
 
//------------------------------------------------------------------------

const numbers=[1,2,3,4,5];
const[y] = numbers;
console.log(y);

//1 due to destructuring syntax

//------------------------------------------------------------------------

let x = 3;
let z = new Number(3);

console.log(x == z);  // true
console.log(x === z);  //false

//-----------------------------------------------------------------------

let number = 0;
console.log(number++); //0
console.log(++number); //2

//------------------------------------------------------------------------

console.log(3+4+"5"); //75

//------------------------------------------------------------------------

let newList = [1].push(2);
console.log(newList.push(3));
//.push method is array, it returns the length of the new array i.e 2
/*calling .push method to the list but new list will hold numeric value,that is 2, we can't use .push method
to the numeric value */
//TypeError: newList .push is not a function

//------------------------------------------------------------------------

var employeeId = 'abc';  //global variable
function foo(){
    employeeId ="123";
    return;
    function employeeId(){}
     }
    foo();
    console.log(employeeId);
//abc;because of hoisting

//-----------------------------------------------------------------------

const arr1  = [1,2,3];
const str1= "1,2,3";
console.log(arr1 == str1);
//true

//-----------------------------------------------------------------------

let c = 5;
let d = c++;
console.log(c+d);
//11

//-----------------------------------------------------------------------

var m = 1;     
console.log(m);
function m(){
    console.log("2")
} 
m()
//1 ERROR!
//TypeError: m is not a function

//-----------------------------------------------------------------------

function sum(a=5,b=7) {
    console.log(a+b);
}
sum(null,20);
//20

//------------------------------------------------------------------------

var arrA = [1,2,3];
var arrB = arrA.slice();
arrB[0]=0;
console.log(arrA)
//[1,2,3]

//-------------------------------------------------------------------------

let person = {name:'Mitali'};
const members =[person];
person = null;
console.log(members);
//[{name:'Mitali}]

//--------------------------------------------------------------------------

const box = {
    x:5,y:10
};
Object.freeze(box);
box.x = 100;
console.log(box);
//{x:5,y:10}

//---------------------------------------------------------------------------

new Promise(()=>{
    console.log("d")
});
console.log("s");
//d and s

//---------------------------------------------------------------------------

const firstPromise = new Promise((res, req) => {
    setTimeout(res,500,"one");
});
const secondPromise = new Promise((res, req) => {
    setTimeout(res,100,"two");
});
Promise.race([firstPromise,secondPromise]).then((res)=>{
    console.log(res);
});
//two

//------------------------------------------------------------------------------

console.log(aa);
var aa;
aa=6;
console.log(aa);
//6

//------------------------------------------------------------------------------

getData1();
getData2();
function getData1(){
    console.log("Hello") //Hello
}
var getData2 = ()=>{
console.log("I AM Jeevan");  //TypeError:getData2 is not a function
};
//if you want to print getData2() then call it at the last

//-------------------------------------------------------------------------------

function func() {
    try {
      console.log(1); // execute the try block
      return; // exit the function immediately but not fully
    } catch (e) {
      console.log(2); // no errors so it will not executed
    } finally {
      console.log(3); // it will run regardless
    }
    console.log(4);
  }
  func();
  // 1 3
  
  // -----------------------------------------------------------------------------
  
  function job() {
    return new Promise((resolve, reject) => {
      reject();
    });
  }
  let promise = job();
  promise
    .then(() => {
      console.log("1"); // the initial then block will not executed because its rejected
    })
    .then(() => {
      console.log("2"); // same
    })
    .catch(() => {
      console.log("3"); // it will executed
    })
    .then(() => {
      console.log("4"); // despite rejections it will executed because this .then is the part of the promise chain
    });
  // 3 4
  
  // ------------------------------------------------------------------------------
  
  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log("value is " + i);
    });
  }
  /*
  value is 10
  value is 10
  value is 10
  value is 10
  value is 10
  value is 10
  value is 10
  value is 10
  value is 10
  value is 10 
  */
  
  // -----------------------------------------------------------------------------------
  
  console.log(myVar);
  let myVar = 10;
  // ReferenceError: Cannot access 'myVar' before initialization
  
  // ----------------------------------------------------------------------------------
  
  console.log([] == []);
  // false
  
  // ----------------------------------------------------------------------------------
  
  const X = {
    count: 0,
  };
  const Y = X;
  Y.count = X.count++;
  console.log(Y.count, X.count);
  // 0 0
  
  // -------------------------------------------------------------------------------
  
  console.log("Start");
  setTimeout(()=>{
      console.log("Timeout");
  });
  Promise.resolve().then(()=>console.log("Promise"))
  console.log("End")
  /*
  Start
  End
  Promise
  Timeout
  */
  
  // -------------------------------------------------------------------------------
  
  console.log("Start");
  
  Promise.resolve().then(()=>console.log("Promise"))
  setTimeout(()=> console.log("Timeout 1"),0);
  
  Promise.resolve().then(()=>console.log("Promise"))
  setTimeout(()=> console.log("Timeout 2"),0);
  
  console.log("End")
  /*
  Start
  End
  Promise
  Promise
  Timeout 1
  Timeout 2
  */
      
  // ----------------------------------------------------------------------------------
  
  
  for(var i = 0; i<3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 2000 + i);
  }
  /*
  after 2 seconds:
  3
  3
  3
  */
  
  // -----------------------------------------------------------------------------------
  
  let output = (function(x){
    delete x;
    return x;
  })(3);
  console.log(output);
  //3
  
  // ------------------------------------------------------------------------------------
  