import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthWrapper from './auth/AuthWrapper';
import './App.css';
import './input.css';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>      
     </div>
  );
}

export default App;
