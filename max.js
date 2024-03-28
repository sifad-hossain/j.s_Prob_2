let lamiya = 95;
let niaz = 59;

// if (lamiya > niaz) {
//     console.log('lamiya will get the strawberry');
// } else {
//     console.log('niaz will eat the strawbery');
// }

// Inside a function
function getMax(num1, num2) {
   if (num1 > num2) {
    return num1;                        
   }
     else{
    return num2;
   } 
}

const max = getMax(69, 90);
const max1 = getMax(59, 98);
const ultimateMax = getMax(max, max1);

// console.log('max of two:', max);
console.log('max of two:', ultimateMax);