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

      
      if(dataScore[key] !== undefined) {
        dataScore[key].mentor = getUnique(dataScore[key].mentor);
        tempGrup[key] = dataScore[key];
        
        if(tempGrup[key].mentor[0] === current.mentorGithub ) {
          //console.log('true')
        } else {
          console.log('pairs ',tempGrup[key].mentor[0]);
        console.log('mento ',current.mentorGithub);
          if(exeption[current.mentorGithub] !== undefined) {
            exeption[current.mentorGithub].students[tempGrup[key]['githubLogin']] = tempGrup[key];
            delete tempGrup[key];
          } else {
            exeption[current.mentorGithub] = {};
            exeption[current.mentorGithub].students = {};
            exeption[current.mentorGithub].students[tempGrup[key]['githubLogin']] = tempGrup[key]
            delete tempGrup[key];
          }
        }
      }
      //console.log('dataScore[key] ',dataScore[key]);
    }
    return current;
  });
  // set exeptions
  let githubExeptions = Object.keys(exeption);
  //console.log(githubExeptions)
  data.forEach(current => {
    if(githubExeptions.includes(current.mentorGithub) === true) {
      //console.log(true)
    } else {
      //console.log(false)
    }
  });
  //console.log('tempGrup[key ',exeption);
  //console.log(data[0].students);
};
