const person = require('./person');
//console.log(__dirname);
person.getName(); //person.getName is not a function

person.name = 'Jack';

person.getName();

//in person.js, code exports an object Person { name: 'Bella'}. Then when we use person.getName as a function in Person class, executor can not find the function declaration. 