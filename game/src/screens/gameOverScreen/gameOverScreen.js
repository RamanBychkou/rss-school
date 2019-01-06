import $ from 'jquery';
import Score from '../score/score';

class GameOverScreen {
  static draw() {
    $('main').remove();
    Score.draw();
    GameOverScreen.empty();
  }

  static empty() {
    $('#winScreen').empty();
  }
}

export default GameOverScreen;
