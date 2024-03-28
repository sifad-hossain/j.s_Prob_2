function calculateMoney(ticketSale) {

    let ticketRate = 120;

    let worker = 500;
    let lunchStaff = 50*8;

    let totalCost = worker + lunchStaff;
    let RevenueAll = ticketSale * ticketRate;

    let balance = RevenueAll - totalCost;

    return balance;

  }


  function deleteInvalids(array) {

    let numbs = [];

    for (let number of array) {

        if( typeof number == 'number' && isNaN(number) == false){

        numbs.push(number);
      }
    }
    return numbs;
    }
 


// function  checkName(name) {
//   const newName = name[name.length - 1].toLowerCase();

//   if (typeof name !== 'string') {
//     return 'invalid';    
//   }
//   if (['a', 'y', 'i', 'e', 'o', 'u', 'w'].includes (newName).toLowerCase) {
//     return ('Good Name')
//   }
//   else{
//     return ('Bad Name');
//   }
// }
// console.log(checkName(['lamiya']));