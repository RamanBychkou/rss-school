module.exports = class CreateFragment {
  constructor() {
    this.fragment = document.createDocumentFragment();
    this.tempElement = undefined;
  }

  createElement(nameTag) {
    this.tempElement = document.createElement(`${nameTag}`);
    return this;
  }

  setAttr(attr) {
    for (const key in attr) {
      this.tempElement.setAttribute(key, attr[key]);
    }
    return this;
  }

  setText(text) {
    this.tempElement.innerHTML = text;
    return this;
  }

  setInFragment(whereInsert) {
    if (whereInsert !== null) {
      this.fragment.querySelector(whereInsert).appendChild(this.tempElement);
    } else {
      this.fragment.appendChild(this.tempElement);
    }
    return this;
  }

  setInDocument(whereInsert) {
    document.querySelector(whereInsert).appendChild(this.fragment);
  }
};
