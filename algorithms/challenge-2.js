function filterArray(arr) {
    const onlyNumbers = arr.filter(
        element => typeof element === 'number'
      );
      return onlyNumbers;
}
filterArray([1, 2, "a", "b"]);
module.exports = filterArray