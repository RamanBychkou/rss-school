import 'regenerator-runtime/runtime';
import 'bootstrap';
import $ from 'jquery';

import { GameState, setGameState } from './game';

import Header from './components/header/header';
import Nav from './components/navigation/nav';

import './index.css';
import ModalDialog from './components/modal-dialog/modal-dialog';
import ChoosePlayerName from './screens/choosePlayerName/choosePlayerName';
import Battle from './screens/battle/battle';
import Cast from './screens/cast/cast';

import { pause } from './utils';
import Task from './screens/task/task';

const setPlayerName = async (gameState) => {
  const playerName = await ChoosePlayerName.getNewPlayerName();

  console.log('playerName', playerName); // eslint-disable-line no-console
  gameState.setPlayerName(playerName);

  Nav.update(gameState);
};

const getBattleResult = async (gameState) => {
  await setPlayerName(gameState);
  const Game = new Battle();
  Battle.draw(gameState);
  $('.js-attack').on('click', () => {
    const chosenCast = Cast.getPlayerCast();
    $('.taskWrapper').on('click', async (e) => {
      $('#demoModal').modal('hide');
      await pause(1000);
      const taskName = e.target.id;
      const taskResult = await Task.getPlayerCast(taskName);
      Game.attack(taskResult);
    });
  });


  // start animation
  // await pause(3000);

  // const chosenCast = await Cast.getPlayerCast();

  // for debug - WIP
  // TODO: need to remove
  // alert('round finished!', chosenCast); // eslint-disable-line no-alert
};


const startApp = () => {
  window.$ = $; // for debug

  const gameState = new GameState();
  window.gameState = gameState; // antipatter - need use carefully!
  setGameState(gameState);

  Nav.draw();
  Header.draw();
  ModalDialog.draw();


  $('.js-start-game').on('click', async () => {
    await getBattleResult(gameState);
  });

  $('.js-choose-player-name-nav').on('click', async (e) => {
    e.preventDefault();

    await setPlayerName(gameState);
  });
};

startApp();
