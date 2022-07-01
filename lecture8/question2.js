function Student(fname, lname, grades = []) {
  this.firstName = fname;
  this.lastName = lname;
  this.grades = grades;
}

Student.prototype.inputNewGrade = function (newGrade) {
  this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function () {
  return this.grades.reduce((average, current, idx, array) => average + current / array.length, 0); 
}

const st1 = new Student('John', 'Smith');
st1.grades = [90, 95, 97];
st1.inputNewGrade(85);

const st2 = new Student('Edward', 'Park');
st2.grades = [88, 91, 94];
st2.inputNewGrade(98);

const students = Array.of(st1, st2);
const result = students.reduce((average, stu, idx, array) => average + stu.computeAverageGrade() / array.length, 0);
console.log(result);