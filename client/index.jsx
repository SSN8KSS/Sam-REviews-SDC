import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.jsx'

ReactDom.render(
  <App hotelId={2} />,
  document.getElementById('reviews-root'),
);
