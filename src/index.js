import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/applications.scss';
import i18nInit from './i18nInit';
import renderApp from './init';

i18nInit().then(() => {
console.log(renderApp(window.gon));
renderApp(window.gon)});