import MultilevelObject from "../helpers/multilevel_object";

class Properties extends MultilevelObject {

  public path: any;

  constructor() {
    super();

    this.path = require('path');

    this.object = {
      constants: {
        // Only the root route is manually setted.
        router: {
          relative: {
            '/': '../../../../../'
          },
          absolute: {
            '/': null // will be replaced.
          }
        }
      },
      dependencies: {
        '@angular/material' : {
          enabled: false,
        },
        'animate.css': {
          enabled: false,
        },
        'ant-design': {
          enabled: false,
        },
        'bootstrap': {
          enabled: true,
        },
        'bootstrap-material-design': {
          enabled: true,
        },
        'bulma': {
          enabled: false,
        },
        'flat-ui': {
          enabled: false,
        },
        'font-awesome': {
          enabled: true,
        },
        'font-material-icons': {
          enabled: true,
        },
        'font-roboto': {
          enabled: true,
        },
        'hover.css': {
          enabled: false,
        },
        'jquery': {
          enabled: true,
        },
        'jquery-ujs': {
          enabled: true,
        },
        'material-components-web': {
          enabled: true,
        },
        'material-design-lite': {
          enabled: false,
        },
        'material-ui': {
          enabled: false,
        },
        'materialize-css': {
          enabled: false,
        },
        'primeng': {
          enabled: false,
        },
        'purecss': {
          enabled: false,
        },
        'rails-ujs': {
          enabled: false,
        },
        'react-tap-event-plugin': {
          enabled: false,
        },
        'react-toolbox': {
          enabled: false,
        },
        'semantic-ui': {
          enabled: true,
        },
        'tether': {
          enabled: false,
        },
        'turbolinks': {
          enabled: true,
        },
        'vuetify': {
          enabled: false,
        },
      },
      environment: {
        development: {
          enabled: false,
        },
        homologation: {
          enabled: false,
        },
        production: {
          enabled: false,
        },
        test: {
          enabled: false,
        }
      },
      platform: {
        angular: {
          enabled: false,
        },
        react: {
          enabled: false,
        },
        vue: {
          enabled: false,
        },
      }
    };

    this.set(
      ['constants', 'router', 'absolute', '/'],
      this.path.resolve(
        __dirname,
        this.get(['constants', 'router', 'relative', '/'])
      )
    );

    this.object = Object.freeze(this.object);
  }

  public getAbsoluteRoute(keys: Array<string>): string {
    const root = this.get(['constants', 'router', 'absolute']);

    return this.path.resolve.apply(this.path, [root, ...keys]);
  }

  public getRelativeRoute(keys: Array<string>): string {
    return this.get(['constants', 'router', 'relative', ...keys]);
  }

  public getDependencies(): any {
    return this.get(['dependencies']);
  }

  public getDependency(keys: Array<string>): any {
    return this.get(['dependencies', ...keys]);
  }

  public isDependencyEnabled(dependency: string): boolean {
    if (this.get(['dependencies', dependency, 'enabled'])) {
      return true;
    }

    return false;
  }
}

const properties = new Properties();

export default properties;