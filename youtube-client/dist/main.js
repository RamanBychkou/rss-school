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

eval("const CreateFragment = __webpack_require__(/*! ./createFragment.js */ \"./src/js/createFragment.js\");\nconst slider = __webpack_require__(/*! ./slider.js */ \"./src/js/slider.js\");\n\nmodule.exports = function changeWidth() {\n  const browserWidth = window.innerWidth;\n  let stepSlider;\n  // show first slide\n  document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = '0px';\n\n  function createTooltip(numberTooltip) {\n    if (document.querySelector('.toolTipWrapper') !== null) {\n      document.querySelector('.toolTipWrapper').remove();\n    }\n    const setToolTip = new CreateFragment();\n    setToolTip.createElement('div').setAttr({ class: 'toolTipWrapper' }).setInFragment(null);\n    setToolTip.createElement('ul').setInFragment('.toolTipWrapper');\n    for (let i = 0; i < numberTooltip; i += 1) {\n      setToolTip.createElement('li').setAttr({ class: `slide_${i + 1}` }).setInFragment('.toolTipWrapper > ul');\n      setToolTip.createElement('button').setText(`${i + 1}`).setAttr({ id: `${i + 1}` }).setInFragment(`.toolTipWrapper > ul li:nth-child(${i + 1})`);\n    }\n    setToolTip.setInDocument('.youtubeContainer');\n  }\n  // tracking device width\n  if (browserWidth > 1005) {\n    stepSlider = 1020;\n    createTooltip(5);\n    slider(stepSlider, 5);\n  } else if (browserWidth < 1005 && browserWidth > 680) {\n    stepSlider = 680;\n    createTooltip(8);\n    slider(stepSlider, 8);\n  } else if (browserWidth < 680) {\n    stepSlider = 340;\n    createTooltip(15);\n    slider(stepSlider, 15);\n  }\n};\n\n\n//# sourceURL=webpack:///./src/js/changeWidth.js?");

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

