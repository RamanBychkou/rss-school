const CreateFragment = require('./createFragment.js');
const slider = require('./slider.js');

module.exports = function changeWidth() {
  const browserWidth = window.innerWidth;
  let stepSlider;
  document.querySelector('.youtubeSlider > .videoSlide:first-child').style.marginLeft = '0px';
  if (browserWidth > 1005) {
    stepSlider = 1020;
    createTooltip(2);
    slider(stepSlider, 2);
  } else if (browserWidth < 1005 && browserWidth > 680) {
    stepSlider = 680;
    createTooltip(3);
    slider(stepSlider, 3);
  } else if (browserWidth < 680) {
    stepSlider = 340;
    createTooltip(6);
    slider(stepSlider, 6);
  }

  function createTooltip(numberTooltip) {
    if (document.querySelector('.toolTipWrapper') !== null) {
      document.querySelector('.toolTipWrapper').remove();
    }
    const setToolTip = new CreateFragment();
    setToolTip.createElement('div').setAttr({ class: 'toolTipWrapper' }).setInFragment(null);
    setToolTip.createElement('ul').setInFragment('.toolTipWrapper');
    for (let i = 0; i < numberTooltip; i += 1) {
      setToolTip.createElement('li').setAttr({ class: `slide_${i + 1}` }).setInFragment('.toolTipWrapper > ul');
      setToolTip.createElement('button').setText(`${i + 1}`).setAttr({ type: 'button' }).setInFragment(`.toolTipWrapper > ul li:nth-child(${i + 1})`);
    }
    setToolTip.setInDocument('.youtubeContainer');
  }
};
