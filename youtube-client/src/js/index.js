const CreateFragment = require('./createFragment.js');
const getRequest = require('./getYoutubeData.js');
const changeWidth = require('./changeWidth.js')

// import data from './getYoutubeData.js'

window.onload = () => {
  changeWidth()
  window.addEventListener('resize', changeWidth);
  function getSearch(e) {
    e.preventDefault();
    const data = getRequest(e);
    console.log(data);
  }
  let showSearchField = new CreateFragment();
  showSearchField.createElement('div').setAttr({class : 'container'}).setInFragment(null);
  showSearchField.createElement('div').setAttr({class : 'searchField'}).setInFragment('.container');
  showSearchField.createElement('h1').setText('Youtube Searh App').setInFragment('.searchField');
  showSearchField.createElement('form').setInFragment('.searchField');
  showSearchField.createElement('input').setAttr({type: 'text', placeholder : 'Search me'} ).setInFragment('form');
  showSearchField.createElement('button').setAttr({class : 'btn-search'}).setText('Search').setInFragment('form');
  showSearchField.setInDocument('body')

  document.querySelector('.btn-search').addEventListener('click', getSearch);
};
