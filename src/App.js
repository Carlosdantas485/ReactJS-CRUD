import React from 'react';

import Routes from './routes';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={3000} />

    </>
  );
}

export default App;
