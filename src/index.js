import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastProvider } from 'react-toast-notifications';
import 'tippy.js/dist/tippy.css';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToastProvider autoDismissTimeout={5000} placement='bottom-center'>
    <App />
  </ToastProvider>
);
