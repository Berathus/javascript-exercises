const sumAll = (num1, num2) => {
    var sum = 0;
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
    return sum;
  }
  
  
  console.log(sumAll(1,9));

// Do not edit below this line
module.exports = sumAll;
