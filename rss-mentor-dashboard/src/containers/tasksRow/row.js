/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

const data = require('../../data.json');

class TasksRow extends Component {
  render() {
    const { mentor } = this.props;
    if (data[mentor] === undefined) {
      return (<tbody><tr><td>Shoose mentor</td></tr></tbody>);
    }
    const { tasks, students } = data[mentor];

    const studentsLogin = Object.keys(students);
    const tasksRow = [];


    const studentTH = Object.keys(students);
    const studentsCell = studentTH.map(current => <th key={`student${students[current].githubLogin}`}>{students[current].githubLogin}</th>);

    tasks.forEach((current) => {
      const tempRow = [];
      let nameClass;
      switch (current.status) {
        case 'Checked':
          nameClass = 'checked';
          break;
        case 'Checking':
          nameClass = 'checking';
          break;
        case 'In Progress':
          nameClass = 'inProgress';
          break;
        default:
          nameClass = 'toDo';
          break;
      }
      studentsLogin.forEach((currentElem, index) => {
        if (students[currentElem][current.name] !== undefined) {
          tempRow.push((
            <td key={`mark${index}`} className={nameClass}>{students[currentElem][current.name].mark}</td>
          ));
        } else {
          tempRow.push((
            <td key={`mark${index}`} className={nameClass}>0</td>
          ));
        }
      });
      const element = (
        <tr key={current.name}>
          <td>{current.name}</td>
          {tempRow}
        </tr>
      );
      tasksRow.push(element);
    });


    return (
      <tbody id="table">
        <tr>
          <th>{mentor}</th>
          {studentsCell}
        </tr>
        {tasksRow}
      </tbody>

    );
  }
}
export default TasksRow;
