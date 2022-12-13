

///////Q1//////
// let obj={
//     name:"mariam",
//     age:26,
//     address:"egypt",
// }
// let handler=
// {  
//     set(target,key,value){
//     if(key in target){
//         if (key=='age'){
//             if(value<25 || value>60){
//                 console.log("age must be between 25 and 60")
//             }
//         }

//     }if (key==='address'){
//     if(typeof(value)!= String){
//         console.log("address can only be letters")
//     }
// }
// target[key]=value;

// if(key==='name'){
//     if(value.length<6){
//         console.log("name must be at least 6 chars")
//     }
// }}}
// let pX= new Proxy(obj,handler)
// //for checking the validation
// pX.address=20;
// pX.name="aya";
// pX.age=20;

//////////////////////////////////////////////////



////////Q2////////

// class Shape{
//     static count=0;
//     constructor(){
//         Shape.count ++;
//     }
//     getArea(){
//     }
//     getPerimeter(){
//     }
//     static getCount(){
//         return Shape.count;
//     }
//     toString(){
//         console.log(`area= ${this.getArea()}, perimeter = ${this.getPerimeter()}`);
// }
// }
// class Rectangle extends Shape{
//     constructor(a,b){
//         super();
//         this.a=a;
//         this.b=b;
//     }
//     getArea(){
//         return this.a * this.b;
//     }
    
//     getPerimeter(){
//         return this.a + this.a + this.b + this.b;
//     }

// }

// class Square extends Shape{
//     constructor(a){
//         super();
//         this.a=a;
//     }
//     getArea(){
//         return this.a * this.a;
//     }
//     getPerimeter(){
//         return this.a * 4;
//     }
// }

// class Circle extends Shape{
//     constructor(r){
//         super();
//         this.r=r;
//     }
//     getArea(){
//         return Math.pow(this.r,2)* Math.PI
//     }
//     getPerimeter(){
//         return Math.PI *2*this.r;
//     }
// }
// let c= new Circle(3);
// c.toString();


//////////////////////////////////////////////////////

/////////Q3///////////

// function * fibonnaci(num){
//     let a=1;
//     let b=1;
    
//     if(num>=1){
//         yield a;
//     }
//     if(num>=2){
//         yield b;
//     }
//     for (let i=2; i<num; i++){
//         let sum=a+b;
//         a=b;
//         b=sum;
//         yield  sum;

//     }
// }

// let trial= fibonnaci();///for trial

//////////////////////////////////////////////

////////Q4///////
// let myObject={
//     name:"mariam",
//     age:23,
//     country:"egypt",
//     [Symbol.iterator](){
//         let step=0;
//         let properties=Object.keys(this);
//         return{
//             next(){
//                 return{
//                     value:properties[step],
//                     done:step++===properties.length
//                 }
//             }
//         }
//     }
// }
// for (let prop of myObject){
//     console.log(prop);
// }
/////////////////////////////////////////////////////////



/////////Q5////////
// let fruits=["apple","bannana","mango","strawberry","orange"];
// for(let piece of fruits){
//     if(piece.charAt(0)=='a'){
//         console.log(piece)
//     }}

//     for(let piece of fruits){
//         if(piece.charAt(0)=='b'|| piece.charAt(0)=='s'){
//             let newFruits=[];
//             newFruits.push(piece)
//         console.log(newFruits)
//         }}
//     for(let piece of fruits){
//         if(typeof(piece)!== String ){
//         console.log("piece not string")
//     }}
///////////////////////////////////////////////////
