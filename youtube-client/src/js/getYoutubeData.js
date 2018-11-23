

const CreateFragment = require('./createFragment.js');


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
  }).catch((error) => {
    console.log(error);
  });
  return info;
}; 