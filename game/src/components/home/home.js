import template from './home.template';
import './home.scss';

class Home {
  static draw() {
    const contentEl = document.querySelector('#content');
    contentEl.insertAdjacentHTML('beforeend', template);
  }
}

export default Home;
