function filterList(arr) {
    var onlyNumbers = arr.filter(
        element => typeof element === 'number'
      );
      console.log (onlyNumbers);
 }
 filterList([1,2,'a','b']);
 filterList([1,'a','b',0,15])
 filterList([1,2,'aasf','1','123',123])

  module.exports =filterList