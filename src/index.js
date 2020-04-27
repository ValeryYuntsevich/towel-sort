
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let isMatrix = matrix ? matrix : [];
 
  if(isMatrix.length === 0) {
    return [];
  }

  if(isMatrix.length > 0) {
    const arr = isMatrix.reduce((accumulator, currentValue, index) => 
      index % 2 == 0 ? accumulator.concat(...currentValue) : 
      accumulator.concat(...currentValue.reverse()),[]);
    return arr;
  }
}
