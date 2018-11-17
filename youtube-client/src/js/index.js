const getData = require('./getYoutubeData.js');
let getRequest = getData.method;
// import data from './getYoutubeData.js';

window.onload = () => {
  function getSearch(e) {
    debugger
    e.preventDefault();
    let data = getRequest(e);
    console.log(data);
  }
  document.querySelector('.btn').addEventListener('click', getSearch);
};
