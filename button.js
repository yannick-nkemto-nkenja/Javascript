// 1. how to build the brow?
// 2. how to repeat the process?


// function buildRow(columns) {
//   let row = '';
//   for (let i = 0; i < columns; i++) {
//     row += '*';
//   }
//   return row;
// }

// function buildButton(rows, columns) {
//   let button = '';
//   for (let i = 0; i < rows; i++) {
//     button += buildRow(columns) + '\n';
//   }
//   return button;
// }

// // let row = buildRow(5);
// // console.log(row);

// let button = buildButton(3, 5);
// console.log(button);


/*


******
*    *
*    *
******
*/

// 1. how to build a 'full' row
// 2. how to build an 'empty' row
// 3. how to build the whole button, knowing that:
//    1. the first and last rows are always 'full'
//    2. all other rows in between are always 'empty'


// for ( let line = "*"; line.length < 7; line += "*") {
//   console.log(line);
// }

/*
Context: Devil May Cry
Stylish Rankings

1 = Dull!
5 = cool!
10 = Bravo!
15 = Awesome!
20 = Stylish!

Create a function that, given the amount of damage you inflict to enemies,
will return the related stylish ranking string.

Hint: use the switch statement;

*/


// function devilMayCry(i) {
//   let a =  +prompt('a?','' )
//   let ranking = '';
//   switch ('') {
//     case 1:
//       console.log( Dull );
//       break;
  
//     case 5:
//       console.log( Cool );
//       break;
  
//     case 10:
//       console.log( Bravo )
//     case 15:
//       console.log( Awesome );
//       break;
//     case 20:
//       console.log( Stylish )
//   }
//   }

/*
buildTriangle(rows)
      *
    * * *
  * * * * *
* * * * * * *
*/

// for ( let line = "*"; line.length < 7; line += "*") {
//   console.log(line);
// }



// let height = 3;
// for (let i = 0; i <= height; i++) {
//   let row = "";
//   for (let j = 0; j<=(height - i); j++) {
//     row += " ";
//   } for (let k = 0; k <= i; k++) {
//     row += "**";
//   }
  
//   console.log(row);
// }


//   let line = 6;
//   for (let a = 1; a <= line; a++) {
//          let output = "";
//     for (let b = 1; b <= (line-a); b++) {
//        output += " ";
//     }
//     for (let c = 1; c <= a; c++) {
//       output += "**";
//     }
    
//   console.log(output);
// }
