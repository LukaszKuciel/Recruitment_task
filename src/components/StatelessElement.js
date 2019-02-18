export default class StatelessElement extends HTMLElement {
  constructor(tag, tagStyle, content) {
    super();
    const element = document.createElement(tag);
    element.className = tagStyle;
    element.innerHTML = content;
    this.appendChild(element);
  }
}
