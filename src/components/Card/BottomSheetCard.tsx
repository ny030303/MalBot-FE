import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
/**
 * BottomSheetCard 컴포넌트 - 화면 하단에서 나타나는 바텀 시트
 * @param {BottomSheetProps} props - BottomSheet 컴포넌트에 전달되는 props
 * @param {boolean} props.isOpen - 바텀 시트가 열려 있는지 여부
 * @param {() => void} props.onClose - 바텀 시트를 닫는 함수
 * @param {React.ReactNode} props.children - 바텀 시트 내부에 표시될 콘텐츠
 * @returns {JSX.Element} BottomSheet 컴포넌트
 */
const BottomSheetCard: React.FC<BottomSheetProps> = ({ isOpen, onClose, children }) => {
  const [dragStartY, setDragStartY] = useState(0); // 드래그 시작 위치
  const [translateY, setTranslateY] = useState(0); // 바텀 시트의 현재 위치
  const sheetRef = useRef<HTMLDivElement | null>(null); // 바텀 시트를 참조

  useEffect(() => {
    // 바텀 시트가 열려 있을 때 body 스크롤 방지
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup 함수
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartY(e.clientY); // 드래그 시작 시 마우스 Y 좌표 기록
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const diffY = e.clientY - dragStartY; // 드래그 거리 계산
    if (diffY > 0) {
      setTranslateY(diffY); // 시트를 아래로 이동
    }
  };

  const handleMouseUp = () => {
    if (translateY > 150) {
      // 드래그가 150px 이상일 때 시트를 닫음
      onClose();
    } else {
      // 시트를 원래 위치로 되돌림
      setTranslateY(0);
    }
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <SheetContainer ref={sheetRef} style={{ transform: `translateY(${translateY}px)` }}>
        <HandleBar onMouseDown={handleMouseDown} />
        <Content>{children}</Content>
      </SheetContainer>
    </>
  );
};

export default BottomSheetCard;

// 바텀 시트의 전체적인 컨테이너
const SheetContainer = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  max-height: 90%;
  overflow-y: auto;
  transition: transform 0.3s ease-out;
  animation: slideUp 0.3s ease-out;
  
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

// 바텀 시트 뒤의 어두운 오버레이
const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

// 바텀 시트 상단의 핸들바
const HandleBar = styled.div`
  width: 40px;
  height: 4px;
  background-color: #d0d0d0;
  border-radius: 2.5px;
  margin: 10px auto;
  cursor: grab;
`;

// 바텀 시트 내부의 콘텐츠 영역
const Content = styled.div`
  padding: 20px;
`;

