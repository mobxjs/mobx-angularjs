require('angular');
require('angular-mocks');
require('app');

const context = require.context('../test', true, /\.spec\./);

context.keys().forEach(context);
