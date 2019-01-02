export default `
<section id="battle" class="container">
<div class="row healthyContainer">
  <div class="col-sm-4 hpWrapper">
    <h2>Player: <span id="playerName">MyName</span>
    <div class="hp" id="playerHp"><span></span></div>
  </div>
  <div class="col-sm-4">
    <button type="button" class="btn js-attack">Attack monster</button>
  </div>
  <div class="col-sm-4 hpWrapper">
    <h2>Monster: <span>MyName</span>
    <div class="hp" id="monsterHp"><span></span></div>
  </div>
</div>
<div class="row">
  <div class="col-sm-4">
    <div id="player">
    <canvas width="400px" height="400px"></canvas>
    </div>
  </div>
    <div class="col-sm-4"></div>
    <div class="col-sm-4">
      <div id="monster">
        <canvas width="400px" height="400px"></canvas>
      </div>
    </div>
  </div>
</div>
</section>
`;
