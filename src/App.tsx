import React from "react";
import "./App.css";
import GlobalStyles from "./GlobalStyled";
import FeedbackCard from "./components/Card/FeedbackCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ReplayDetail from "./pages/ReplayDetail";
import SearchDetail from "./pages/SearchDetail";
function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/search/detail/*" element={<SearchDetail />} />
          <Route path="/replay/detail/*" element={<ReplayDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
