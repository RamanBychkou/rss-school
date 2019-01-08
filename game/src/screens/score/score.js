import $ from 'jquery';
import template from './score.template';
import './score.scss';

class Score {
  static draw() {
    $('main').remove();
    const contentEl = document.querySelector('body nav');
    contentEl.insertAdjacentHTML('afterend', template);
    Score.showScore();
  }

  static showScore() {
    let stringContainer = '';
    for (const key in Score.score) {
      const element = `<tr><td>${key}</td><td>${Score.score[key]}</td></tr>`;
      stringContainer += element;
    }
    $('.score').append(stringContainer);
  }
}

export default Score;
