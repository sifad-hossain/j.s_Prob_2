const jim = 56;
const tim = 89;
const kim = 68;

if (jim > tim && jim > kim) {
    console.log('JIM is the ultimate boss');    
}
else if(tim > jim && tim > kim ){
    console.log('Tim is the boss');
}
 else{
    console.log('kim is the kardashians boss');
}


//
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num2 > num1) {
        return num1;
    }
    else if(num2 > num3 && num3 > num2){
        return num2
    }
    else {
        return num3;
    }
}

const max1 = maxOfThree(58, 79, 95);
// console.log(max1);

const max = Math.max(12, 34, 1, 65, 76,2, 98);
console.log('max isusing Math.max', max);