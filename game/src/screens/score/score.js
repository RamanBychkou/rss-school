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

  static empty() {
    $('#winScreen').empty();
  }

  static showScore() {
    let stringContainer = '';
    for (const key in Score.score) {
      const element = `<li><span>${key}</span>${Score.score[key]}</li>`;
      stringContainer += element;
      ;
    }
    $('.score ul').append(stringContainer);
  }
}

export default Score;
