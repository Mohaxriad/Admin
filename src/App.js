import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Static from './components/Statistiques';
import User from './components/users';
import Cresh from './components/creches';
import Avis from './components/avis';
import Kids from './components/enfants';








function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact  path='/' element={<Static/>} />
      <Route exact  path='/users' element={<User/>} />
      <Route exact  path='/creches' element={<Cresh/>} />
      <Route exact  path='/avis' element={<Avis/>} />
      <Route exact  path='/enfants' element={<Kids/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
