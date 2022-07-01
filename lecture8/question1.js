const student = {
  firstName: '',
  lastName: '',
  grades: [],
  inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade: function () {
    return this.grades.reduce((average, current, idx, array) => average + current / array.length, 0);
  }
};

const st1 = Object.create(student);
st1.firstName = "John";
st1.lastName = "Smith";
st1.grades = [90, 95, 97];
st1.inputNewGrade(85);

const st2 = Object.create(student);
st2.firstName = "Edward";
st2.lastName = "Park";
st2.grades = [88, 91, 94];
st2.inputNewGrade(98);

const students = [st1, st2];
//console.log(students);
const result = students.reduce((average, stu, idx, array) => average + stu.computeAverageGrade()/array.length, 0);
console.log(result);
