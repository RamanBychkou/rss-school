import $ from 'jquery';

import MathTemplate from '../../components/tasks/Math/taskMath.template';
import MathTask from '../../components/tasks/Math/taskMath';
import Flags from '../../components/tasks/flags/flags';
import flagsTemplate from '../../components/tasks/flags/flags.template';
import Translate from '../../components/tasks/translate/translate';
import translateTemlate from '../../components/tasks/translate/translate.template';
import Collection from '../../components/tasks/collectionLetters/collection.';
import collectionTemplate from '../../components/tasks/collectionLetters/collection.template';

class Task {
  static getPlayerCast(taskName) {
    let template;
    let task;
    switch (taskName) {
      case 'calk':
        template = MathTemplate;
        task = new MathTask();
        break;
      case 'flags':
        template = flagsTemplate;
        task = new Flags();
        break;
      case 'translate':
        template = translateTemlate;
        task = new Translate();
        break;
      case 'collection':
        template = translateTemlate;
        task = new Collection();
        break;
      default:
        break;
    }
    task.draw(template);
    const current = task;
    $('.js-answer').on('click', (e) => {
      e.preventDefault();
      $('#demoModal').modal('hide');
      Task.taskResult = current.checkResult();
    });
  }

  static getResult(taskName) {
    taskName.draw();
  }

  constructor() {
    this.taskResult = null;
  }
}

export default Task;
