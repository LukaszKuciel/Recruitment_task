export default class extends HTMLElement {
  constructor(changeCallback, values = []) {
    super();
    this.changeCallback = changeCallback;
    this.values = values;
    this.render();
  }

  static get observedAttributes() {
    return ['data-value'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.changeCallback && oldValue !== newValue) this.changeCallback(newValue);
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'schibsted-dropdown';
    this.element.innerHTML = `
        <div class="schibsted-dropdown-btn-group"></div>
        <div class="schibsted-dropdown-options"></div>
    `;
    this.appendChild(this.element);
    const btngroup = document.querySelector('.schibsted-dropdown-btn-group');
    this.options = document.querySelector('.schibsted-dropdown-options');

    this.label = document.createElement('label');
    this.label.className = 'schibsted-dropdown-label';
    this.label.innerText = this.getAttribute('data-value').toUpperCase();

    this.button = document.createElement('button');
    this.button.className = 'schibsted-dropdown-btn';

    btngroup.appendChild(this.label);
    btngroup.appendChild(this.button);
    this.button.onclick = () => {
      if (this.element.classList.contains('open')) {
        this.element.classList.remove('open');
      } else {
        this.element.classList.add('open');
      }
    };
    this.renderOptions();
  }

  renderOptions() {
    this.values.forEach((value) => {
      const option = document.createElement('li');
      option.dataset.val = value.val;
      option.innerText = value.text;
      this.options.appendChild(option);
      option.onclick = () => {
        this.label.innerText = value.text.toUpperCase();
        this.element.classList.remove('open');
        this.setAttribute('data-value', value.val);
      };
    });
  }
}
