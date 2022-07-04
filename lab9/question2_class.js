class Question {
  constructor(questionId, answer) {
    this.questionId = questionId;
    this.answer = answer;
  }

  checkAnswer(correctAnswer) {
    return this.answer === correctAnswer;
  }
}

class Student {
  constructor(studentId, answers = []) {
    this.studentId = studentId;
    this.answers = answers;
  }

  addAnswer(question) {
    this.answers.push(question);
  }
}

class Quiz {
  constructor(questionArr = [], students = []) {
    this.questions = new Map();
    questionArr.forEach(question => this.questions.set(question.questionId, question.answer));
    
    this.students = students;
  }

  scoreStudentBySid(studentId) {
    let student = this.students.filter(stu => stu.studentId === studentId)[0];

    return student.answers.reduce((sum, currentQuestion) => {
      let questionId = currentQuestion.questionId;
      let correctAnswer = this.questions.get(questionId);
      let result = currentQuestion.checkAnswer(correctAnswer);
      if (result) {
        sum += 1;
      }
      return sum;
    }, 0);
  }

  getAverageScore() {
    return this.students.reduce((average, currentStudent, idx, array) => average + this.scoreStudentBySid(currentStudent.studentId) / array.length, 0);
  }
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