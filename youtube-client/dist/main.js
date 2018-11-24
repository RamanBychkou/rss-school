/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/changeWidth.js":
/*!*******************************!*\
  !*** ./src/js/changeWidth.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const CreateFragment = __webpack_require__(/*! ./createFragment.js */ \"./src/js/createFragment.js\");\nconst slider = __webpack_require__(/*! ./slider.js */ \"./src/js/slider.js\");\n\nmodule.exports = function changeWidth() {\n  const browserWidth = window.innerWidth;\n  let stepSlider;\n  document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = '0px';\n  if (browserWidth > 1005) {\n    stepSlider = 1020;\n    createTooltip(2);\n    slider(stepSlider, 2);\n  } else if (browserWidth < 1005 && browserWidth > 680) {\n    stepSlider = 680;\n    createTooltip(3);\n    slider(stepSlider, 3);\n  } else if (browserWidth < 680) {\n    stepSlider = 340;\n    createTooltip(6);\n    slider(stepSlider, 6);\n  }\n\n  function createTooltip(numberTooltip) {\n    if (document.querySelector('.toolTipWrapper') !== null) {\n      document.querySelector('.toolTipWrapper ul').remove();\n    }\n    const setToolTip = new CreateFragment();\n    setToolTip.createElement('div').setAttr({ class: 'toolTipWrapper' }).setInFragment(null);\n    setToolTip.createElement('ul').setInFragment('.toolTipWrapper');\n    for (let i = 0; i < numberTooltip; i += 1) {\n      setToolTip.createElement('li').setAttr({ class: `slide_${i + 1}` }).setInFragment('.toolTipWrapper > ul');\n      setToolTip.createElement('input').setAttr({ type: 'button' }).setInFragment(`.toolTipWrapper > ul li:nth-child(${i + 1})`);\n    }\n    setToolTip.setInDocument('.youtubeContainer');\n  }\n};\n\n\n//# sourceURL=webpack:///./src/js/changeWidth.js?");

/***/ }),

/***/ "./src/js/createFragment.js":
/*!**********************************!*\
  !*** ./src/js/createFragment.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = class CreateFragment {\n  constructor() {\n    this.fragment = document.createDocumentFragment();\n    this.tempElement = undefined;\n  }\n\n  createElement(nameTag) {\n    this.tempElement = document.createElement(`${nameTag}`);\n    return this;\n  }\n\n  setAttr(attr) {\n    for (const key in attr) {\n      this.tempElement.setAttribute(key, attr[key]);\n    }\n    return this;\n  }\n\n  setText(text) {\n    this.tempElement.innerHTML = text;\n    return this;\n  }\n\n  setInFragment(whereInsert) {\n    if (whereInsert !== null) {\n      this.fragment.querySelector(whereInsert).appendChild(this.tempElement);\n    } else {\n      this.fragment.appendChild(this.tempElement);\n    }\n    return this;\n  }\n\n  setInDocument(whereInsert) {\n    document.querySelector(whereInsert).appendChild(this.fragment);\n  }\n};\n\n\n//# sourceURL=webpack:///./src/js/createFragment.js?");

/***/ }),

