const secrets = require('./secrets').default;

console.log({ secrets });

exports.default = {
  manifest_version: 3,
  key: secrets.key,
  name: 'Next Call Extension',
  options_page: 'options.html',
  background: { service_worker: 'background.bundle.js' },
  action: {
    default_popup: 'popup.html',
    default_icon: 'icon-34.png',
    default_title: 'Click to see your next call',
  },
  permissions: ['identity', 'storage'],
  oauth2: {
    client_id: secrets.oAuthClientId,
    scopes: [
      'https://www.googleapis.com/auth/calendar.readonly',
      'https://www.googleapis.com/auth/calendar.events.readonly',
    ],
  },
  icons: {
    128: 'icon-128.png',
  },
  web_accessible_resources: [
    {
      resources: ['icon-128.png', 'icon-34.png'],
      matches: [],
    },
  ],
};
