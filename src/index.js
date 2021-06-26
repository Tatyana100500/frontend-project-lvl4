import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';

//import gon from 'gon';

import app from './app';
var gon = require('gon');
if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}
//console.log(app());
app(gon);