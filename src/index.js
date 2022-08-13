import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

import Modal from 'react-modal';
Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);