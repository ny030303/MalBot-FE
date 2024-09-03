import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

// Button1 컴포넌트에서 사용할 props 타입 정의
interface Button1Props {
  bgColor?: string;
  textColor?: string;
  height?: number;
  width?: number;
  fontSize?: number;
  children?: React.ReactNode;
  isClick?: boolean;
  onClick?: () => void;
  disabled?: boolean; // disabled 속성 추가
}

// StyledButton 컴포넌트 정의
const StyledButton = styled.button<Button1Props>`
  padding: 10px 20px; /* 버튼의 패딩 설정 */
  background-color: ${(props) => props.bgColor || `#617AFA`}; /* 기본 배경색 */
  color: ${(props) => props.textColor || `#fff`}; /* 기본 텍스트 색상 */
  height: ${(props) =>
    props.height ? `${props.height}px` : "40px"}; /* 높이 설정 */
  width: ${(props) =>
    props.width ? `${props.width}px` : "auto"}; /* 너비 설정 */
  border: none;
  box-sizing: border-box;
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}px` : "16px"}; /* 글꼴 크기 설정 */
  letter-spacing: 0.5px;
  border-radius: 12px; /* 둥근 모서리 설정 */
  display: inline-block;
  text-align: center;
  cursor: pointer;

  ${({ isClick }) =>
    isClick &&
    css`
      opacity: 0.9;
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #adadad; /* 비활성화 상태의 배경색 */
      color: #333; /* 비활성화 상태의 텍스트 색상 */
      cursor: not-allowed; /* 비활성화 상태의 커서 모양 */
      opacity: 0.6; /* 비활성화 상태의 불투명도 */
    `};

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.bgColor || `#4b65d7`}; /* 호버 시 배경색 */
  }

  margin: 8px 0px 8px 0px;
`;

/**
 * Button1 컴포넌트
 * @param {Button1Props} props - 컴포넌트에 전달되는 props
 * @returns {JSX.Element} 버튼 컴포넌트
 */
const Button1: React.FC<Button1Props> = ({
  bgColor = "#617AFA", // 기본 배경색
  textColor = "#fff", // 기본 텍스트 색상
  height = 40, // 기본 높이
  width = 120, // 기본 너비
  fontSize = 16, // 기본 글꼴 크기
  children = "Start", // 기본 버튼 텍스트
  disabled = false, // 기본 disabled 상태
  onClick,
}) => {
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    if (isClick) {
      const timer = setTimeout(() => {
        setIsClick(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isClick]);

  const handleClick = () => {
    if (!disabled) {
      setIsClick(true);
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <StyledButton
      bgColor={bgColor}
      textColor={textColor}
      height={height}
      onClick={handleClick}
      isClick={isClick}
      width={width}
      fontSize={fontSize}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button1;
