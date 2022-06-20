function sumMix(arr) {
    var numberArray =[];
    var length = arr.length;
    for(var i = 0; i < length; i++) {
        numberArray.push(parseInt(arr[i]));
    }
 var sum = numberArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return sum;
 }
 sumMix([9, 3, '7', '3']);
 sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]);
 sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']);
 sumMix([1, '5', 6, 7]);
 sumMix([10, 60, '80', 10]);
 sumMix(['1', 2, 3, '9', 10]);
 sumMix(['5', 6, '7']);
  module.exports = sumMix