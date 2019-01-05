import $ from 'jquery';
import template from './listening.template';
import './listening.scss';
import tasks from './listening.tasks';

class Listening {
  async draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.insertAdjacentHTML('beforeend', template);
    console.log(this);
    this.taskLogic = this.createTaskLogic();
    const loadFile = await this.loadAudio();
    $('.taskWrapper').append(loadFile);
    $('#demoModal').modal({});
  }

  createTaskLogic() {
    const maxQuantityArgs = 9;
    const minQantityArgs = 0;
    const currentTask = tasks[this.randomInteger(minQantityArgs, maxQuantityArgs)];
    const taskInfo = {
      task: currentTask,
      result: currentTask,
    };
    return taskInfo;
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  checkResult() {
    const value = $('form > input').val().toLowerCase();
    if (value === this.taskLogic.result) {
      return true;
    }
    return false;
  }

  loadAudio() {
    const audio = new Audio();
    audio.src = `./src/components/tasks/listening/audio/${this.taskLogic.task}.mp3`;
    audio.preload = 'auto';
    audio.controls = true;
    return audio;
  }

  constructor() {
    this.taskLogic = null;
  }
}

export default Listening;
