import React, { Component } from 'react';

const data = require('../../../data.json');

class TasksRow extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: data.taskInfo,
      mentor: 'Aliaksandr Zayats',
     };
  }

  render() {
    const tasks = this.state.tasks;
    const taskRow = tasks.map((current, index) => (
      <tr>
        <td>
        {current.name}
        </td>
      </tr>
      
    ));

    const firstRow = (data) => {
      const menorData = data[this.state[mentor]];
    }

    return (
      <tbody id="table">
        
        { taskRow }
      </tbody>
        
    );
  }
}

export default TasksRow;
