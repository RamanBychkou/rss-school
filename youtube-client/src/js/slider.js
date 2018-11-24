module.exports = function slider(step, numbersSlide) {
  let currentSlide = 1;
  const stepCurrentSlide = numbersSlide / numbersSlide;
  let margin = 0;
  function nextSlide(numbersSlide) {
    if (currentSlide === numbersSlide) {
      currentSlide = 1;
      margin = 0;
      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = '0px';
    } else {
      margin += step;
      currentSlide += stepCurrentSlide;
      document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = `-${margin}px`;
    }
  }
  document.querySelector('.btnSliderNext').addEventListener('click', nextSlide.bind(this, numbersSlide, step, stepCurrentSlide, margin));
};
