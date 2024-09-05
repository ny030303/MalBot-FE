import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowsAlt } from "react-icons/ai";

interface HeaderBarProps {
  title: string;
  onBackClick: () => void;
  onToggleClick: () => void;
}

/**
 * HeaderBar 컴포넌트 - 상단 바로 뒤로가기와 토글 기능을 제공하는 컴포넌트
 * @param {HeaderBarProps} props - HeaderBar 컴포넌트에 전달되는 props
 * @param {string} props.title - 상단 바의 제목
 * @param {() => void} props.onBackClick - 뒤로가기 버튼 클릭 시 호출될 함수
 * @param {() => void} props.onToggleClick - 토글 버튼 클릭 시 호출될 함수
 * @returns {JSX.Element} HeaderBar 컴포넌트
 */
const HeaderBar: React.FC<HeaderBarProps> = ({ title, onBackClick, onToggleClick }) => {
  return (
    <HeaderContainer>
      <IconButton onClick={onBackClick}>
        <AiOutlineArrowLeft size={24} />
      </IconButton>
      <Title>{title}</Title>
      <IconButton onClick={onToggleClick}>
        <AiOutlineArrowsAlt size={24} />
      </IconButton>
    </HeaderContainer>
  );
};

export default HeaderBar;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #1c1c1c;
  margin: 0;
`;

