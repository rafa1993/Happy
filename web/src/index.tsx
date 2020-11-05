import React from 'react';
import ReactDOM from 'react-dom';//integra react com dom para a exibição web, poderia ser native se fosse mobile

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);