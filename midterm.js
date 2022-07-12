const students = [
  { id: 1, name: "John", major: "Compro", transcript: [{ course: 301, grade: 98 }, { course: 302, grade: 95 }, { course: 501, grade: 93 }] },
  { id: 2, name: "Eward", major: "Compro", transcript: [{ course: 300, grade: 98 }, { course: 305, grade: 90 }, { course: 503, grade: 92 }] },
  { id: 3, name: "Park", major: "Compro", transcript: [{ course: 301, grade: 98 }, { course: 302, grade: 95 }, { course: 501, grade: 100 }] },
  { id: 4, name: "Tom", major: "MBA", transcript: [{ course: 300, grade: 98 }, { course: 302, grade: 95 }, { course: 501, grade: 93 }] }
];

//calculate average grade of each student that join a major and course

function calculateAverageGrade(array, major, course) {
  return array.filter(stu => stu.major === major && stu.transcript.find(t => {
    if (t.course.toString().includes(course)) {
      return t;
    }
  })).map(stu => {
    return {
      name: stu.name,
      averageGrade: stu.transcript.reduce((avg, current, idx, arr) => avg + current.grade / arr.length, 0)
    }
  });
}
function calculateAverageGrade2(array, major, course) { 
  return array.filter(stu => stu.major === major && stu.transcript.find(t => t.course.toString().includes(course))).reduce((prev, current, idx, arr) => {
    prev.push({
      name: current.name,
      averageGrade: current.transcript.reduce((avg, cur, idx, trans) => avg + cur.grade / trans.length, 0)
    });
    return prev;
  }, []);
}
const res = calculateAverageGrade(students, 'Compro', '301');
console.log(JSON.stringify(res));
const res2 = calculateAverageGrade2(students, 'Compro', '301');
console.log(res2);