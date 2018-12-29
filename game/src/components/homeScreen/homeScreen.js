import template from './homeScreen.template';
import './homeScreen.scss';

class Header {
  static draw() {
    const contentEl = document.querySelector('#content');
    contentEl.insertAdjacentHTML('beforeend', template);
  }
}

export default Header;
