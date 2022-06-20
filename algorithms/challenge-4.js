function sumTwoSmallestNums(arr) {
    arr = arr.filter(function(x) { return x > -1; }); //create a new array with elements greater than -1 from the array passed in the argument
    var min = Math.min.apply(Math, arr); //get the lowest value of the array and store it in Min variable
    arr.splice(arr.indexOf(min), 1); //Remove the lowest Value from the array
    var secondMin = Math.min.apply(Math, arr); //get the Lowest value and store it
     sum = min + secondMin; //add the two lowest Value
     return sum;

    }
   

  module.exports =sumTwoSmallestNums