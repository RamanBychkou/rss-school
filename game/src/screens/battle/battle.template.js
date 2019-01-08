export default `
<main>
  <section id="battle" class="container">
  <div class="row healthyContainer">
    <div class="col-sm-4 hpWrapper">
      <h2 id="playerName"></h2>
      <div class="hp" id="playerHp"><span></span></div>
    </div>
    <div class="col-sm-4">
      <button type="button" class="btn js-spell">Attack monster</button>
    </div>
    <div class="col-sm-4 hpWrapper">
      <h2 id="monsterName"></h2>
      <div class="hp" id="monsterHp"><span></span></div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-5">
      <div id="player" class="player">
      <canvas width="400px" height="400px"></canvas>
      </div>
    </div>
      <div class="col-sm-2 battlefield"></div>
      <div class="col-sm-5">
        <div id="monster">
          <canvas width="500px" height="400px"></canvas>
        </div>
      </div>
    </div>
  </div>
  </section>
</main>
<div class="preloader row"><img src="./src/screens/battle/img/monster/1/head.png"></div>
`;
