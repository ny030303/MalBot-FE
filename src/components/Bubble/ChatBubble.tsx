import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import FeedbackCard from "../Card/FeedbackCard";

interface ChatBubbleProps {
  message: string;
  userName: string;
  userImage: string;
  isMine: boolean; // 내가 보낸 메시지인지 여부를 나타냄
}

const progressData = [
  { label: "속도", value: 35, max: 50, color: "#4a90e2" },
  { label: "발음", value: 50, max: 100, color: "#f5a623" },
  { label: "억양", value: 150, max: 500, color: "#f8e71c" },
];
/**
 * ChatBubble 컴포넌트 - 채팅 메시지를 표시하는 컴포넌트
 * @param {ChatBubbleProps} props - ChatBubble 컴포넌트에 전달되는 props
 * @param {string} props.message - 메시지 내용
 * @param {string} props.userName - 메시지를 보낸 사용자의 이름
 * @param {string} props.userImage - 메시지를 보낸 사용자의 프로필 이미지 URL
 * @param {boolean} props.isMine - 메시지가 내 메시지인지 여부를 나타냄
 * @returns {JSX.Element} ChatBubble 컴포넌트
 */
const ChatBubble: React.FC<ChatBubbleProps> = ({ message, userName, userImage, isMine }: ChatBubbleProps): JSX.Element => {
  const [isDetailVisible, setDetailVisible] = useState(false);

  // 클릭 시 상세 정보 창을 토글
  const handleBubbleClick = () => {
    setDetailVisible((prev) => !prev);
  };

  return (
    <>
      <ChatContainer isMine={isMine} onClick={handleBubbleClick}>
        {!isMine && <UserImage src={userImage} alt={`${userName} 프로필`} />}
        <MessageContainer isMine={isMine}>
          <UserName isMine={isMine}>{userName}</UserName>
          <MessageBubble isMine={isMine}>{message}</MessageBubble>
        </MessageContainer>
        {isMine && <UserImage src={userImage} alt={`${userName} 프로필`} />}
      </ChatContainer>

      {/* 클릭 시 바닥에서 올라오는 상세 정보 창 */}
      {isDetailVisible && (
        // <DetailContainer>
        //   <DetailContent>
        //     <h3>{userName}의 메시지</h3>
        //     <p>{message}</p>
        //   </DetailContent>
          
          
        //   {/* <CloseButton onClick={() => setDetailVisible(false)}>닫기</CloseButton> */}
        // </DetailContainer>
        <FeedbackCard message={message} progressData={progressData} />
      )}
    </>
  );
};

export default ChatBubble;

// 슬라이드 애니메이션 정의
const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

// 스타일 정의
const ChatContainer = styled.div<{ isMine: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: ${(props) => (props.isMine ? "flex-end" : "flex-start")};
  margin: 10px;
  cursor: pointer;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px;
`;

const MessageContainer = styled.div<{ isMine: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMine ? "flex-end" : "flex-start")};
  max-width: 60%;
`;

const UserName = styled.span<{ isMine: boolean }>`
  font-size: 12px;
  color: ${(props) => (props.isMine ? "#888" : "#555")};
  margin-bottom: 5px;
`;

const MessageBubble = styled.div<{ isMine: boolean }>`
  background-color: ${(props) => (props.isMine ? "#1A73E8" : "#F1F1F1")};
  color: ${(props) => (props.isMine ? "#fff" : "#333")};
  padding: 13px 16px; 
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.4;
  word-wrap: break-word;
`;

// 바닥에서 슬라이드되어 올라오는 오브젝트 스타일
const DetailContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${slideUp} 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DetailContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 5px;
  cursor: pointer;
`;
