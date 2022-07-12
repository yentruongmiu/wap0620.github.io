console.log('start');

new Promise((resolve, reject) => {
    console.log('1');
    resolve('2');
}).then(console.log);

console.log('end');

//start
//1
//end
//2