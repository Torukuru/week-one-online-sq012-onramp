function filterArray(arr) {
    var onlyNumbers = arr.filter(
        element => typeof element === 'number'
      );
      return onlyNumbers;
}
filterArray([1, 2, "a", "b"]);
filterArray([4, "z", "f", 5]);
filterArray(["$%^", 567, "&&&"]);
filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88]);
filterArray([16, "op", 20, "[[", 24, 26, "yy"]);
filterArray([1, "a", "b", 0, 15]);
filterArray([1, 2, "aasf", "1", "123", 123]);
module.exports = filterArray