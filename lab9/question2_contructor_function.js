function Question(qid, answer) {
  this.qid = qid;
  this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
}

function Student(studentId) {
  this.studentId = studentId;
  this.answers = [];
}

Student.prototype.addAnswer = function(question) {
  this.answers.push(question);
}

function Quiz(questions, students) {
  this.questions = new Map();
  questions.forEach(q => this.questions.set(q.qid, q.answer));

  this.students = students;
}

Quiz.prototype.scoreStudentBySid = function (studentId) {
  const student = this.students.filter(stu => stu.studentId === studentId)[0];
  
  return student.answers.reduce((sum, currentQuestion) => {
    if (currentQuestion.checkAnswer(this.questions.get(currentQuestion.qid))) {
      sum = sum + 1;
    }
    return sum;
  }, 0);
}

Quiz.prototype.getAverageScore = function () {
  return this.students.reduce((prev, student, idx, array) => {
    return prev + this.scoreStudentBySid(student.studentId) / array.length;
  }, 0);
}


const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];

const quiz = new Quiz(questions, students);
let scoreForStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreForStudent10); // Result: 3

let scoreForStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreForStudent11); // Result: 2

let average = quiz.getAverageScore();
console.log(average);