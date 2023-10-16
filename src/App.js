import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
//import Notiflix from "notiflix";
/* Notiflix.Notify.init({
  position: 'left-top', // Notification position
  distance: '10px', // Distance between notifications
  opacity: 1, // Notification opacity
  borderRadius: '12px', // Border radius
  fontFamily: 'inherit', // Font family
  fontSize: '18px', // Font size
  timeout: 1000,
}); */
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
