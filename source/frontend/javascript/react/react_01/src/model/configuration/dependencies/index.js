/**
 * Application dependencies.
 */

// Styles
require('normalize.css/normalize.css')

// Material UI Framework dependencies
const injectTapEventPlugin = require('react-tap-event-plugin')
injectTapEventPlugin()

// JQuery dependencies
const jQuery = require('jquery/dist/jquery')
window.$ = window.jquery = window.jQuery
  = global.$ = global.jquery = global.jquery
  = jQuery

// Bootstrap UI Framework dependencies
require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap/dist/js/bootstrap.js')

// Bootstrap Material Design UI Framework dependencies
require('bootstrap-material-design/dist/css/bootstrap-material-design.min.css')
require('bootstrap-material-design/dist/js/ripples.js')
require('bootstrap-material-design/dist/js/material.js')
window.$.material.init()
