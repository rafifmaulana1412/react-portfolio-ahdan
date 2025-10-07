import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './index.css';
import AOS from 'aos';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function Root() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-in-out' });
  }, []);
  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
