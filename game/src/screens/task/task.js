import $ from 'jquery';

import MathTemplate from '../../components/tasks/Math/taskMath.template';
import mathTask from '../../components/tasks/Math/taskMath';

class Task {
  static getPlayerCast(taskName) {
    let template;
    let task;
    switch (taskName) {
      case 'calk':
        template = MathTemplate;
        task = mathTask;
        break;
      default:
        break;
    }
    return task.draw(template, task);
  }

  static getResult(taskName) {
    taskName.draw();
  }

  constructor() {
    this.taskResult = false;
  }
}

export default Task;
