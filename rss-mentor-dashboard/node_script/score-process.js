const xlsx = require('node-xlsx');


module.exports = function parseScore() {
  // parse Mentore Score
  const mentorScoreFromFile = xlsx.parse(`${__dirname}/data/Mentor score.xlsx`);
  const dataScore = mentorScoreFromFile[0].data;
  const mentorsGithub = 1;
  const studentGithub = 2;
  const taskName = 3;
  const studentPull = 4;
  const mark = 5;
  const tasksMarks = {};
  dataScore.shift();
  // parse dataScore
  dataScore.forEach((current) => {
    const studentGithubLink = current[studentGithub];
    const studentLogin = studentGithubLink.replace('https://github.com/', '').toLowerCase();
    const task = current[taskName];
    // console.log(task)
    const taskMark = current[mark];
    const pullLink = current[studentPull];
    const mentorCheck = current[mentorsGithub];
    if (tasksMarks[studentLogin] !== undefined) {
      tasksMarks[studentLogin][task] = {};
      tasksMarks[studentLogin][task].nameTask = task.trim();
      tasksMarks[studentLogin][task].mark = taskMark;
      tasksMarks[studentLogin][task].pullLink = pullLink;
      tasksMarks[studentLogin].mentor.push(mentorCheck);
    } else {
      tasksMarks[studentLogin] = {};
      tasksMarks[studentLogin].githubLink = studentGithubLink;
      tasksMarks[studentLogin].githubLogin = studentLogin;
      tasksMarks[studentLogin][task] = {};
      tasksMarks[studentLogin][task].nameTask = task;
      tasksMarks[studentLogin][task].mark = taskMark;
      tasksMarks[studentLogin][task].pullLink = pullLink;
      tasksMarks[studentLogin].mentor = [mentorCheck];
    }
  });
  return tasksMarks;
};
