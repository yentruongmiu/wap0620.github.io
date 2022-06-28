function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 2) {
    let shooter = function () {
      alert(i);
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}

let army = makeArmy();
army[0];

/*
let i = 0;
setTimeout(() => alert(i), 100); // ?

// assume that the time to execute this function is > 100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}
*/