const CreateFragment = require('./createFragment.js');

module.exports = function changeWidth() {
  const browserWidth = window.innerWidth;
  let stepSlider;
  if (browserWidth > 1005) {
    stepSlider = '1020px';
    createTooltip(2);
  } else if (browserWidth < 1005 && browserWidth > 680) {
    stepSlider = '680px';
    createTooltip(3);
  } else if (browserWidth < 680) {
    stepSlider = '340px';
    createTooltip(6);
  }

  function createTooltip(numberTooltip) {
    if (document.querySelector('.toolTipWrapper') !== null) {
      document.querySelector('.toolTipWrapper ul').remove();
    }
    const setToolTip = new CreateFragment();
    setToolTip.createElement('div').setAttr({ class: 'toolTipWrapper' }).setInFragment(null);
    setToolTip.createElement('ul').setInFragment('.toolTipWrapper');
    for (let i = 0; i < numberTooltip; i += 1) {
      setToolTip.createElement('li').setAttr({ class: `slide_${i + 1}` }).setInFragment('.toolTipWrapper > ul');
      setToolTip.createElement('input').setAttr({ type: 'button' }).setInFragment(`.toolTipWrapper > ul li:nth-child(${i + 1})`);
    }
    setToolTip.setInDocument('.youtubeContainer');
  }
};
