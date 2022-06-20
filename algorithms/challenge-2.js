function filterArray(arr) {
    const onlyNumbers = arr.filter(
        element => typeof element === 'number'
      );
}
filterArray([1, 2, "a", "b"]);
module.exports = filterArray