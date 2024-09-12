import React from "react";
import "./App.css";
import GlobalStyles from "./GlobalStyled";
import FeedbackCard from "./components/Card/FeedbackCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ReplayDetail from "./pages/ReplayDetail";
function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/replay/detail/*" element={<ReplayDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
