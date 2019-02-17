import React, { Component } from 'react';

const data = require('../../../data.json');

class TasksRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: data['Sergey Maksimuk'].tasks,
      mentor: data['Sergey Maksimuk'].name,
      students: data['Sergey Maksimuk'].students,
    };
  }

  render() {
    const tasks = this.state.tasks;
    const students = this.state.students;
    const studentsLogin = Object.keys(students);
    const tasksRow = [];
   

    const studentsCell = [];
    for (const key in this.state.students) {
      const student = (
        <th>{this.state.students[key].githubLogin}</th>
      );
      studentsCell.push(student);
    }

    tasks.forEach((current) => {
      const tempRow = [];
      studentsLogin.forEach((currentElem) => {
        if (students[currentElem][current.name] !== undefined) {
          tempRow.push((
            <td>{students[currentElem][current.name]}</td>
          ));
        } else {
          tempRow.push((
            <td>0</td>
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
          <th>{this.state.mentor}</th>
          {studentsCell}
        </tr>
        
      </tbody>

    );
  }
}

export default TasksRow;
