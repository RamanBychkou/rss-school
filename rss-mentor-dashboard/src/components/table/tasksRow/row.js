import React, { Component } from 'react';

const data = require('../../../data.json');

class TasksRow extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: data.taskInfo };
  }

  render() {
    return (
      <tr>
        <td>
          {this.state.tasks[7].name}
        </td>
      </tr>
    );
  }
}

export default TasksRow;
