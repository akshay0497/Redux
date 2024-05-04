import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';


import {Provider} from 'react-redux';
import prodStore from './Redux/product-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={prodStore}>
   <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
    <App />
    </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
