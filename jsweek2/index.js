// console.log("lets start");



// const rectangle1 = {
//     length: 1,
//     breadth: 2,
//     // method of this object
//     draw : function() {
//         console.log("draw")
//     }
// };

// factory function
// function createRectangle(length, breadth) {
//     const rectangle = {
//         length: length,
//         breadth: breadth,
//         // method of this object
//         draw() {
//             console.log("draw rectangle")
//         }
//     };
//     return rectangle;
// };

// let rectangleObj1 = createRectangle(5,4)
// let rectangle1 =createRectangle(7,9);
// let rectangle2 = createRectangle(8,10);

// constructor function -> pascal notation -> first letter of every word is capital
// function Rectangle(length,breadth){
//     this.length = length;
//     this.breadth = breadth;
//     this.draw= function(){
//         console.log("drawing");
//     }
// };

// // object creation using constructor

// let rectangleObject = new Rectangle(100000,100000000);

// rectangleObject.color ="yellow";
// console.log(rectangleObject);
// delete rectangleObject.color;
// console.log(rectangleObject);

let rectangle = {
    length:2,
    breadth:4
};
// for-in loop
// for(let key in rectangle){
//     // keys are reflected to key variables
//     // values are reflected thorugh rectangle(key)
//     console.log(key,rectangle[key]);
// }; 
// for-of loop
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('color' in rectangle){
//     console.log('present')
// }
// else{
//     console.log('absent')
// }

// let src = {
//     a:10,
//     b:20,
//     c:30
// };
// let dest = {};

// for(let key in src){
//       dest[key] = src[key];
// }
// console.log(dest);

// let src = {
//     a:10,
//     b:20,
//     c:30,
// };
// let src2 = {value:25};
// let dest = Object.assign({},src,src2);
// console.log(dest);
// src.a++;
// console.log(dest)

// let src = {
//     a:10,
//     b:20,
//     c:30,
// };
// let dest ={...src};
// console.log(dest);
// src.a++;
// console.log(dest);

// let lastName = "babbar";
// let firstName = new String("love"); 

// let message = `this is  
// my ${lastName}
//  message`;

// console.log(message)
// // let words = message.split(' ');
// // console.log(words);

// let date =new Date();

// let date2 = new Date(1998, 6, 20, 7);

// date2.setFullYear(2002);

// console.log(date2);


// let numbers = [1,3,5,7];
// console.log(numbers);
// console.log(numbers);
// console.log(numbers.indexOf(7));

// // we want to ceeck if a number exsist in array
// if(numbers.indexOf(4) != -1){
//     console.log('present');
// };

// console.log(numbers.includes(7));

// console.log(numbers.indexOf(4,2));

// let numbers =[1,2,3,4,5,6,7];
// numbers.pop();
// numbers.shift();
// numbers.splice(2,1);
// console.log(numbers);

// let numbers = [1,2,3,4,5];
// let numbers2 = numbers
// // numbers.length = 0; 
// numbers.splice(0,numbers.length);
// console.log(numbers);
// console.log(numbers2);

// let first = [1,2,3,4];
// let second = [4,5,6,7];

// let combined = first.concat(second);
// console.log(combined);

// let sliced = combined.slice(2,4)
// console.log(sliced);

// let first = [1,2,3,4];
// let second = [4,5,67,7];

// let combined = [...first,"q",...second,"n"];
// console.log(combined);
// // copy kaise create kare
// let another = [...combined];

// let arr = [10,20,30,40,50];
// // for(let value of arr){
// //     console.log(value);
// // };

// arr.forEach(numbers=>console.log(numbers));

// join
// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');
// console.log(joined);

// split
// let message = "this is my first message";
// let parts = message.split(' ');
// console.log(parts);

//  joining after spliting
// let joined = parts.join('_');
// console.log(joined);

// sorting
// let numbers = [40,30,20,10];
// numbers.sort();
// console.log(numbers);
// numbers.reverse();

// filtering an array
// let numbers = [1,-1,2,-2,3,-3,4,-4];
// let filtered = numbers.filter(value=> value <= 0);
// console.log(filtered);

// mapping an array
// let numbers = [7,8,9,10];
// console.log(numbers);
// let items=numbers.map(fvalue=>{
//      'student_no' + value;
// );
// console.log(items)

// 
// mapping with objects
let numbers = [1,2,-6,-9];
let filtered = numbers.filter(value => value >= 0);

let items = filtered.map(function(num){
    let obj = {value : num};
    return obj;
});
console.log(items);