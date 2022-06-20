function filterList(arr) {
    return arr.filter(element  => typeof element !== "string"); //create a new array with element that are not strings
 
 }

  module.exports =filterList