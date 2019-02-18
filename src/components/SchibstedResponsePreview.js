import Prism from '../assets/js/prism';
import '../assets/css/prism.css';

export default class extends HTMLElement {
  constructor(endpoint, response) {
    super();
    this.endpoint = endpoint;
    this.response = response;
    this.render();
  }

  render() {
    this.clean();
    this.className = 'schibsted-responsepreview';
    this.endpointbox = document.createElement('pre');
    this.endpointbox.className = 'schibsted-endpoint';
    this.endpointbox.innerHTML = this.endpoint;

    this.responsebox = document.createElement('pre');
    this.responsebox.className = 'schibsted-response';
    this.responsebox.innerHTML = this.response;

    this.appendChild(this.endpointbox);
    this.appendChild(this.responsebox);
    Prism.highlightAll();
  }

  refresh(endpoint, response) {
    this.endpoint = endpoint;
    this.response = response;
    this.endpointbox.innerHTML = this.endpoint;
    this.responsebox.innerHTML = this.response;
    Prism.highlightAll();
  }

  clean() {
    this.childNodes.forEach(child => child.remove());
  }
}
