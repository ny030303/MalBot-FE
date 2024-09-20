import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowsAlt } from "react-icons/ai";

interface HeaderBarProps {
  title?: string;
  bgColor?: string;
  textColor?: string;
  position?: string;
  onBackClick: () => void;
  onToggleClick: () => void;
}

/**
 * HeaderBar 컴포넌트 - 상단 바로 뒤로가기와 토글 기능을 제공하는 컴포넌트
 * @param {HeaderBarProps} props - HeaderBar 컴포넌트에 전달되는 props
 * @param {string} [props.title='sample'] - 상단 바의 제목
 * @param {string} [props.textColor='#000'] - 컴포넌트의 텍스트 색상 (선택적, 기본값: '#000')
 * @param {string} [props.bgColor='#f5f7fa'] - 컴포넌트의 배경 색상 (선택적, 기본값: '#f5f7fa')
 * @param {string} [props.position='static'] - 컴포넌트의 position 속성 설정 (선택적, 기본값: 'static')
 * @param {() => void} props.onBackClick - 뒤로가기 버튼 클릭 시 호출될 함수
 * @param {() => void} props.onToggleClick - 토글 버튼 클릭 시 호출될 함수
 * @returns {JSX.Element} HeaderBar 컴포넌트
 */
const HeaderBar: React.FC<HeaderBarProps> = ({ 
  title = "sample", 
  bgColor = "#f5f7fa", // 기본 배경색
  textColor = "#000", // 기본 텍스트 색상
  position = "static", // 기본 텍스트 색상
  onBackClick, 
  onToggleClick 
}) => {
  return (
    <HeaderContainer bgColor={bgColor} textColor={textColor} position={position}>
      <IconButton  onClick={onBackClick}>
        <AiOutlineArrowLeft color={textColor} size={24} />
      </IconButton>
      <Title textColor={textColor}>{title}</Title>
      <IconButton onClick={onToggleClick}>
        <AiOutlineArrowsAlt color={textColor} size={24} />
      </IconButton>
    </HeaderContainer>
  );
};

export default HeaderBar;

const HeaderContainer = styled.div<{ bgColor?: string; textColor?: string, position?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: ${(props) => props.bgColor}; /* 기본 배경색 */
  color: ${(props) => props.textColor}; /* 기본 텍스트 색상 */
  border-radius: 8px;
  position: ${(props) => props.position}; /* 기본 포지션 */
  width: 100%;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin:0 20px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1<{ textColor?: string }>`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.textColor || '#1c1c1c'}; /* 기본 텍스트 색상 */
  margin: 0;
`;
