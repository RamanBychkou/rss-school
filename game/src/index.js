import 'regenerator-runtime/runtime';
import 'bootstrap';
import $ from 'jquery';


import { GameState, setGameState } from './game';

import Header from './components/header/header';
import Nav from './components/navigation/nav';

import './index.scss';
import ModalDialog from './components/modal-dialog/modal-dialog';
import ChoosePlayerName from './screens/choosePlayerName/choosePlayerName';
import Battle from './screens/battle/battle';
import Cast from './screens/cast/cast';
import Score from './screens/score/score';
import { pause } from './utils';
import Task from './screens/task/task';

const setPlayerName = async (gameState) => {
  const playerName = await ChoosePlayerName.getNewPlayerName();
  gameState.setPlayerName(playerName);

  Nav.update(gameState);
};

const getBattleResult = async (gameState) => {
  await setPlayerName(gameState);
  // отрисовка битвы
  const game = new Battle();
  Battle.gameState = gameState;
  Battle.draw(gameState);
};

const startGame = () => {
  const gameState = new GameState();
  setGameState(gameState);
  getBattleResult(gameState);
  

  $('.js-choose-player-name-nav').on('click', async (e) => {
    e.preventDefault();

    await setPlayerName(gameState);
  });
};

const startApp = () => {
  window.$ = $; // for debug

  Nav.draw();
  Header.draw();
  ModalDialog.draw();
  Score.score = {};
  $('.js-start-game').on('click', async () => {
    startGame();
  });
  $('#score').on('click', (e) => {
    e.preventDefault();
    Score.draw();
  });
};

startApp();

export default { startApp, getBattleResult };
