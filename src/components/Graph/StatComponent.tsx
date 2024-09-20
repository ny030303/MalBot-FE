import React from 'react';
import styled from 'styled-components';

interface StatComponentProps {
  experience: number;
  pronunciation: number;
  speed: number;
  intonation: number;
}

const StatComponent: React.FC<StatComponentProps> = ({
  experience,
  pronunciation,
  speed,
  intonation,
}) => {
  return (
    <StatContainer>
      <ExperienceBar>
        <ExperienceCircle>{experience} exp</ExperienceCircle>
      </ExperienceBar>
      <Stats>
        <StatItem>
          <StatLabel>발음</StatLabel>
          <StatValue>{pronunciation}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>속도</StatLabel>
          <StatValue>{speed}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>억양</StatLabel>
          <StatValue>{intonation}</StatValue>
        </StatItem>
      </Stats>
    </StatContainer>
  );
};

export default StatComponent;

const StatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
`;

const ExperienceBar = styled.div`
  position: relative;
`;

const ExperienceCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 5px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stats = styled.div`
  display: flex;
  gap: 20px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #888;
`;

const StatValue = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
