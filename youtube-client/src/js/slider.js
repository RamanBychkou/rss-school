module.exports = function slider(step, numbersSlide) {
  let currentSlide = 1;
  const stepCurrentSlide = numbersSlide / numbersSlide;
  let margin = 0;
  const coordinate = {};
  function nextSlide() {
    document.querySelector('.active').removeAttribute('class');
    if (currentSlide === numbersSlide) {
      currentSlide = 1;
      margin = 0;
      document.querySelector('.slide_1 > button').setAttribute('class', 'active');
      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = '0px';
    } else {
      margin += step;
      currentSlide += stepCurrentSlide;
      document.querySelector(`.toolTipWrapper ul li:nth-child(${currentSlide}) button`).setAttribute('class', 'active');
      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;
    }
  }

  function prevSlide() {
    document.querySelector('.active').removeAttribute('class');
    if (currentSlide === 1) {
      currentSlide = numbersSlide;
      margin = step * (numbersSlide - 1);
      document.querySelector('.toolTipWrapper ul li:last-child > button').setAttribute('class', 'active');
      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;
    } else {
      margin -= step;
      currentSlide -= stepCurrentSlide;
      document.querySelector(`.toolTipWrapper ul li:nth-child(${currentSlide}) button`).setAttribute('class', 'active');
      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;
    }
  }
  function handle(event) {
    switch (event.type) {
      case 'mousedown':
        coordinate.startX = event.clientX;
        coordinate.startY = event.clientY;
        break;
      case 'mouseup':
        coordinate.endX = event.clientX;
        coordinate.endY = event.clientY;
        if (coordinate.startX > coordinate.endX) {
          nextSlide(numbersSlide);
        } else {
          prevSlide(numbersSlide);
        }
        break;
      case 'touchstart':
        coordinate.startX = event.changedTouches[0].screenX;
        coordinate.startY = event.changedTouches[0].screenY;
        break;
      case 'touchend':
        coordinate.endX = event.changedTouches[0].screenX;
        coordinate.endY = event.changedTouches[0].screenY;
        if (coordinate.startX > coordinate.endX) {
          nextSlide(numbersSlide);
        } else {
          prevSlide(numbersSlide);
        }
        break;
      default: break;
    }
  }

  function showPage(event) {
    if (document.querySelector('.colorBtnText') !== null) {
      document.querySelector('.colorBtnText').removeAttribute('class');
    }
    if (document.querySelector('.active') !== null) {
      document.querySelector('.active').removeAttribute('class');
    }
    const e = event.target;
    e.setAttribute('class', 'colorBtnText active');
    const id = +e.id;
    margin = step * (id - 1);
    document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;
    currentSlide = id;
  }
  document.querySelector('.slide_1 > button').setAttribute('class', 'active');
  document.querySelector('.toolTipWrapper').addEventListener('mousedown', showPage);
  document.querySelector('.youtubeSlider').addEventListener('mousedown', handle);
  document.querySelector('.youtubeSlider').addEventListener('mouseup', handle);
  document.querySelector('.youtubeSlider').addEventListener('touchstart', handle);
  document.querySelector('.youtubeSlider').addEventListener('touchend', handle);
};
