import React from "react";
import styled from "styled-components";
import Button1 from "../components/Button/Button1";

/**
 * Home 컴포넌트 - 홈페이지를 렌더링
 * @returns {JSX.Element} 홈페이지 컴포넌트
 */
const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>이곳은 홈페이지입니다.</p>
      <a href="/search/">search</a>
      <a href="/search/detail/">search detail</a>
      <a href="/replay/detail/">replay detail</a>
    </div>
  );
};

export default Home;