eval("const changeWidth = __webpack_require__(/*! ./changeWidth.js */ \"./src/js/changeWidth.js\");\nconst CreateFragment = __webpack_require__(/*! ./createFragment.js */ \"./src/js/createFragment.js\");\n\nmodule.exports = class Request {\n  constructor(elementValue) {\n    this.data = undefined;\n    this.searchUrl = 'https://www.googleapis.com/youtube/v3/search?';\n    this.videoUrl = 'https://www.googleapis.com/youtube/v3/videos?';\n    this.commonSearchParametrs = {\n      part: 'snippet',\n      maxResults: 15,\n      q: elementValue,\n      type: 'video',\n      key: 'AIzaSyCni5hHJmCRuygcOBUiHGOdldAbRIOPQB8',\n    };\n    this.videoSearchParametrs = {\n      key: 'AIzaSyCni5hHJmCRuygcOBUiHGOdldAbRIOPQB8',\n      id: '',\n      part: 'snippet, statistics',\n    };\n    this.clips = 0;\n  }\n\n  static createUrl(url, defaultParams) {\n    let urlParametr = new URLSearchParams();\n    const temp = Object.entries(defaultParams);\n    for (let i = 0; i < temp.length; i += 1) {\n      urlParametr.append(temp[i][0], temp[i][1]);\n    }\n    urlParametr = urlParametr.toString();\n    return url + urlParametr;\n  }\n\n  // common data processing\n  dataProcessing(dataV) {\n    const result = {};\n    const idArray = [];\n    this.commonSearchParametrs.pageToken = dataV.nextPageToken;\n    for (let i = 0; i < dataV.items.length; i += 1) {\n      result[dataV.items[i].id.videoId] = {\n        title: dataV.items[i].snippet.title,\n        date: dataV.items[i].snippet.publishedAt,\n        id: dataV.items[i].id.videoId,\n        description: dataV.items[i].snippet.description,\n        pictureSmall: dataV.items[i].snippet.thumbnails.default.url,\n        picture: dataV.items[i].snippet.thumbnails.medium.url,\n        author: dataV.items[i].snippet.channelTitle,\n      };\n      idArray.push(dataV.items[i].id.videoId);\n    }\n    this.data = result;\n    return idArray;\n  }\n\n  // get view count\n  viewCountData(dataV) {\n    for (let i = 0; i < dataV.items.length; i += 1) {\n      const temp = dataV.items[i].id;\n      this.data[temp].viewcounts = dataV.items[i].statistics.viewCount;\n    }\n    return this.show();\n  }\n\n  // common request\n  getRequest() {\n    fetch(Request.createUrl(this.searchUrl, this.commonSearchParametrs))\n      .then(async (response) => {\n        const data = await response.json();\n        const id = this.dataProcessing(data);\n        this.videoSearchParametrs.id = '';\n        for (let i = 0; i < 15; i += 1) {\n          if (i !== 15) {\n            this.videoSearchParametrs.id = `${this.videoSearchParametrs.id + id[i]},`;\n          } else {\n            this.videoSearchParametrs.id = this.videoSearchParametrs.id + id[i];\n          }\n        }\n      })\n      .then(response => Promise.resolve(response)).then(() => this.videoRequest())\n      .catch(error => error);\n  }\n\n  // video request\n  videoRequest() {\n    fetch(Request.createUrl(this.videoUrl, this.videoSearchParametrs))\n      .then(\n        async (response) => {\n          const temp = await response.json();\n          return temp;\n        },\n      )\n      .then(response => Promise.resolve(response))\n      .then(secondData => this.viewCountData(secondData))\n      .catch(error => error);\n  }\n\n  // show results on the page\n  show() {\n    const showVideo = new CreateFragment();\n    if (document.querySelector('.youtubeContainer') !== null) {\n      document.querySelector('.youtubeContainer').remove();\n    }\n    showVideo.createElement('section').setAttr({ class: 'youtubeContainer' }).setInFragment(null);\n    showVideo.createElement('div').setAttr({ class: 'youtubeSlider' }).setInFragment('.youtubeContainer');\n    showVideo.createElement('div').setAttr({ class: 'control' }).setInFragment('.youtubeContainer');\n    showVideo.createElement('button').setAttr({ class: 'newVideo' }).setText('New Video').setInFragment('.control');\n    showVideo.setInDocument('main');\n    const tempData = Object.entries(this.data);\n    // create article\n    for (let i = 0; i < tempData.length; i += 1) {\n      const tempVideo = new CreateFragment();\n      tempVideo.createElement('article').setAttr({ class: 'videoSlide' }).setInFragment(null);\n      tempVideo.createElement('figure').setAttr({ class: 'videoImg' }).setInFragment('.videoSlide');\n      tempVideo.createElement('img').setAttr({ src: tempData[i][1].picture, alt: tempData[i][1].title }).setInFragment('.videoImg');\n      tempVideo.createElement('figcaption').setAttr({ class: 'videoInfo' }).setInFragment('.videoSlide');\n      tempVideo.createElement('ul').setInFragment('.videoInfo');\n      tempVideo.createElement('li').setInFragment('ul');\n      tempVideo.createElement('a').setAttr({ href: `https://www.youtube.com/watch?v=${tempData[i][1].id}` }).setText(`Title: ${tempData[i][1].title}`).setInFragment('ul > li');\n      tempVideo.createElement('li').setText(`Date: ${tempData[i][1].date}`).setInFragment('ul');\n      tempVideo.createElement('li').setText(`Author: ${tempData[i][1].author}`).setInFragment('ul');\n      tempVideo.createElement('li').setText(`description: ${tempData[i][1].description}`).setInFragment('ul');\n      tempVideo.createElement('li').setText(`View Count: ${tempData[i][1].viewcounts}`).setInFragment('ul');\n      tempVideo.setInDocument('.youtubeSlider');\n    }\n    // start tracking device width\n    changeWidth();\n    window.addEventListener('resize', changeWidth);\n    document.querySelector('.newVideo').addEventListener('click', this.getRequest.bind(this));\n  }\n};\n\n\n//# sourceURL=webpack:///./src/js/getYoutubeData.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const CreateFragment = __webpack_require__(/*! ./createFragment.js */ \"./src/js/createFragment.js\");\nconst GetRequest = __webpack_require__(/*! ./getYoutubeData.js */ \"./src/js/getYoutubeData.js\");\n\nwindow.onload = () => {\n  function getSearch(e) {\n    e.preventDefault();\n    const elementValue = document.querySelector('input').value;\n    const getData = new GetRequest(elementValue);\n    getData.getRequest();\n  }\n  // create search form\n  const showSearchField = new CreateFragment();\n  showSearchField.createElement('div').setAttr({ class: 'container' }).setInFragment(null);\n  showSearchField.createElement('header').setAttr({ class: 'searchField' }).setInFragment('.container');\n  showSearchField.createElement('main').setInFragment('.container');\n  showSearchField.createElement('h1').setText('Youtube Searh App').setInFragment('.searchField');\n  showSearchField.createElement('form').setInFragment('.searchField');\n  showSearchField.createElement('input').setAttr({ type: 'text', placeholder: 'Search me' }).setInFragment('form');\n  showSearchField.createElement('button').setAttr({ class: 'btn-search' }).setText('Search').setInFragment('form');\n  showSearchField.setInDocument('body');\n\n  document.querySelector('.btn-search').addEventListener('click', getSearch);\n};\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function slider(step, numbersSlide) {\n  let currentSlide = 1;\n  const stepCurrentSlide = numbersSlide / numbersSlide;\n  let margin = 0;\n  const coordinate = {};\n  function nextSlide() {\n    document.querySelector('.active').removeAttribute('class');\n    if (currentSlide === numbersSlide) {\n      currentSlide = 1;\n      margin = 0;\n      document.querySelector('.slide_1 > button').setAttribute('class', 'active');\n      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = '0px';\n    } else {\n      margin += step;\n      currentSlide += stepCurrentSlide;\n      document.querySelector(`.toolTipWrapper ul li:nth-child(${currentSlide}) button`).setAttribute('class', 'active');\n      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;\n    }\n  }\n\n  function prevSlide() {\n    document.querySelector('.active').removeAttribute('class');\n    if (currentSlide === 1) {\n      currentSlide = numbersSlide;\n      margin = step * (numbersSlide - 1);\n      document.querySelector('.toolTipWrapper ul li:last-child > button').setAttribute('class', 'active');\n      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;\n    } else {\n      margin -= step;\n      currentSlide -= stepCurrentSlide;\n      document.querySelector(`.toolTipWrapper ul li:nth-child(${currentSlide}) button`).setAttribute('class', 'active');\n      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;\n    }\n  }\n  function handle(event) {\n    switch (event.type) {\n      case 'mousedown':\n        coordinate.startX = event.clientX;\n        coordinate.startY = event.clientY;\n        break;\n      case 'mouseup':\n        coordinate.endX = event.clientX;\n        coordinate.endY = event.clientY;\n        if (coordinate.startX > coordinate.endX) {\n          nextSlide(numbersSlide);\n        } else {\n          prevSlide(numbersSlide);\n        }\n        break;\n      case 'touchstart':\n        coordinate.startX = event.changedTouches[0].screenX;\n        coordinate.startY = event.changedTouches[0].screenY;\n        break;\n      case 'touchend':\n        coordinate.endX = event.changedTouches[0].screenX;\n        coordinate.endY = event.changedTouches[0].screenY;\n        if (coordinate.startX > coordinate.endX) {\n          nextSlide(numbersSlide);\n        } else {\n          prevSlide(numbersSlide);\n        }\n        break;\n      default: break;\n    }\n  }\n\n  function showPage(event) {\n    if (document.querySelector('.colorBtnText') !== null) {\n      document.querySelector('.colorBtnText').removeAttribute('class');\n    }\n    if (document.querySelector('.active') !== null) {\n      document.querySelector('.active').removeAttribute('class');\n    }\n    const e = event.target;\n    e.setAttribute('class', 'colorBtnText active');\n    const id = +e.id;\n    margin = step * (id - 1);\n    document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;\n    currentSlide = id;\n  }\n  document.querySelector('.slide_1 > button').setAttribute('class', 'active');\n  document.querySelector('.toolTipWrapper').addEventListener('mousedown', showPage);\n  document.querySelector('.youtubeSlider').addEventListener('mousedown', handle);\n  document.querySelector('.youtubeSlider').addEventListener('mouseup', handle);\n  document.querySelector('.youtubeSlider').addEventListener('touchstart', handle);\n  document.querySelector('.youtubeSlider').addEventListener('touchend', handle);\n};\n\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ })

/******/ });