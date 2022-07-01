//self pattern
// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     const self = this;
//     this.students.forEach(function (student) {
//       console.log(self.title + ": " + student);
//     });
//   }
// }


//arrow function
/*
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(student => {
      console.log(this.title + ": " + student);
    });
  }
};
*/

//bind

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    const print = function (stu) {
      console.log(this.title + ": " + stu);
    };

    //this.students.forEach((stu) => print.bind(this, stu)());
    this.students.forEach(function (stu) {
      console.log(this.title + ": " + stu);
    }.bind(this));
  }
};


//call

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     const print = function (stu) {
//       console.log(this.title + ": " + stu);
//     };
//     this.students.forEach((stu) => print.call(this, stu));
//     // this.students.forEach((student) => function() {
//     //   console.log(this.title + ": " + student);
//     // }.call(this));
//   }
// };


//apply
/*let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    const print = function (student) {
      console.log(this.title + ": " + student);
    };
    this.students.forEach((student) => print.apply(this,[student]));
    // this.students.forEach((student) => function() {
    //   console.log(this.title + ": " + student);
    // }.apply(this));
  }
};*/
group.showList();
/*
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        });
    }
};
*/

//4 ways: bind, call , apply, self pattern