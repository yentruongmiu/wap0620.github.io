let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList: function () {
    console.log(this);
    let self = this;
    this.students.forEach(function (student) {
      console.log(self.title + ": " + student);
    });
    //using arrow function
    // this.students.forEach(stu => {
    //   console.log(this.title + ": " + stu);
    // })
  }
};

//group.showList();
//group.showList.bind(group)();

//group.showList.call(group);
group.showList.apply(group);
