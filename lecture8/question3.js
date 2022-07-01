Array.prototype.myNumberSort = function() {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log([6, 1, 5, 2, 4, 9].myNumberSort());
