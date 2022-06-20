function sumTwoSmallestNums(arr) {
    var positive = array.filter(function(x) { return x > -1; });
    var min = Math.max.apply(null, positive);
    positive.splice(positive.indexOf(max), 1);
    var minTwo =  Math.max.apply(null, positive);
    var sum = min + minTwo;
    return sum;
    

    
 
 }


 sumTwoSmallestNums([19, 5, 42, 2, 77]);
 sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]);
 sumTwoSmallestNums([2, 9, 6, -1]);
 sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]);
 sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]);
 sumTwoSmallestNums([-1, -1, 1, 1]);
 sumTwoSmallestNums([1, 1, 1, 1]);
 
  module.exports =sumTwoSmallestNums