import properties from './../../properties';

let bodyCSS = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!body.scss');
bodyCSS.use();

// web - font - icons
if (properties.isDependencyEnabled('font-awesome')) {
  let fontAwesomeStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/font_family/_font_awesome.scss');
  fontAwesomeStyles.use();
} else {

}

// web - font - icons
if (properties.isDependencyEnabled('font-material-icons')) {
  let materialDesignIconsStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/font_family/_material_icons.scss');
  materialDesignIconsStyles.use();
} else {

}

// web - font - icons
if (properties.isDependencyEnabled('font-roboto')) {
  let robotoFontStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/font_family/_roboto.scss');
  robotoFontStyles.use();
} else {

}

// rails
// Unobtrusive scripting adapter, necessary for routes.
if (properties.isDependencyEnabled('jquery-ujs')) {
} else {

}

// web - ui - material
if (properties.isDependencyEnabled('material-components-web')) {
  let materialComponentsWebStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_material_components_web.scss');
  materialComponentsWebStyles.use();
} else {

}

// rails
// Unobtrusive scripting adapter, necessary for routes.
if (properties.isDependencyEnabled('rails-ujs')) {
} else {

}

// rails
// Rails dependency.
if (properties.isDependencyEnabled('turbolinks')) {
}
