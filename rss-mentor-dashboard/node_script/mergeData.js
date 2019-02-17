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
      // console.log('key ',key);
      if (dataScore[key] !== undefined) {
        dataScore[key].mentor = getUnique(dataScore[key].mentor);
        tempGrup[key] = dataScore[key];

        if (tempGrup[key].mentor[0] === current.mentorGithub) {
          // console.log('true')
        } else {
          // console.log('pairs ',tempGrup[key].mentor[0]);
        // console.log('mento ',current.mentorGithub);
          if (exeption[current.mentorGithub] !== undefined) {
            exeption[current.mentorGithub][tempGrup[key].githubLogin] = tempGrup[key];
            delete tempGrup[key];
          } else {
            exeption[current.mentorGithub] = {};
            exeption[current.mentorGithub][tempGrup[key].githubLogin] = tempGrup[key];
            delete tempGrup[key];
          }
        }
      }
      // console.log('dataScore[key] ',dataScore[key]);
    }
    return current;
  });
  // set exeptions
  const githubExeptions = Object.keys(exeption);
  // console.log(githubExeptions)
  let dataSchool = {};
  data.forEach((current) => {
    // console.log('githubExeptions', githubExeptions)
    // console.log('githubExeptions', current.mentorGithub, githubExeptions.includes(current.mentorGithub))
    if (githubExeptions.includes(current.mentorGithub) === true) {
      // console.log('ccc', exeption[current.mentorGithub])
      if (exeption[current.mentorGithub] !== undefined) {
        // console.log('bbbb')
        const missStudents = Object.keys(exeption[current.mentorGithub]);
        // console.log('aaa', missStudents);
        missStudents.forEach((student) => {
          current.students[student] = exeption[current.mentorGithub][student];
          //console.log('student', current);
        });
        
      }
      dataSchool[current.name] = current;
    } else {
      //console.log(false);
      dataSchool[current.name] = current;
    }
  });
  // console.log('tempGrup[key ',exeption);
  // console.log(data);
  return dataSchool;
};
