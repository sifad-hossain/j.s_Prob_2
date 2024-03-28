const heights = [65, 62, 72, 68, 60, 76];

function getMax(numbers) {
    let max = numbers[0];
   for (const num of numbers) {
        if(num > max){
            max = num;
        }
   }    
   return max;  
}

const max = getMax(heights);
console.log('max value is', max);















































// function getMax(numbers) {
//     for (const num1 of numbers) {
//      console.log(num1);
//     }   
//     return numbers;
//  }
 
//  const max = getMax(heights);
//  console.log('max value is', max);