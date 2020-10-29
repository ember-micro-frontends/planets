import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

import singleSpaEmber from 'single-spa-ember';

const emberLifecycles = singleSpaEmber({
  App,
  appName: 'planets',
  createOpts: {
    rootElement: '#planets',
  }
});

export const bootstrap = emberLifecycles.bootstrap;
export const mount = emberLifecycles.mount;
/*
export const mount = () => {

    //const appName = "planets";
    //const appUrl = "http://localhost:4202/planets/assets/planets.js";
    //const vendorUrl = "http://localhost:4202/planets/assets/vendor.js";
    //singleSpaEmber.loadEmberApp(appName, appUrl, vendorUrl);
  return emberLifecycles.mount().then(() => {
  });
}
*/
export const unmount = emberLifecycles.unmount;
/*
export const unmount = () => {

  return emberLifecycles.unmount().then(() => {

  const app = Array.from(document.querySelectorAll('script')).filter(s => s.src.endsWith('/planets/assets/planets.js'))
  document.head.removeChild(app[0]);
  const vendor = Array.from(document.querySelectorAll('script')).filter(s => s.src.endsWith('/planets/assets/vendor.js'))
  document.head.removeChild(vendor[0]);
  });
}
*/
