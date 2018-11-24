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

  createUrl(url, defaultParams) {
    let urlParametr = new URLSearchParams();
    for (const key in defaultParams) {
      urlParametr.append(key, defaultParams[key]);
    }
    urlParametr = urlParametr.toString();
    console.log(url + urlParametr);
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
    fetch(this.createUrl(this.searchUrl, this.commonSearchParametrs))
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
    fetch(this.createUrl(this.videoUrl, this.videoSearchParametrs))
      .then(async (response) => await response.json())
      .then(response => Promise.resolve(response))
      .then(secondData => this.viewCountData(secondData));
  }

  getData() { return this.data; }

  show(data) {
    if (document.querySelector('.youtubeContainer') !== null) {
      document.querySelector('.youtubeContainer').remove();
    }
    const showVideo = new CreateFragment();
    showVideo.createElement('div').setAttr({ class: 'youtubeContainer' }).setInFragment(null);
    showVideo.createElement('div').setAttr({ class: 'youtubeSlider' }).setInFragment('.youtubeContainer');
    showVideo.createElement('button').setText('next').setAttr({ class: 'btnSliderNext' }).setInFragment('.youtubeContainer');
    showVideo.createElement('button').setAttr({ class: 'newVideo' }).setText('New Video').setInFragment('.youtubeContainer');
    showVideo.setInDocument('.container');
    for (const key in this.data) {
      const tempVideo = new CreateFragment();
      tempVideo.createElement('div').setAttr({ class: 'videoSlide' }).setInFragment(null);
      tempVideo.createElement('div').setAttr({ class: 'videoImg' }).setInFragment('.videoSlide');
      tempVideo.createElement('img').setAttr({ src: this.data[key].picture, alt: this.data[key].title }).setInFragment('.videoImg');
      tempVideo.createElement('div').setAttr({ class: 'videoInfo' }).setInFragment('.videoSlide');
      tempVideo.createElement('ul').setInFragment('.videoInfo');
      tempVideo.createElement('li').setInFragment('ul');
      tempVideo.createElement('a').setAttr({ href: `https://www.youtube.com/watch?v=${this.data[key].id}` }).setText(`Title: ${this.data[key].title}`).setInFragment('ul > li');
      tempVideo.createElement('li').setText(`Date: ${this.data[key].date}`).setInFragment('ul');
      tempVideo.createElement('li').setText(`Author: ${this.data[key].author}`).setInFragment('ul');
      tempVideo.createElement('li').setText(`description: ${this.data[key].description}`).setInFragment('ul');
      tempVideo.createElement('li').setText(`View Count: ${this.data[key].viewcounts}`).setInFragment('ul');
      tempVideo.setInDocument('.youtubeSlider');
    }
    changeWidth();
    window.addEventListener('resize', changeWidth);
    document.querySelector('.newVideo').addEventListener('click', this.getRequest.bind(this));
  }
};


/*
module.exports = function getRequest(e) {
  const elementValue = document.querySelector('input').value;
  let params = new URLSearchParams();
  const defaultParams = {
    part: 'snippet',
    maxResults: 6,
    q: elementValue,
    type: 'video',
    key: 'AIzaSyCni5hHJmCRuygcOBUiHGOdldAbRIOPQB8',
  };
  for (const key in defaultParams) {
    params.append(key, defaultParams[key]);
  }
  params = params.toString();
  const init = {
    method: 'GET',
    credentials: 'include',

  };

  const url = `https://www.googleapis.com/youtube/v3/search?${params}`;
  const info = fetch(url, init).then(async (response) => {
    const data = await response.json();
    console.log(data);
    function checkData(dataV) {
      const result = {};
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
      }
      return result;
    }
    const clearData = checkData(data);
    console.log(clearData);

    function show(data) {
      if(document.querySelector('.youtubeContainer') !== null) {
        document.querySelector('.youtubeContainer').remove();
      }
      const showVideo = new CreateFragment();
      showVideo.createElement('div').setAttr({ class: 'youtubeContainer' }).setInFragment(null);
      showVideo.createElement('div').setAttr({ class: 'youtubeSlider' }).setInFragment('.youtubeContainer');
      showVideo.createElement('button').setText('next').setAttr({ class: 'btnSliderNext' }).setInFragment('.youtubeContainer');
      showVideo.setInDocument('.container');
      for (const key in data) {
        const tempVideo = new CreateFragment();
        tempVideo.createElement('div').setAttr({ class: 'videoSlide' }).setInFragment(null);
        tempVideo.createElement('div').setAttr({ class: 'videoImg' }).setInFragment('.videoSlide');
        tempVideo.createElement('img').setAttr({ src: data[key].picture, alt: data[key].title }).setInFragment('.videoImg');
        tempVideo.createElement('div').setAttr({ class: 'videoInfo' }).setInFragment('.videoSlide');
        tempVideo.createElement('ul').setInFragment('.videoInfo');
        tempVideo.createElement('li').setInFragment('ul');
        tempVideo.createElement('a').setAttr({ href: `https://www.youtube.com/watch?v=${data[key].id}` }).setText(`Title: ${data[key].title}`).setInFragment('ul > li');
        tempVideo.createElement('li').setText(`Date: ${data[key].date}`).setInFragment('ul');
        tempVideo.createElement('li').setText(`Author: ${data[key].author}`).setInFragment('ul');
        tempVideo.createElement('li').setText(`description: ${data[key].description}`).setInFragment('ul');
        tempVideo.setInDocument('.youtubeSlider');
      }
    }
    show(clearData);
    changeWidth();
    window.addEventListener('resize', changeWidth);
  }).catch((error) => {
    console.log(error);
  });
  return info;
}; */
