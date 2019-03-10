let tasksName = require('./tasks-process');
let pairs = require('./pairs-process');
const parseScore = require('./score-process');

const getUnique = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i += 1) {
    const str = arr[i];
    obj[str] = true;
  }
  return Object.keys(obj);
};

module.exports = function mergeDara() {
  pairs = pairs();
  tasksName = tasksName();
  const dataScore = parseScore();
  const exeption = {};
  const data = pairs.map((current) => {
    const tempGrup = current.students;
    for (const key in tempGrup) {
      if (dataScore[key] !== undefined) {
        dataScore[key].mentor = getUnique(dataScore[key].mentor);
        tempGrup[key] = dataScore[key];
        if (tempGrup[key].mentor[0] === current.mentorGithub) {
        } else if (exeption[current.mentorGithub] !== undefined) {
            exeption[current.mentorGithub][tempGrup[key].githubLogin] = tempGrup[key];
            delete tempGrup[key];
          } else {
            exeption[current.mentorGithub] = {};
            exeption[current.mentorGithub][tempGrup[key].githubLogin] = tempGrup[key];
            delete tempGrup[key];
          }
      }
    }
    return current;
  });
  // set exeptions
  const githubExeptions = Object.keys(exeption);
  const dataSchool = {};
  data.forEach((current) => {
    if (githubExeptions.includes(current.mentorGithub) === true) {
      if (exeption[current.mentorGithub] !== undefined) {
        const missStudents = Object.keys(exeption[current.mentorGithub]);
        missStudents.forEach((student) => {
          current.students[student] = exeption[current.mentorGithub][student];
        });
      }
      dataSchool[current.name] = current;
    } else {
      dataSchool[current.name] = current;
    }
  });
  return dataSchool;
};
