function secondLargest(arr) {
    var max = Math.max.apply(null, arr); //get the highest value from the variable array
    arr.splice(arr.indexOf(max), 1); //Reomove the highest value from the array
    return Math.max.apply(null, arr); //return the highest Value from the new array
  }

  module.exports = secondLargest;
  