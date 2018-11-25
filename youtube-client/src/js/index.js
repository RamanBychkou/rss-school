const CreateFragment = require('./createFragment.js');
const getRequest = require('./getYoutubeData.js');


// import data from './getYoutubeData.js'

window.onload = () => {
  function getSearch(e) {
    e.preventDefault();
    const elementValue = document.querySelector('input').value;
    const getData = new getRequest(elementValue);
    getData.getRequest();


    // const data = getRequest(e);
  }
  const showSearchField = new CreateFragment();
  showSearchField.createElement('div').setAttr({ class: 'container' }).setInFragment(null);
  showSearchField.createElement('header').setAttr({ class: 'searchField' }).setInFragment('.container');
  showSearchField.createElement('main').setInFragment('.container');
  showSearchField.createElement('h1').setText('Youtube Searh App').setInFragment('.searchField');
  showSearchField.createElement('form').setInFragment('.searchField');
  showSearchField.createElement('input').setAttr({ type: 'text', placeholder: 'Search me' }).setInFragment('form');
  showSearchField.createElement('button').setAttr({ class: 'btn-search' }).setText('Search').setInFragment('form');
  showSearchField.setInDocument('body');

  document.querySelector('.btn-search').addEventListener('click', getSearch);
};
