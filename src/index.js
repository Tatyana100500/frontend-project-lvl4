import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import '../assets/application.scss';

import init from './init.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const render = async () => {
  const vdom = await init();
console.log(document.getElementById('chat'));
console.log(reactDom);
  ReactDOM.render(vdom, document.getElementById('chat'));
};
render();
export default render;