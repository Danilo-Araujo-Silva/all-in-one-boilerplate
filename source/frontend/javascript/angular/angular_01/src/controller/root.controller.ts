import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import {properties} from 'model/configuration/properties';

import {RootModule} from 'model/component/root/root.module';

if (properties.constants.environment === 'production') {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RootModule);
