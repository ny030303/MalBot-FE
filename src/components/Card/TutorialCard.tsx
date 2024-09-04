import React from "react";
import styled from "styled-components";
import Button1 from "../Button/Button1";

interface TutorialCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
  onClick: () => void;
}

/**
 * TutorialCard 컴포넌트 - 학습 카드 형식으로 정보를 표시
 * @param {TutorialCardProps} props - TutorialCard 컴포넌트에 전달되는 props
 * @param {string} props.imageUrl - 카드에 표시될 이미지 URL
 * @param {string} props.title - 카드의 제목 텍스트
 * @param {string} props.subtitle - 카드의 부제목 텍스트
 * @param {string} props.description - 카드의 설명 텍스트
 * @param {string} props.buttonText - 버튼에 표시될 텍스트 (선택적, 기본값="Start")
 * @param {() => void} props.onClick - 버튼 클릭 시 호출될 함수
 * @returns {JSX.Element} TutorialCard 컴포넌트
 */
const TutorialCard: React.FC<TutorialCardProps> = ({
  imageUrl,
  title,
  subtitle,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <CardContainer>
      <ImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <Title>{title}</Title>
        <SubContainer>
          <Notice>
            <Subtitle>{subtitle}</Subtitle>
            <Description>{description}</Description>
          </Notice>
          <ButtonContainer>
            <Button1 onClick={onClick}>{buttonText}</Button1>
          </ButtonContainer>
        </SubContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default TutorialCard;

const CardContainer = styled.div`
  width: 90%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: white;
  padding: 20px;
`;

const ImageContainer = styled.div<{ imageUrl: string }>`
  // width: 90%;
  height: 240px;
  border-radius: 15px;
  background: url(${(props) => props.imageUrl}) center/cover no-repeat;
`;

const ContentContainer = styled.div`
  padding: 5px 0;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Notice = styled.div`
  margin: 5px 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #888;
  margin: 5px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  right: 0;
  bottom: 0;
  justify-content: flex-end;
`;
