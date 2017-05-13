import domReady from './../../helpers/dom_ready';

const lazyLoader = function() {
  require('./styles/body');
  require('./javascripts/body');
};

domReady(lazyLoader());
