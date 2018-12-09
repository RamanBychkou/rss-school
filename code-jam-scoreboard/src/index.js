window.onload = function (){
  const session = require('./sessionData.js');
const user = require('./userData.js');
const rssData = session[33]
const rssDemoData = session[34];
const Create = require('./createFragment.js')
console.log(rssData)
console.log(user)

let tasksData = {};
for(let i = 0; i < rssData.puzzles.length; i += 1){
  tasksData[rssData.puzzles[i].name] = {
    name: rssData.puzzles[i].name,
    solutions: rssData.rounds[i].solutions
  }
  
}

let userData = {};
for(let k = 0; k < user.length; k += 1){
  userData[user[k].displayName] = {
    name: user[k].displayName,
    id: user[k].uid
  }
} 
const createTable = new Create();
createTable.createElement('div').setAttr({class: 'table'}).setInFragment(null);
createTable.createElement('table').setInFragment('.table');
createTable.createElement('tr').setInFragment('table');
createTable.createElement('td').setText('DisplayName Участника').setInFragment('tr')
for(key in tasksData){
  createTable.createElement('td').setText(tasksData[key].name).setInFragment('tr')
}
createTable.createElement('td').setText('Общее время').setInFragment('tr')


for(key in userData) {
  createTable.createElement('tr').setInFragment('table');
  createTable.createElement('td').setText(userData[key].name).setAttr({dataId: userData[key].id}).setInFragment('tr:last-child')
  let quantity = 0
  let baseTime = 150;
  for(key2 in tasksData){
    let currentValue = tasksData[key2].solutions[userData[key].id];
    if(currentValue === undefined){
      createTable.createElement('td').setText(baseTime).setInFragment('tr:last-child');
      quantity = quantity + baseTime;
    } else {
      quantity = quantity + +(currentValue.time.$numberLong);
      createTable.createElement('td').setText(currentValue.time.$numberLong).setInFragment('tr:last-child')
    }
    
  }
  createTable.createElement('td').setText(quantity).setInFragment('tr:last-child');
}
createTable.setInDocument('.container')
console.log(tasksData)
console.log(userData)
}