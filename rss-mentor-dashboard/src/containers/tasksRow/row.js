import React, { Component } from 'react';

const data = require('../../data.json');

// eslint-disable-next-line react/prefer-stateless-function
class TasksRow extends Component {
  componentWillUnmount() {
    alert(this.props.mentor);
  }
  render() {

    const tasks = data[this.props.mentor].tasks;
    const students = data[this.props.mentor].students;
    const studentsLogin = Object.keys(students);
    const tasksRow = [];

    if (tasks === undefined) {
      return (<div><p>Shoose mentor</p></div>);
    }
    const studentsCell = [];
    for (const key in students) {
      const student = (
      <th>{students[key].githubLogin}</th>
      );
      studentsCell.push(student);
    }

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
      studentsLogin.forEach((currentElem) => {
        if (students[currentElem][current.name] !== undefined) {
          tempRow.push((
          <td className={nameClass}>{students[currentElem][current.name].mark}</td>
          ));
        } else {
          tempRow.push((
          <td className={nameClass}>0</td>
          ));
        }
      });
      const element = (
      <tr>
        <td>{current.name}</td>
        {tempRow}
      </tr>
      );
      tasksRow.push(element);
    });


    return (
      <tbody id="table">
        <tr>
          <th>{this.props.mentor}</th>
          {studentsCell}
        </tr>
        {tasksRow}
      </tbody>

    );
  }
}
export default TasksRow;
