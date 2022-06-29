let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList: function () {
    /*let self = this;
    self.students.forEach(function (student) {
      console.log(self.title + ": " + student);
    });*/

    // arrow function
    /*this.students.forEach(stu => {
      console.log(this.title + ": " + stu);
    })*/

    //bind
    /*this.students.forEach(function (student) {
      console.log(this.title + ": " + student);
    }.bind(this));*/

    //call
    /*this.students.forEach((student) => function(){
      console.log(this.title + ": " + student);
    }.call(this));*/

    /*this.students.forEach((student) => function(stu) {
      console.log(this.title + ": " + stu);
    }.call(this, student));*/
    
    //apply
    this.students.forEach((student) => function () {
      console.log(this.title + ": " + student);
    }.apply(this, [student]));
  }
};
//arrow function
group.showList();
