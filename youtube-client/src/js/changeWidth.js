const CreateFragment = require('./createFragment.js');
const slider = require('./slider.js');

module.exports = function changeWidth() {
  const browserWidth = window.innerWidth;
  let stepSlider;
  // show first slide
  document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = '0px';

  function createTooltip(numberTooltip) {
    if (document.querySelector('.toolTipWrapper') !== null) {
      document.querySelector('.toolTipWrapper').remove();
    }
    const setToolTip = new CreateFragment();
    setToolTip.createElement('div').setAttr({ class: 'toolTipWrapper' }).setInFragment(null);
    setToolTip.createElement('ul').setInFragment('.toolTipWrapper');
    for (let i = 0; i < numberTooltip; i += 1) {
      setToolTip.createElement('li').setAttr({ class: `slide_${i + 1}` }).setInFragment('.toolTipWrapper > ul');
      setToolTip.createElement('button').setText(`${i + 1}`).setAttr({ id: `${i + 1}` }).setInFragment(`.toolTipWrapper > ul li:nth-child(${i + 1})`);
    }
    setToolTip.setInDocument('.youtubeContainer');
  }
  // tracking device width
  if (browserWidth > 1005) {
    stepSlider = 1020;
    createTooltip(5);
    slider(stepSlider, 5);
  } else if (browserWidth < 1005 && browserWidth > 680) {
    stepSlider = 680;
    createTooltip(8);
    slider(stepSlider, 8);
  } else if (browserWidth < 680) {
    stepSlider = 340;
    createTooltip(15);
    slider(stepSlider, 15);
  }
};
