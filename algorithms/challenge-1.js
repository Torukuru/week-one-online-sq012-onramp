function secondLargest(arr) {
 var max = Math.max.apply(null, arr);
 arr.splice(arr.indexOf(max), 1);
 return Math.max.apply(null, arr);
}
secondLargest([6, 3, 0, 30, 7]);
secondLargest([71, 33, 3, 51, 18, 6]);
secondLargest([42, 68, 22, 60, 7]);
secondLargest([19, 2, 73, 44, 27, 9]);
secondLargest([10, 9, 69, 30, 10]);
secondLargest([0, 1, 2, 3, 4]);
secondLargest([2, 30, 4, 57, 6, 9, 100]);
module.exports = secondLargest