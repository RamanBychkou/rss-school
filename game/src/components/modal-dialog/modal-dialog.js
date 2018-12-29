import template from './modal-dialog.template';
import './modal-dialog.scss';

class ModalDialog {
  static draw() {
    const contentEl = document.querySelector('body');
    contentEl.insertAdjacentHTML('beforeend', template);
  }
}

export default ModalDialog;
