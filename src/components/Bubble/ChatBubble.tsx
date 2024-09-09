import React from "react";
import styled from "styled-components";

interface ChatBubbleProps {
  message: string;
  userName: string;
  userImage: string;
  isMine: boolean; // 내가 보낸 메시지인지 여부를 나타냄
}

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
  return (
    <ChatContainer isMine={isMine}>
      {!isMine && <UserImage src={userImage} alt={`${userName} 프로필`} />}
      <MessageContainer isMine={isMine}>
        <UserName isMine={isMine}>{userName}</UserName>
        <MessageBubble isMine={isMine}>{message}</MessageBubble>
      </MessageContainer>
      {isMine && <UserImage src={userImage} alt={`${userName} 프로필`} />}
    </ChatContainer>
  );
};

export default ChatBubble;

// 스타일 정의
const ChatContainer = styled.div<{ isMine: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: ${(props) => (props.isMine ? "flex-end" : "flex-start")};
  margin: 10px;
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

