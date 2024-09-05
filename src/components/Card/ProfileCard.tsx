import React from "react";
import styled from "styled-components";

interface ProfileCardProps {
  imageUrl: string;
  userName: string;
  status: string;
}

/**
 * ProfileCard 컴포넌트 - 사용자 프로필을 표시하는 컴포넌트
 * @param {ProfileCardProps} props - ProfileCard 컴포넌트에 전달되는 props
 * @param {string} props.imageUrl - 사용자 프로필 이미지의 URL
 * @param {string} props.userName - 사용자 이름
 * @param {string} props.status - 사용자 상태 (예: "Online", "Offline")
 * @returns {JSX.Element} ProfileCard 컴포넌트
 */
const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, userName, status }) => {
  return (
    <CardContainer>
      <ProfileImage src={imageUrl} alt={`${userName} 프로필 이미지`} />
      <UserName>{userName}</UserName>
      <StatusText status={status}>{status}</StatusText>
    </CardContainer>
  );
};

export default ProfileCard;

// 스타일 정의
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 16px;
//   width: 200px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const UserName = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1c1c1c;
  margin: 10px 0 5px;
`;

const StatusText = styled.p<{ status: string }>`
  font-size: 14px;
  color: ${(props) => (props.status === "Online" ? "#4CAF50" : "#888")};
  margin: 0;
`;

