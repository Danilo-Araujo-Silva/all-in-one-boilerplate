import properties from './../../properties';

// web - font - icons
if (properties.isDependencyEnabled('font-awesome')) {
} else {

}

// web - font - icons
if (properties.isDependencyEnabled('font-material-icons')) {
} else {

}

// web - font - icons
if (properties.isDependencyEnabled('font-roboto')) {
} else {

}

// rails
// Unobtrusive scripting adapter, necessary for routes.
if (properties.isDependencyEnabled('jquery-ujs')) {
  let jqueryUJS = require('jquery-ujs');
} else {

}

// web - ui - material
if (properties.isDependencyEnabled('material-components-web')) {
  let materialComponentsWebJS = require('material-components-web/dist/material-components-web.js');
  materialComponentsWebJS.autoInit();
} else {

}

// rails
// Unobtrusive scripting adapter, necessary for routes.
if (properties.isDependencyEnabled('rails-ujs')) {
  let railsUJS = require('rails-ujs');
} else {

}

// rails
// Rails dependency.
if (properties.isDependencyEnabled('turbolinks')) {
  let turbolinks = require('turbolinks');
}
