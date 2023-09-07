const removeFromArray = (array, inputRemove) => {
    delete array[inputRemove];
    return array;
  }
  
  console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
