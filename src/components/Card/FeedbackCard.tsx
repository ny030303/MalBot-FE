import React from "react";
import styled, { keyframes } from "styled-components";
import FeedbackDetailCard from "./FeedbackDetailCard";
const corrections = [
  { type: "문법 오류", correction: `"이것" → "이는"` },
  { type: "표현 개선", correction: `"린 문장도" → "문법에 오류가 있는"` },
];

const generalFeedback = "전반적으로 좋은 시도였습니다. 몇 가지 작은 문법 오류를 수정하면 더 자연스러운 표현이 될 것 같습니다.";
// ProgressBarProps 인터페이스 정의
interface ProgressBarProps {
  label: string; // 항목 이름
  value: number; // 실제 값
  max: number;   // 최대 값
  color: string; // 색상
}

/**
 * ProgressBar 컴포넌트 - 항목별 진행도를 표시하는 컴포넌트
 * @param {ProgressBarProps} props - ProgressBar 컴포넌트에 전달되는 props
 * @param {string} props.label - 진행 바에 표시될 항목 이름
 * @param {number} props.value - 진행 바의 실제 값
 * @param {number} props.max - 진행 바의 최대 값
 * @param {string} props.color - 진행 바의 색상
 * @returns {JSX.Element} ProgressBar 컴포넌트
 */
const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, max, color }) => {
  const percentage = (value / max) * 100; // 퍼센트 계산

  return (
    <ProgressContainer>
      <Label>{label}</Label>
      <BarContainer>
        <FilledBar style={{ width: `${percentage}%`, backgroundColor: color, borderRadius: "999px" }} />
        <EmptyBar />
      </BarContainer>
      <Values>
        <Value>{value}</Value>
        <Percentage>{Math.round(percentage)}%</Percentage>
      </Values>
    </ProgressContainer>
  );
};

// FeedbackCardProps 인터페이스 정의
interface FeedbackCardProps {
  message: string; // 메시지
  progressData: { label: string; value: number; max: number; color: string }[]; // 진행바 데이터
}

/**
 * FeedbackCard 컴포넌트 - 피드백 메시지와 진행 바 데이터를 표시하는 카드 컴포넌트
 * @param {FeedbackCardProps} props - FeedbackCard 컴포넌트에 전달되는 props
 * @param {string} props.message - 사용자에게 보여줄 피드백 메시지
 * @param {Array<{ label: string, value: number, max: number, color: string }>} props.progressData - 각 항목에 대한 진행 바 데이터를 포함하는 배열
 * @returns {JSX.Element} FeedbackCard 컴포넌트
 */
const FeedbackCard: React.FC<FeedbackCardProps> = ({ message, progressData }) => {
  return (
    <>
      <Title>Feedback</Title>
      <Message>{message}</Message>
      {progressData.map((data, index) => (
        <ProgressBar
          key={index}
          label={data.label}
          value={data.value}
          max={data.max}
          color={data.color}
        />
      ))}
      <FeedbackDetailCard corrections={corrections} generalFeedback={generalFeedback} />
    </>
  );
};

export default FeedbackCard;

/**
 * Title 컴포넌트 - 카드의 제목 스타일
 */
const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 50px;
`;

/**
 * Message 컴포넌트 - 피드백 메시지 스타일
 */
const Message = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
`;

/**
 * ProgressContainer 컴포넌트 - 진행 바를 감싸는 컨테이너
 */
const ProgressContainer = styled.div`
  margin-bottom: 15px;
`;

/**
 * Label 컴포넌트 - 진행 바의 항목 이름 스타일
 */
const Label = styled.span`
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
  display: block;
`;

/**
 * BarContainer 컴포넌트 - 진행 바의 컨테이너 (FilledBar와 EmptyBar를 감쌈)
 */
const BarContainer = styled.div`
  display: flex;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 5px;
`;

/**
 * FilledBar 컴포넌트 - 진행 바의 실제 채워진 부분 스타일
 */
const FilledBar = styled.div`
  height: 100%;
  transition: width 0.3s ease;
`;

/**
 * EmptyBar 컴포넌트 - 진행 바의 채워지지 않은 부분 스타일
 */
const EmptyBar = styled.div`
  flex-grow: 1;
  background-color: #e0e0e0;
`;

/**
 * Values 컴포넌트 - 값과 퍼센트를 나란히 표시하는 컨테이너
 */
const Values = styled.div`
  display: flex;
  justify-content: space-between;
`;

/**
 * Value 컴포넌트 - 실제 값 스타일
 */
const Value = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

/**
 * Percentage 컴포넌트 - 퍼센트 값 스타일
 */
const Percentage = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #888;
`;

// 사용 예시

/**
 * App 컴포넌트 - FeedbackCard 컴포넌트에 피드백 메시지와 진행 바 데이터를 전달하는 예시 컴포넌트
 */
// const App: React.FC = () => {
//   const progressData = [
//     { label: "속도", value: 35, max: 50, color: "#4a90e2" },
//     { label: "발음", value: 50, max: 100, color: "#f5a623" },
//     { label: "억양", value: 150, max: 500, color: "#f8e71c" },
//   ];

//   return <FeedbackCard message="아직이요, 사라. 이번 주말에 볼 계획이에요." progressData={progressData} />;
// };
