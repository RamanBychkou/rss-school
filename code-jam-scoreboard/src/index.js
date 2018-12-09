window.onload = function (){
  const session = require('./sessionData.js');
const user = require('./userData.js');
const rssData = session[33]
const rssDemoData = session[34];
const Create = require('./createFragment.js')
console.log(rssData)
console.log(user)


document.querySelector('button').addEventListener('click', showData);
let userData = {};
  for(let k = 0; k < user.length; k += 1){
    userData[user[k].displayName] = {
      name: user[k].displayName,
      id: user[k].uid
    }
  }
  function showData(e){
    e.preventDefault();
    let check = document.querySelector('input:checked');
    let tasksData = {};
    if(check.value === 'demo' || check === undefined){
      for(let i = 0; i < rssDemoData.puzzles.length; i += 1){
        tasksData[rssDemoData.puzzles[i].name] = {
          name: rssDemoData.puzzles[i].name
        }
        const createTable = new Create();
        if(document.querySelector('.table') !== null){
          document.querySelector('.table').remove();
        }
        createTable.createElement('div').setAttr({class: 'table'}).setInFragment(null);
        createTable.createElement('table').setInFragment('.table');
        createTable.createElement('tr').setInFragment('table');
        createTable.createElement('td').setText('DisplayName Участника').setInFragment('tr')
        for(key in tasksData){
          createTable.createElement('td').setText(tasksData[key].name).setInFragment('tr')
        }
        createTable.createElement('td').setText('Общее время').setInFragment('tr')
        

      
          createTable.createElement('tr').setInFragment('table');
          let baseTime = 150;
          createTable.createElement('td').setText('RSschool').setInFragment('tr:last-child');
          createTable.createElement('td').setText(baseTime).setInFragment('tr:last-child');
          createTable.createElement('td').setText(baseTime).setInFragment('tr:last-child');
        
          createTable.setInDocument('.container') 
      } 
    } else if (check.value == 'rss') {

      for(let i = 0; i < rssData.puzzles.length; i += 1){
        tasksData[rssData.puzzles[i].name] = {
          name: rssData.puzzles[i].name,
          solutions: rssData.rounds[i].solutions
        }
        const createTable = new Create();
        if(document.querySelector('.table') !== null){
          document.querySelector('.table').remove();
        }
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
              createTable.createElement('td').setText(currentValue.time.$numberLong).setInFragment('tr:last-child');
              createTable.createElement('div').setAttr({class: 'answer'}).setInFragment('tr:last-child>td:last-child')
              createTable.createElement('p').setText(currentValue.code).setInFragment('tr:last-child>td:last-child > .answer');
            }
            
          }
          createTable.createElement('td').setText(quantity).setInFragment('tr:last-child');
        }
          createTable.setInDocument('.container') 
      }
    }
    
    
  } 
  
}