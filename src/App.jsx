import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import SystemPage from './components/SystemPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/system/:systemName" element={<SystemPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
