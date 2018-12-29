export default `
<nav class="navbar navbar-expand-md ixed-top">
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Landing</a>
        </li>
        <li class="nav-item js-call-modal">
        <button type="button" class="btn btn-primary js-start-game">
        Start game
        </button>
         </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Score</a>
        </li>
      </ul>
      <button type="button" class="btn btn-primary js-show-player-name js-choose-player-name-nav">
      Need to choose Player Name
      </button>
    </div>
  </nav>
`;
