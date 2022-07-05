//even
Array.prototype.even = function () {
  let arr = this;
  return arr.filter(num => num % 2 === 0);
}
//odd
Array.prototype.odd = function () {
  let arr = this;
  return arr.filter(num => num % 2 == 1);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.even());
console.log(arr.odd());