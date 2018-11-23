module.exports = function changeWidth() {
  debugger;
  const browserWidth = window.innerWidth;
  let stepSlider = undefined;
  if (browserWidth > 1005) {
    stepSlider = '1020px';
  } else if (browserWidth < 1005 && browserWidth > 680) {
    stepSlider = '680px';
  } else if (browserWidth < 680) {
    stepSlider = '340px';
  }
};
