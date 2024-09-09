import React from "react";
import styled from "styled-components";

// CorrectionItemProps 인터페이스 정의
interface CorrectionItemProps {
  type: string; // 교정 유형 (예: 문법 오류, 표현 개선)
  correction: string; // 교정 내용
}

/**
 * CorrectionItem 컴포넌트 - 문법 교정 항목을 표시하는 컴포넌트
 * @param {CorrectionItemProps} props - CorrectionItem 컴포넌트에 전달되는 props
 * @param {string} props.type - 교정 유형 (예: 문법 오류, 표현 개선)
 * @param {string} props.correction - 교정 내용
 * @returns {JSX.Element} CorrectionItem 컴포넌트
 */
const CorrectionItem: React.FC<CorrectionItemProps> = ({ type, correction }) => (
  <CorrectionContainer>
    <CorrectionType>{type}</CorrectionType>
    <CorrectionDetail>{correction}</CorrectionDetail>
  </CorrectionContainer>
);

// FeedbackDetailCardProps 인터페이스 정의
interface FeedbackDetailCardProps {
  corrections: { type: string; correction: string }[]; // 문법 교정 리스트
  generalFeedback: string; // 종합 피드백 메시지
}

/**
 * FeedbackDetailCard 컴포넌트 - 문법 교정 및 종합 피드백을 표시하는 컴포넌트
 * @param {FeedbackDetailCardProps} props - FeedbackDetailCard 컴포넌트에 전달되는 props
 * @param {Array<{type: string, correction: string}>} props.corrections - 문법 교정 항목 배열
 * @param {string} props.generalFeedback - 종합 피드백 메시지
 * @returns {JSX.Element} FeedbackDetailCard 컴포넌트
 */
const FeedbackDetailCard: React.FC<FeedbackDetailCardProps> = ({ corrections, generalFeedback }) => {
  return (
    <CardWrapper>
      <Section>
        <SectionTitle>문법 교정</SectionTitle>
        {corrections.map((item, index) => (
          <CorrectionItem key={index} type={item.type} correction={item.correction} />
        ))}
      </Section>
      <Section>
        <SectionTitle>종합 피드백</SectionTitle>
        <GeneralFeedback>{generalFeedback}</GeneralFeedback>
      </Section>
    </CardWrapper>
  );
};

export default FeedbackDetailCard;

// 스타일 컴포넌트 정의
const CardWrapper = styled.div`
//   width: 300px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 15px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CorrectionContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;

const CorrectionType = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CorrectionDetail = styled.div`
  font-size: 14px;
  color: #555;
`;

const GeneralFeedback = styled.p`
  font-size: 14px;
  color: #333;
`;

// 사용 예시
// const App: React.FC = () => {
//   const corrections = [
//     { type: "문법 오류", correction: `"이것" → "이는"` },
//     { type: "표현 개선", correction: `"린 문장도" → "문법에 오류가 있는"` },
//   ];

//   const generalFeedback = "전반적으로 좋은 시도였습니다. 몇 가지 작은 문법 오류를 수정하면 더 자연스러운 표현이 될 것 같습니다.";

//   return <FeedbackDetailCard corrections={corrections} generalFeedback={generalFeedback} />;
// };
