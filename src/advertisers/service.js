const ADVERTISORS_URL = 'http://localhost:3000/advertisers';

export default async function getAdvertisers(datatype = 'json') {
  try {
    const response = await fetch(`${ADVERTISORS_URL}?type=${datatype}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        Accept: `application/${datatype}`,
        'Content-Type': `application/${datatype}`
      }
    });
    if (response.ok) {
      const endpoint = `GET ${response.url.replace('http://localhost:3000', '')}`;
      const headers = `HTML: ${response.status} ${response.statusText}
Vary: ${response.headers.get('Vary')}
Allow: ${response.headers.get('Allow')}
Content-Type: ${response.headers.get('Content-Type')}`;

      const content = await response.text();
      return { endpoint, content, headers };
    }
    throw Error('Response not 200!');
  } catch (err) {
    console.warn(err);
    return [];
  }
}
