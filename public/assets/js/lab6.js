function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 2) {
    let j = i;
    let shooter = function () {
      //alert(i);
      //console.log(i);
      console.log(j);
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}

let army = makeArmy();
army[0]();


/*
question 2: Write a function printNumbers (from, to) that outputs a number every second, starting from 'from' and end with 'to'
*/
/*
function printNumbers(from, to) {
  let current = from;
  const timeId = setInterval(() => {
    console.log(current);
    current++;
    if (current > to) {
      clearInterval(timeId);
    }
  }, 1000);
}

printNumbers(1, 10);
*/
/*
question 3: In the code below there's a setTimout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.
When will the scheduled function run?
- After the loop.
- Before the loop.
- In the beginning of the loop.
- What is alert going to show?
*/
/*
let i = 0;
setTimeout(() => alert(i), 100); // 100000000

// assume that the time to execute this function is > 100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}
*/
/*
Function setTimeout will execute after the current code is completed. That means the scheduled function will run after the for loop finishes.
alert is going to show 100000000 ( last value of i )
*/