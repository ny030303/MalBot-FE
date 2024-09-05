import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai"; // 아이콘 사용을 위해 react-icons 라이브러리 설치 필요

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

/**
 * SearchBar 컴포넌트 - 리조트 검색 등의 검색 기능을 제공하는 컴포넌트
 * @param {SearchBarProps} props - SearchBar 컴포넌트에 전달되는 props
 * @param {string} props.placeholder - 검색 창에 표시될 힌트 텍스트 (선택적)
 * @param {(value: string) => void} props.onSearch - 검색 시 호출될 함수
 * @returns {JSX.Element} SearchBar 컴포넌트
 */
const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  return (
    <SearchBarContainer>
      <SearchIcon />
      <StyledInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9eef2;
  padding: 10px 15px;
  border-radius: 30px;
  width: 100%;
  max-width: 400px;
`;

const SearchIcon = styled(AiOutlineSearch)`
  color: #b0b0b0;
  font-size: 20px;
  margin-right: 10px;
`;

const StyledInput = styled.input`
  border: none;
  background: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  color: #666;
  &::placeholder {
    color: #b0b0b0;
  }
`;

