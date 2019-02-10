import React, { Component } from 'react';

const data = require('../../../data.json');

class TasksRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: data.taskInfo,
      mentor: 'Dzianis Sheka',
      students: data['Dzianis Sheka'].tasks.students,
      taskMarks: data['Dzianis Sheka'].tasks,
    };
  }

  render() {
    const tasks = this.state.tasks;
    const taskRow = tasks.map((current, index) => {
      let marks = [];
      debugger;
      console.log(current.name);
      for (const key in this.state.taskMarks[current.name]) {
        marks.push(this.state.taskMarks[current.name][key]);
      }
      marks = marks.map((current) => (
          <td>{current}</td>
        ));

      return (
        <tr>
        <td>
          {current.name}
        </td>
        {marks}
      </tr>

      )
; });

    const studentsCell = [];
    for (const key in this.state.students) {
      const student = (
        <th>{this.state.students[key]}</th>
      );
      studentsCell.push(student);
    }

    return (
      <tbody id="table">
        <tr>
          <th>{this.state.mentor}</th>
          {studentsCell}
        </tr>
        { taskRow }
      </tbody>

    );
  }
}

export default TasksRow;
