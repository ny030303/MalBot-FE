import React from "react";
import styled from "styled-components";
import SearchBar from "../components/Input/SearchBar";
import TutorialCard from "../components/Card/TutorialCard";
import Tag from "../components/Tag/Tag";

/**
 * Home 컴포넌트 - 홈페이지를 렌더링
 * @returns {JSX.Element} 홈페이지 컴포넌트
 */
const Search: React.FC = () => {

  const handleStartClick = () => {
    console.log("Start button clicked!");
  };

  return (
    <div>
      <SearchBar placeholder="Search resorts" onSearch={(value: any) => console.log(value)} />
      <TutorialCard
        imageUrl="https://via.placeholder.com/300x160"
        title="How to use the app"
        subtitle="Tutorial 1 of 4"
        description="5m practice"
        buttonText="Start"
        onClick={handleStartClick}
      />
      <Tag />
    </div>
  );
};

export default Search;