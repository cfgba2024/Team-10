import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
