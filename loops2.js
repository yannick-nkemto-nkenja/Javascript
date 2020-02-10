// // print all multiples of 20 from 0 to 100

// let i = 20;
// for (let i = 0; i <=100; i++){
//     if (i % 20 == 0){
//         console.log(i);
//     }
// }
// let a;


// for (let i = 1; i <=5; i ++) {
//     a=i*20;
//     console.log(a);
// }



// for (var i = 1; i <= 100; i++){
//     if (i % 20 === 0){
//         console.log(i);
//     }
// }


// for (let i = 0; i <= 100; i = i +20) {
//     console.log(i);
// }

// for(let n = 50; n >= 0; n -= 2){
//     console.log (n);
// }

// let i = 0;
// while (i <= 100){
//     if (i % 20 === 0){
//       console.log(i);
//     }
//     i++
// }

// for (let i = 100; i >= 0; i -= 20){
//     console.log(i);
// }


// const n=20;
// for(let i = 100; i >= 0; i-= 20) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i-= 1){
//     if (i % 20 == 0){
//         console.log(i);
//     }
// }

// let x;

//  for (var i = 0; i < 3; i++) {
//         x= "*";
//   for (var j = 0; j < 4; j++) {
//         x+=x;
//  }
//  console.log('x');
// }
//  console.log( x )

// let row = "";
// for (let i = 0; i < 3; i++){

//     for (j = 0; j < 5; j++){
//     row += "*";
//     }
// row += "\n";
// }

// console.log(row)
// let row = "";
// for (i = 0; i < 5; i++){
    
//     for (let j = 0; j < 7; j++){
//     row += "*---"
//     }
//     row +="*---\n";
// }
// console.log(row);

// output prime numbers
// Write a code which outputs number in the interval from 4 to 100

// let n = 100;
// for (let i = 4; i < n; i++) {
//     isPrime = true;


//     for ( j = 4; j < i; j++){

//         if(i % j == 0){
//             isPrime = false;
//         }
        
//     }
//     if (isPrime) console.log(i);
// }



// let row = "";
// for(let i = 0; i < 6; i++){

//     for (let j = 1; j <=10 ; j++){
//     row +="*";
    
//     }
//     row +="\n";
// }


// console.log(row);

// Un triangle with *

/*
      * 
    * * * 
  * * * * * 
* * * * * * * 

*/


// for ( let line = "*"; line.length < 7; line += "*") {
//   console.log(line);
// }


for ( let i = 5; i > 0; i--) {
  letdocument.write("</br>");
}
  for (let j = 0; j < 6 - i; j++) {
    document.write("*");
  }
  for (let j = 6;j <= 5; j++ ) {
    document.write("*");
  }
