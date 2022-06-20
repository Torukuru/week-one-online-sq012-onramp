function filterArray(arr) {
    arr.filter(
        element => typeof element === 'number'
      );
      return arr;
}
filterArray([1, 2, "a", "b"]);
module.exports = filterArray