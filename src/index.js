import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/applications.scss';
import i18nInit from './i18nInit';
import renderApp from './init';

console.log('gon', window);
console.log('i18nInit', i18nInit().then(() => renderApp(window.gon)));
i18nInit().then(() => renderApp(window.gon));