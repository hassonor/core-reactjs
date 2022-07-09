import React from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import Example from './pages/Example/Example';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='example' element={<Example />} />
    </Routes>
  );
}

export default App;
