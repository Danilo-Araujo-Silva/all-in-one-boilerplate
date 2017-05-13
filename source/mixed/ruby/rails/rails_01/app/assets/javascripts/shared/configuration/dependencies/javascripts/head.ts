import properties from './../../properties';

// web - utility - multi
if (properties.isDependencyEnabled('jquery')) {
  let jQuery = require('jquery/dist/jquery');
  (<any>window).$ = (<any>window).jquery = (<any>window).jQuery
      = (<any>global).$ = (<any>global).jquery = (<any>global).jquery
      = jQuery;
} else {

}

// utility - ui - positioning
if (properties.isDependencyEnabled('tether')) {
  let tetherJS = require('tether/dist/js/tether.min.js');
  (<any>window).Tether = (<any>global).Tether = tetherJS;
}

// web - ui - material
// dependencies: jquery, tether
if (properties.isDependencyEnabled('bootstrap')) {
  let bootstrapJS = require('bootstrap/dist/js/bootstrap.js');
}

// web - ui - material
// dependencies: jquery
if (properties.isDependencyEnabled('bootstrap-material-design')) {
  require('bootstrap-material-design/dist/js/ripples.js');
  let bootstrapMaterialDesignJS = require('bootstrap-material-design/dist/js/material.js');
  (<any>window).$.material.init();
}

// web - ui - material
// dependencies: jquery
if (properties.isDependencyEnabled('semantic-ui')) {
  let semanticUIJS = require('semantic-ui/dist/semantic.js');
} else {

}
