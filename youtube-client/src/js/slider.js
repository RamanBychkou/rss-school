module.exports = function slider(step, numbersSlide) {
  let currentSlide = 1;
  const stepCurrentSlide = numbersSlide / numbersSlide;
  let margin = 0;
  const coordinate = {};
  function nextSlide(numbersSlide) {
    document.querySelector('.active').removeAttribute('class');
    if (currentSlide === numbersSlide) {
      currentSlide = 1;
      margin = 0;
      document.querySelector('.slide_1 > input').setAttribute('class', 'active');
      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = '0px';
    } else {
      margin += step;
      currentSlide += stepCurrentSlide;
      document.querySelector(`.toolTipWrapper ul li:nth-child(${currentSlide}) input`).setAttribute('class', 'active');
      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;
    }
  }
  function prevSlide(numbersSlide) {
    document.querySelector('.active').removeAttribute('class');
    if (currentSlide === 1) {
      currentSlide = numbersSlide;
      margin = step * (numbersSlide - 1);
      document.querySelector('.toolTipWrapper ul li:last-child > input').setAttribute('class', 'active');
      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;
    } else {
      margin -= step;
      currentSlide -= stepCurrentSlide;
      document.querySelector(`.toolTipWrapper ul li:nth-child(${currentSlide}) input`).setAttribute('class', 'active');
      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;
    }
  }
  function handle() {
    switch (event.type) {
      case 'mousedown':
        coordinate.startX = event.clientX;
        coordinate.startY = event.clientY;
        break;
      case 'mouseup':
        coordinate.endX = event.clientX;
        coordinate.endY = event.clientY;
        console.log(coordinate);
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
        console.log(coordinate);
        if (coordinate.startX > coordinate.endX) {
          nextSlide(numbersSlide);
        } else {
          prevSlide(numbersSlide);
        }
        break;
      default: break;
    }
  }

  document.querySelector('.slide_1 > input').setAttribute('class', 'active');
  document.querySelector('.btnSliderNext').addEventListener('click', nextSlide.bind(this, numbersSlide, step, stepCurrentSlide, margin));
  document.querySelector('.youtubeSlider').addEventListener('mousedown', handle.bind(this, numbersSlide, step, stepCurrentSlide, margin));
  document.querySelector('.youtubeSlider').addEventListener('mouseup', handle.bind(this, numbersSlide, step, stepCurrentSlide, margin));
};