/***/ "./src/js/getYoutubeData.js":
/*!**********************************!*\
  !*** ./src/js/getYoutubeData.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const changeWidth = __webpack_require__(/*! ./changeWidth.js */ \"./src/js/changeWidth.js\");\nconst CreateFragment = __webpack_require__(/*! ./createFragment.js */ \"./src/js/createFragment.js\");\n\nmodule.exports = class Request {\n  constructor(elementValue) {\n    this.data = undefined;\n    this.searchUrl = 'https://www.googleapis.com/youtube/v3/search?';\n    this.videoUrl = 'https://www.googleapis.com/youtube/v3/videos?';\n    this.commonSearchParametrs = {\n      part: 'snippet',\n      maxResults: 6,\n      q: elementValue,\n      type: 'video',\n      key: 'AIzaSyCni5hHJmCRuygcOBUiHGOdldAbRIOPQB8',\n    };\n    this.videoSearchParametrs = {\n      key: 'AIzaSyCni5hHJmCRuygcOBUiHGOdldAbRIOPQB8',\n      id: '',\n      part: 'snippet, statistics',\n    };\n  }\n\n  createUrl(url, defaultParams) {\n    let urlParametr = new URLSearchParams();\n    for (const key in defaultParams) {\n      urlParametr.append(key, defaultParams[key]);\n    }\n    urlParametr = urlParametr.toString();\n    console.log(url + urlParametr);\n    return url + urlParametr;\n  }\n\n  dataProcessing(dataV) {\n    const result = {};\n    const idArray = [];\n    this.commonSearchParametrs.pageToken = dataV.nextPageToken;\n    for (let i = 0; i < dataV.items.length; i += 1) {\n      result[dataV.items[i].id.videoId] = {\n        title: dataV.items[i].snippet.title,\n        date: dataV.items[i].snippet.publishedAt,\n        id: dataV.items[i].id.videoId,\n        description: dataV.items[i].snippet.description,\n        pictureSmall: dataV.items[i].snippet.thumbnails.default.url,\n        picture: dataV.items[i].snippet.thumbnails.medium.url,\n        author: dataV.items[i].snippet.channelTitle,\n      };\n      idArray.push(dataV.items[i].id.videoId);\n    }\n    this.data = result;\n    return idArray;\n  }\n\n  viewCountData(dataV) {\n    for (let i = 0; i < dataV.items.length; i += 1) {\n      const temp = dataV.items[i].id;\n      this.data[temp].viewcounts = dataV.items[i].statistics.viewCount;\n    }\n    return this.show();\n  }\n\n\n  getRequest() {\n    fetch(this.createUrl(this.searchUrl, this.commonSearchParametrs))\n      .then(async (response) => {\n        const data = await response.json();\n        const id = this.dataProcessing(data);\n        this.videoSearchParametrs.id = '';\n        for (let i = 0; i < 6; i += 1) {\n          if (i !== 5) {\n            this.videoSearchParametrs.id = `${this.videoSearchParametrs.id + id[i]},`;\n          } else {\n            this.videoSearchParametrs.id = this.videoSearchParametrs.id + id[i];\n          }\n        }\n      })\n      .then(response => Promise.resolve(response)).then(() => this.videoRequest());\n  }\n\n  videoRequest() {\n    fetch(this.createUrl(this.videoUrl, this.videoSearchParametrs))\n      .then(async (response) => await response.json())\n      .then(response => Promise.resolve(response))\n      .then(secondData => this.viewCountData(secondData));\n  }\n\n  getData() { return this.data; }\n\n  show(data) {\n    if (document.querySelector('.youtubeContainer') !== null) {\n      document.querySelector('.youtubeContainer').remove();\n    }\n    const showVideo = new CreateFragment();\n    showVideo.createElement('div').setAttr({ class: 'youtubeContainer' }).setInFragment(null);\n    showVideo.createElement('div').setAttr({ class: 'youtubeSlider' }).setInFragment('.youtubeContainer');\n    showVideo.createElement('button').setText('next').setAttr({ class: 'btnSliderNext' }).setInFragment('.youtubeContainer');\n    showVideo.createElement('button').setAttr({ class: 'newVideo' }).setText('New Video').setInFragment('.youtubeContainer');\n    showVideo.setInDocument('.container');\n    for (const key in this.data) {\n      const tempVideo = new CreateFragment();\n      tempVideo.createElement('div').setAttr({ class: 'videoSlide' }).setInFragment(null);\n      tempVideo.createElement('div').setAttr({ class: 'videoImg' }).setInFragment('.videoSlide');\n      tempVideo.createElement('img').setAttr({ src: this.data[key].picture, alt: this.data[key].title }).setInFragment('.videoImg');\n      tempVideo.createElement('div').setAttr({ class: 'videoInfo' }).setInFragment('.videoSlide');\n      tempVideo.createElement('ul').setInFragment('.videoInfo');\n      tempVideo.createElement('li').setInFragment('ul');\n      tempVideo.createElement('a').setAttr({ href: `https://www.youtube.com/watch?v=${this.data[key].id}` }).setText(`Title: ${this.data[key].title}`).setInFragment('ul > li');\n      tempVideo.createElement('li').setText(`Date: ${this.data[key].date}`).setInFragment('ul');\n      tempVideo.createElement('li').setText(`Author: ${this.data[key].author}`).setInFragment('ul');\n      tempVideo.createElement('li').setText(`description: ${this.data[key].description}`).setInFragment('ul');\n      tempVideo.createElement('li').setText(`View Count: ${this.data[key].viewcounts}`).setInFragment('ul');\n      tempVideo.setInDocument('.youtubeSlider');\n    }\n    changeWidth();\n    window.addEventListener('resize', changeWidth);\n    document.querySelector('.newVideo').addEventListener('click', this.getRequest.bind(this));\n  }\n};\n\n\n/*\nmodule.exports = function getRequest(e) {\n  const elementValue = document.querySelector('input').value;\n  let params = new URLSearchParams();\n  const defaultParams = {\n    part: 'snippet',\n    maxResults: 6,\n    q: elementValue,\n    type: 'video',\n    key: 'AIzaSyCni5hHJmCRuygcOBUiHGOdldAbRIOPQB8',\n  };\n  for (const key in defaultParams) {\n    params.append(key, defaultParams[key]);\n  }\n  params = params.toString();\n  const init = {\n    method: 'GET',\n    credentials: 'include',\n\n  };\n\n  const url = `https://www.googleapis.com/youtube/v3/search?${params}`;\n  const info = fetch(url, init).then(async (response) => {\n    const data = await response.json();\n    console.log(data);\n    function checkData(dataV) {\n      const result = {};\n      for (let i = 0; i < dataV.items.length; i += 1) {\n        result[dataV.items[i].id.videoId] = {\n          title: dataV.items[i].snippet.title,\n          date: dataV.items[i].snippet.publishedAt,\n          id: dataV.items[i].id.videoId,\n          description: dataV.items[i].snippet.description,\n          pictureSmall: dataV.items[i].snippet.thumbnails.default.url,\n          picture: dataV.items[i].snippet.thumbnails.medium.url,\n          author: dataV.items[i].snippet.channelTitle,\n        };\n      }\n      return result;\n    }\n    const clearData = checkData(data);\n    console.log(clearData);\n\n    function show(data) {\n      if(document.querySelector('.youtubeContainer') !== null) {\n        document.querySelector('.youtubeContainer').remove();\n      }\n      const showVideo = new CreateFragment();\n      showVideo.createElement('div').setAttr({ class: 'youtubeContainer' }).setInFragment(null);\n      showVideo.createElement('div').setAttr({ class: 'youtubeSlider' }).setInFragment('.youtubeContainer');\n      showVideo.createElement('button').setText('next').setAttr({ class: 'btnSliderNext' }).setInFragment('.youtubeContainer');\n      showVideo.setInDocument('.container');\n      for (const key in data) {\n        const tempVideo = new CreateFragment();\n        tempVideo.createElement('div').setAttr({ class: 'videoSlide' }).setInFragment(null);\n        tempVideo.createElement('div').setAttr({ class: 'videoImg' }).setInFragment('.videoSlide');\n        tempVideo.createElement('img').setAttr({ src: data[key].picture, alt: data[key].title }).setInFragment('.videoImg');\n        tempVideo.createElement('div').setAttr({ class: 'videoInfo' }).setInFragment('.videoSlide');\n        tempVideo.createElement('ul').setInFragment('.videoInfo');\n        tempVideo.createElement('li').setInFragment('ul');\n        tempVideo.createElement('a').setAttr({ href: `https://www.youtube.com/watch?v=${data[key].id}` }).setText(`Title: ${data[key].title}`).setInFragment('ul > li');\n        tempVideo.createElement('li').setText(`Date: ${data[key].date}`).setInFragment('ul');\n        tempVideo.createElement('li').setText(`Author: ${data[key].author}`).setInFragment('ul');\n        tempVideo.createElement('li').setText(`description: ${data[key].description}`).setInFragment('ul');\n        tempVideo.setInDocument('.youtubeSlider');\n      }\n    }\n    show(clearData);\n    changeWidth();\n    window.addEventListener('resize', changeWidth);\n  }).catch((error) => {\n    console.log(error);\n  });\n  return info;\n}; */\n\n\n//# sourceURL=webpack:///./src/js/getYoutubeData.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const CreateFragment = __webpack_require__(/*! ./createFragment.js */ \"./src/js/createFragment.js\");\nconst getRequest = __webpack_require__(/*! ./getYoutubeData.js */ \"./src/js/getYoutubeData.js\");\n\n\n// import data from './getYoutubeData.js'\n\nwindow.onload = () => {\n  function getSearch(e) {\n    e.preventDefault();\n    const elementValue = document.querySelector('input').value;\n    const getData = new getRequest(elementValue);\n    getData.getRequest();\n\n\n    // const data = getRequest(e);\n  }\n  const showSearchField = new CreateFragment();\n  showSearchField.createElement('div').setAttr({ class: 'container' }).setInFragment(null);\n  showSearchField.createElement('div').setAttr({ class: 'searchField' }).setInFragment('.container');\n  showSearchField.createElement('h1').setText('Youtube Searh App').setInFragment('.searchField');\n  showSearchField.createElement('form').setInFragment('.searchField');\n  showSearchField.createElement('input').setAttr({ type: 'text', placeholder: 'Search me' }).setInFragment('form');\n  showSearchField.createElement('button').setAttr({ class: 'btn-search' }).setText('Search').setInFragment('form');\n  showSearchField.setInDocument('body');\n\n  document.querySelector('.btn-search').addEventListener('click', getSearch);\n};\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function slider(step, numbersSlide) {\n  let currentSlide = 1;\n  const stepCurrentSlide = numbersSlide / numbersSlide;\n  let margin = 0;\n  const coordinate = {};\n  function nextSlide(numbersSlide) {\n    document.querySelector('.active').removeAttribute('class');\n    if (currentSlide === numbersSlide) {\n      currentSlide = 1;\n      margin = 0;\n      document.querySelector('.slide_1 > input').setAttribute('class', 'active');\n      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = '0px';\n    } else {\n      margin += step;\n      currentSlide += stepCurrentSlide;\n      document.querySelector(`.toolTipWrapper ul li:nth-child(${currentSlide}) input`).setAttribute('class', 'active');\n      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;\n    }\n  }\n  function prevSlide(numbersSlide) {\n    document.querySelector('.active').removeAttribute('class');\n    if (currentSlide === 1) {\n      currentSlide = numbersSlide;\n      margin = step * (numbersSlide - 1);\n      document.querySelector('.toolTipWrapper ul li:last-child > input').setAttribute('class', 'active');\n      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;\n    } else {\n      margin -= step;\n      currentSlide -= stepCurrentSlide;\n      document.querySelector(`.toolTipWrapper ul li:nth-child(${currentSlide}) input`).setAttribute('class', 'active');\n      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;\n    }\n  }\n  function handle() {\n    switch (event.type) {\n      case 'mousedown':\n        coordinate.startX = event.clientX;\n        coordinate.startY = event.clientY;\n        break;\n      case 'mouseup':\n        coordinate.endX = event.clientX;\n        coordinate.endY = event.clientY;\n        console.log(coordinate);\n        if (coordinate.startX > coordinate.endX) {\n          nextSlide(numbersSlide);\n        } else {\n          prevSlide(numbersSlide);\n        }\n        break;\n      case 'touchstart':\n        coordinate.startX = event.changedTouches[0].screenX;\n        coordinate.startY = event.changedTouches[0].screenY;\n        break;\n      case 'touchend':\n        coordinate.endX = event.changedTouches[0].screenX;\n        coordinate.endY = event.changedTouches[0].screenY;\n        console.log(coordinate);\n        if (coordinate.startX > coordinate.endX) {\n          nextSlide(numbersSlide);\n        } else {\n          prevSlide(numbersSlide);\n        }\n        break;\n      default: break;\n    }\n  }\n\n  document.querySelector('.slide_1 > input').setAttribute('class', 'active');\n  document.querySelector('.btnSliderNext').addEventListener('click', nextSlide.bind(this, numbersSlide, step, stepCurrentSlide, margin));\n  document.querySelector('.youtubeSlider').addEventListener('mousedown', handle.bind(this, numbersSlide, step, stepCurrentSlide, margin));\n  document.querySelector('.youtubeSlider').addEventListener('mouseup', handle.bind(this, numbersSlide, step, stepCurrentSlide, margin));\n};\n\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ })

/******/ });