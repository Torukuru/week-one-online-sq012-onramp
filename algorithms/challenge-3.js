function sumMix(arr) {
    var numberArray = []; //declare an array
    length = arr.length; //get the length of the array being passed in the function
    for (var i = 0; i < length; i++) { //loop each value of the array being passed
        numberArray.push(parseInt(arr[i])); //change each value of the array being passed in the argument to an integer and populate it in the numberArray
       

    }
    var sum = numberArray.reduce(function(a, b){ //return the sum of the array and store in a variable called sum
        return a + b;
    }, 0);
    return sum;

   
 }


  module.exports = sumMix