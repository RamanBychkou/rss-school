const changeWidth = require('./changeWidth.js');
const CreateFragment = require('./createFragment.js');

module.exports = class Request {
  constructor(elementValue) {
    this.data = undefined;
    this.searchUrl = 'https://www.googleapis.com/youtube/v3/search?';
    this.videoUrl = 'https://www.googleapis.com/youtube/v3/videos?';
    this.commonSearchParametrs = {
      part: 'snippet',
      maxResults: 6,
      q: elementValue,
      type: 'video',
      key: 'AIzaSyCni5hHJmCRuygcOBUiHGOdldAbRIOPQB8',
    };
    this.videoSearchParametrs = {
      key: 'AIzaSyCni5hHJmCRuygcOBUiHGOdldAbRIOPQB8',
      id: '',
      part: 'snippet, statistics',
    };
  }

  static createUrl(url, defaultParams) {
    let urlParametr = new URLSearchParams();
    const temp = Object.entries(defaultParams);
    for (let i = 0; i < temp.length; i += 1) {
      urlParametr.append(temp[i][0], temp[i][1]);
    }
    urlParametr = urlParametr.toString();
    return url + urlParametr;
  }

  dataProcessing(dataV) {
    const result = {};
    const idArray = [];
    this.commonSearchParametrs.pageToken = dataV.nextPageToken;
    for (let i = 0; i < dataV.items.length; i += 1) {
      result[dataV.items[i].id.videoId] = {
        title: dataV.items[i].snippet.title,
        date: dataV.items[i].snippet.publishedAt,
        id: dataV.items[i].id.videoId,
        description: dataV.items[i].snippet.description,
        pictureSmall: dataV.items[i].snippet.thumbnails.default.url,
        picture: dataV.items[i].snippet.thumbnails.medium.url,
        author: dataV.items[i].snippet.channelTitle,
      };
      idArray.push(dataV.items[i].id.videoId);
    }
    this.data = result;
    return idArray;
  }

  viewCountData(dataV) {
    for (let i = 0; i < dataV.items.length; i += 1) {
      const temp = dataV.items[i].id;
      this.data[temp].viewcounts = dataV.items[i].statistics.viewCount;
    }
    return this.show();
  }


  getRequest() {
    fetch(Request.createUrl(this.searchUrl, this.commonSearchParametrs))
      .then(async (response) => {
        const data = await response.json();
        const id = this.dataProcessing(data);
        this.videoSearchParametrs.id = '';
        for (let i = 0; i < 6; i += 1) {
          if (i !== 5) {
            this.videoSearchParametrs.id = `${this.videoSearchParametrs.id + id[i]},`;
          } else {
            this.videoSearchParametrs.id = this.videoSearchParametrs.id + id[i];
          }
        }
      })
      .then(response => Promise.resolve(response)).then(() => this.videoRequest());
  }

  videoRequest() {
    fetch(Request.createUrl(this.videoUrl, this.videoSearchParametrs))
      .then(
        async (response) => {
          const temp = await response.json();
          return temp;
        },
      )
      .then(response => Promise.resolve(response))
      .then(secondData => this.viewCountData(secondData));
  }

  getData() { return this.data; }

  show() {
    if (document.querySelector('.youtubeContainer') !== null) {
      document.querySelector('.youtubeContainer').remove();
    }
    const showVideo = new CreateFragment();
    showVideo.createElement('div').setAttr({ class: 'youtubeContainer' }).setInFragment(null);
    showVideo.createElement('div').setAttr({ class: 'youtubeSlider' }).setInFragment('.youtubeContainer');
    showVideo.createElement('button').setText('next').setAttr({ class: 'btnSliderNext' }).setInFragment('.youtubeContainer');
    showVideo.createElement('button').setAttr({ class: 'newVideo' }).setText('New Video').setInFragment('.youtubeContainer');
    showVideo.setInDocument('.container');
    const tempData = Object.entries(this.data);
    for (let i = 0; i < tempData.length; i += 1) {
      const tempVideo = new CreateFragment();
      tempVideo.createElement('div').setAttr({ class: 'videoSlide' }).setInFragment(null);
      tempVideo.createElement('div').setAttr({ class: 'videoImg' }).setInFragment('.videoSlide');
      tempVideo.createElement('img').setAttr({ src: tempData[i][1].picture, alt: tempData[i][1].title }).setInFragment('.videoImg');
      tempVideo.createElement('div').setAttr({ class: 'videoInfo' }).setInFragment('.videoSlide');
      tempVideo.createElement('ul').setInFragment('.videoInfo');
      tempVideo.createElement('li').setInFragment('ul');
      tempVideo.createElement('a').setAttr({ href: `https://www.youtube.com/watch?v=${tempData[i][1].id}` }).setText(`Title: ${tempData[i][1].title}`).setInFragment('ul > li');
      tempVideo.createElement('li').setText(`Date: ${tempData[i][1].date}`).setInFragment('ul');
      tempVideo.createElement('li').setText(`Author: ${tempData[i][1].author}`).setInFragment('ul');
      tempVideo.createElement('li').setText(`description: ${tempData[i][1].description}`).setInFragment('ul');
      tempVideo.createElement('li').setText(`View Count: ${tempData[i][1].viewcounts}`).setInFragment('ul');
      tempVideo.setInDocument('.youtubeSlider');
    }
    changeWidth();
    window.addEventListener('resize', changeWidth);
    document.querySelector('.newVideo').addEventListener('click', this.getRequest.bind(this));
  }
};
