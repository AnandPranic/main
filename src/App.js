import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Screens/Header/Header';
import Landing from './Components/Screens/Landing/Landing';
import Events from './Components/Screens/Events/Events';
import FirstSaperator from './Components/Screens/FirstSaperator/FirstSaperator';
import SecondSaperator from './Components/Screens/SecondSaperator/SecondSaperator';
import Reasons from './Components/Screens/Reasons/Reasons';
import Description from './Components/Screens/Description/Description';
import Features from './Components/Screens/Features/Features';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <FirstSaperator />
      <Events />
      <SecondSaperator />
      <Reasons />
      <Description />
      <Features />
      {/* <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Routes>
        <Route path="/events" element={<Events />} />
      </Routes> */}
    </div>
  );
}

export default App;
