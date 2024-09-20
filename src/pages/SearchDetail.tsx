import React from "react";
import styled from "styled-components";
import SearchBar from "../components/Input/SearchBar";
import TutorialCard from "../components/Card/TutorialCard";
import Tag from "../components/Tag/Tag";
import HeaderBar from "../components/Header/HeaderBar";
import Hero1 from "../components/Hero/Hero1";
import StatComponent from "../components/Graph/StatComponent";

/**
 * Home 컴포넌트 - 홈페이지를 렌더링
 * @returns {JSX.Element} 홈페이지 컴포넌트
 */
const SearchDetail: React.FC = () => {

  const handleStartClick = () => {
    console.log("Start button clicked!");
  };

  return (
    <SearchDetailContainer>
      <HeaderBar
        title="Talking"
        bgColor="rgb(255 255 255 / 0%)"
        position="absolute"
        textColor = "#fff"
        onBackClick={() => console.log("뒤로가기 클릭됨")}
        onToggleClick={() => console.log("토글 클릭됨")}
      />
      <Hero1 imageUrl={"https://via.placeholder.com/300x160"}/>
      <StatComponent experience={70} pronunciation={10} speed={30} intonation={20}      
      />
    </SearchDetailContainer>
  );
};

export default SearchDetail;

const SearchDetailContainer = styled.div`
  position: relative;
  height: 100vh;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
`;