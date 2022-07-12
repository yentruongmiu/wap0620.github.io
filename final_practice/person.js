class Person {
    constructor(name = 'John') {
      this.name = name;
    }

    getName() {
      console.log(this.name);
    }
}


exports = new Person('Bella');
//console.log(exports); // Person { name: 'Bella'}}

// module.exports = new Person('jjj');
// console.log(module.exports);