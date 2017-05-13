import properties from './../../properties';

// web - utility - multi
if (properties.isDependencyEnabled('jquery')) {
} else {

}

// utility - ui - positioning
if (properties.isDependencyEnabled('tether')) {
}

// web - ui - material
// dependencies: jquery, tether
if (properties.isDependencyEnabled('bootstrap')) {
  let bootstrapStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_bootstrap.scss');
  bootstrapStyles.use();
}

// web - ui - material
// dependencies: jquery
if (properties.isDependencyEnabled('bootstrap-material-design')) {
  let bootstrapMaterialDesignStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_bootstrap_material_design.scss');
  bootstrapMaterialDesignStyles.use();
}

// web - ui - material
// dependencies: jquery
if (properties.isDependencyEnabled('semantic-ui')) {
  let semanticUIStyles = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!shared/dependencies/ui/frameworks/_semantic_ui.scss');
  semanticUIStyles.use();
} else {

}

let headCSS = require('!style-loader/useable!css-loader!postcss-loader!sass-loader!head.scss');
headCSS.use();
