/* Lecture: Functions returning functions */
var john = {
    name: 'John',
    age: 26,
    job: 'designer'
};

function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(`${name}, can you please explain what UX design is?`);
    }
  } else {
    return function(name) {
      console.log(`Hello ${name}, what do you do?`)
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');

interviewQuestion('teacher')('Mark');

function makeMultiplier(x) {
  return function(y) {
    console.log(x * y)
  }
}

makeMultiplier(2)(3)