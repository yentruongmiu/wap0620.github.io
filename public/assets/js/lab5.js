/* 
Use Array Methods: filter, map, reduce, etc to implement functions below:
 1. Create a function using function declaration named sum with one parameter of Array type, the returned result is the sum of all elements which are greater than 20.

 2. Create a function using function expression named getNewArray with one parameter of String Array, return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.
*/

function sum(arr) {
  let sum = arr.reduce(function(item, current) {
    return item + current;
  }, 0);
  return sum;
}

const arr1 = [23, 40, 30, 35];
console.log(sum(arr1));

const getNewArray = function(strArr) {
  let newArr = strArr.filter(item => item.length >= 5 && item.includes('a'));
  return newArr;
};

const arr2 = ["hello", "world", "abc", "abdef", "yen", "happy"];
console.log(getNewArray(arr2));