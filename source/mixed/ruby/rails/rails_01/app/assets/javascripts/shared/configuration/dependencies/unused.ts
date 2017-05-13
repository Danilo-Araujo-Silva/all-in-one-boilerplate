import properties from '../properties';

// angular - ui - material
if (properties.isDependencyEnabled('@angular/material')) {
  let angularMaterialStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_angular_material.scss');
  angularMaterialStyles.use();
} else {

}

// web - utility - animation
if (properties.isDependencyEnabled('animate.css')) {
  let animateCSSStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/effects/_animate_css.scss');
  animateCSSStyles.use();
} else {

}

// react - ui - material
if (properties.isDependencyEnabled('ant-design')) {
  let antDesignStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_ant_design.scss');
  antDesignStyles.use();
} else {

}

// web - ui - material
if (properties.isDependencyEnabled('bulma')) {
  let bulmaStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_bulma.scss');
  bulmaStyles.use();
} else {

}

// web - ui - material
if (properties.isDependencyEnabled('flat-ui')) {
  let flatUIStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_flat_ui.scss');
  flatUIStyles.use();
} else {

}

// web - utility - animation - hover
if (properties.isDependencyEnabled('hover.css')) {
  let hoverCSSStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/effects/_hover.scss');
  hoverCSSStyles.use();
} else {

}

// web - ui - material (deprecated, use material-components-web prefereably)
if (properties.isDependencyEnabled('material-design-lite')) {
  let materialDesignLiteStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_material_design_lite.scss');
  materialDesignLiteStyles.use();

  let materialDesignLiteJS = require('material-design-lite/material.js');
} else {

}

// react - ui - material
if (properties.isDependencyEnabled('material-ui')) {
  let materialUIStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_material_ui.scss');
  materialUIStyles.use();
} else {

}

// web - ui - material
if (properties.isDependencyEnabled('materialize-css')) {
  let materializeCssStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_materialize_css.scss');
  materializeCssStyles.use();

  require('materialize-css/dist/js/materialize.js');
} else {

}

// angular - ui - material
if (properties.isDependencyEnabled('primeng')) {
  let primengStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_primeng.scss');
  primengStyles.use();
} else {

}

//
if (properties.isDependencyEnabled('purecss')) {
  let pureCSSStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_purecss.scss');
  pureCSSStyles.use();
} else {

}

// react - error fix
if (properties.isDependencyEnabled('react-tap-event-plugin')) {
  let reactTapEventoPlugin = require('react-tap-event-plugin');
  reactTapEventoPlugin();
} else {

}

// react - ui - material
if (properties.isDependencyEnabled('react-toolbox')) {
  let reactToolboxStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_react_toolbox.scss');
  reactToolboxStyles.use();
} else {

}

// vue - ui - material
if (properties.isDependencyEnabled('vuetify')) {
  let vuetifyStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_vuetify.scss');
  vuetifyStyles.use();
} else {

}
