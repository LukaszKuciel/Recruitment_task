import getAdvertisers from './service';
import SchibstedDropdown from '../components/SchibstedDropdown';
import SchibstedResponsePreview from '../components/SchibstedResponsePreview';

export class ResponseDataPreview extends SchibstedResponsePreview {
  constructor() {
    super(
      '<code class="language-markup">GET</code>',
      '</br><code class="language-markup">Select data type</code>'
    );
  }
}

/* In case of future performance IMHO this async func should be async generator function
which will dynamically load new parts of data.
There should be also some filtering by parameters which will help to find specific data. */

async function drawResponse(type) {
  const response = await getAdvertisers(type);
  const endpoint = `<code class="language-http">${response.endpoint}</code>`;
  const content = `<code class="language-markup">${response.headers}</code>
    ${type === 'xml'
    ? `</br><script type="text/plain" class="language-${type}">${response.content}</script>`
    : `</br><code class="language-${type}">${response.content}</code>`}`;
  document.querySelector('schibsted-responsepreview').refresh(endpoint, content);
}

export class DataTypeDropDown extends SchibstedDropdown {
  constructor() {
    super(
      drawResponse,
      [
        { val: 'xml', text: 'xml' },
        { val: 'json', text: 'json' }
      ]
    );
  }
}


export class Main extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const element = document.createElement('main');
    element.className = 'advertisers-main';
    element.innerHTML = `
        <div class="advertisers-header">
          <h1>Advertisers List</h1>
          <schibsted-dropdown data-value="json"></schibsted-dropdown>
        </div>
        <schibsted-responsepreview></schibsted-responsepreview>
      `;
    this.appendChild(element);
  }
}
