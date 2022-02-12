import React from "react";
import './app.css';
import HomePage from "../pages/home-page/home-page";
import InfoPage from "../pages/info-page/info-page";
import {Route, Routes} from "react-router-dom";

const App = () => {

  return (
    <main role="main" className="container">
      <h1 className='header'>TV Shows Library</h1>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/:showId" element={<InfoPage />} />
      </Routes>
    </main>
  );
};

export default App;