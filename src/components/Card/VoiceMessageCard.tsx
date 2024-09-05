import React from "react";
import styled from "styled-components";
import { AiOutlinePlayCircle, AiOutlineReload, AiOutlineForward } from "react-icons/ai";

interface VoiceMessageCardProps {
  imageUrl: string;
  title: string;
  sender: string;
  currentTime: string;
  totalTime: string;
  onPlay: () => void;
  onSeekBack: () => void;
  onSeekForward: () => void;
}

/**
 * VoiceMessageCard 컴포넌트 - 음성 메시지를 재생할 수 있는 카드 컴포넌트
 * @param {VoiceMessageCardProps} props - VoiceMessageCard에 전달되는 props
 * @param {string} props.imageUrl - 음성 메시지의 썸네일 이미지 URL
 * @param {string} props.title - 음성 메시지의 제목
 * @param {string} props.sender - 발신자 이름
 * @param {string} props.currentTime - 현재 재생 시간
 * @param {string} props.totalTime - 전체 메시지 길이
 * @param {() => void} props.onPlay - 재생 버튼 클릭 시 호출될 함수
 * @param {() => void} props.onSeekBack - 뒤로 15초 버튼 클릭 시 호출될 함수
 * @param {() => void} props.onSeekForward - 앞으로 15초 버튼 클릭 시 호출될 함수
 * @returns {JSX.Element} VoiceMessageCard 컴포넌트
 */
const VoiceMessageCard: React.FC<VoiceMessageCardProps> = ({
  imageUrl,
  title,
  sender,
  currentTime,
  totalTime,
  onPlay,
  onSeekBack,
  onSeekForward,
}) => {
  return (
    <CardContainer>
      <Thumbnail src={imageUrl} alt={`${title} 썸네일`} />
      <Content>
        <Title>{title}</Title>
        <Sender>{sender}</Sender>
        <SeekBarContainer>
          <SeekButton onClick={onSeekBack}>
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_35_312" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="23">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.258057H21.916V22.1731H0V0.258057Z" fill="white" />
              </mask>
              <g mask="url(#mask0_35_312)">
                <path d="M0.428869 9.87308L2.2552 11.6994C2.57805 12.0223 2.90091 12.0223 3.22376 11.6994C3.35749 11.5657 3.42435 11.4043 3.42435 11.2151C3.42435 9.13478 4.15987 7.35909 5.6309 5.88806C7.10192 4.41703 8.87761 3.68152 10.958 3.68152C13.0383 3.68152 14.814 4.41703 16.285 5.88806C17.7561 7.35909 18.4916 9.13478 18.4916 11.2151C18.4916 13.2955 17.7561 15.0712 16.285 16.5422C14.814 18.0132 13.0383 18.7487 10.958 18.7487V20.1185C13.4166 20.1185 15.5151 19.2492 17.2536 17.5108C18.9921 15.7723 19.8613 13.6737 19.8613 11.2151C19.8613 8.75653 18.9921 6.65799 17.2536 4.9195C15.5151 3.18101 13.4166 2.31177 10.958 2.31177C8.49937 2.31177 6.40083 3.18101 4.66234 4.9195C2.92385 6.65799 2.05461 8.75653 2.05461 11.2151H2.73948L3.22376 10.7309L1.39743 8.90452L0.428869 9.87308ZM0.228275 9.3888C0.228275 9.84538 0.456566 10.0737 0.913149 10.0737C1.36973 10.0737 1.59802 9.84538 1.59802 9.3888C1.59802 8.93222 1.36973 8.70392 0.913149 8.70392C0.456566 8.70392 0.228275 8.93222 0.228275 9.3888ZM10.2731 19.4336C10.2731 19.8902 10.5014 20.1185 10.958 20.1185C11.4145 20.1185 11.6428 19.8902 11.6428 19.4336C11.6428 18.977 11.4145 18.7487 10.958 18.7487C10.5014 18.7487 10.2731 18.977 10.2731 19.4336Z" fill="#2B5CED" />
                <path d="M8.42191 9.07371V14.7533H9.68278V7.56262H8.42191L7.30542 8.46927V9.9491L8.42191 9.07371ZM11.295 14.399C11.6318 14.7116 12.089 14.8679 12.6665 14.8679C13.276 14.8679 13.7525 14.6839 14.0958 14.3156C14.439 13.9475 14.6107 13.4334 14.6107 12.7733V12.0959C14.6107 11.4289 14.4679 10.9166 14.1824 10.5587C13.8968 10.201 13.475 10.022 12.9168 10.022C12.5445 10.022 12.2301 10.1333 11.9735 10.3555V8.72981H14.476V7.56262H10.8859V11.6582H11.9735C12.1083 11.3317 12.3359 11.1684 12.6569 11.1684C12.9071 11.1684 13.0915 11.2501 13.2103 11.4133C13.329 11.5766 13.3884 11.8285 13.3884 12.1688V12.7107C13.3884 13.0374 13.329 13.2857 13.2103 13.4559C13.0915 13.6262 12.9103 13.7112 12.6665 13.7112C12.4418 13.7112 12.2654 13.6487 12.1371 13.5236C12.0087 13.3985 11.9446 13.225 11.9446 13.0025V12.94H10.7896V13.0963C10.7896 13.6522 10.9581 14.0863 11.295 14.399Z" fill="#2B5CED" />
              </g>
            </svg>
          </SeekButton>
          <SeekBar>
            <ProgressBar style={{ width: "50%" }} /> {/* 현재 50%로 고정, 실제 값으로 변경 가능 */}
          </SeekBar>
          <SeekButton onClick={onSeekForward}>
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_35_356" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="23">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0841064 0.258057H22.0001V22.1731H0.0841064V0.258057Z" fill="white" />
              </mask>
              <g mask="url(#mask0_35_356)">
                <path d="M21.5711 9.8732L19.7448 11.6995C19.4219 12.0224 19.0991 12.0224 18.7762 11.6995C18.6425 11.5658 18.5756 11.4044 18.5756 11.2153C18.5756 9.1349 17.8401 7.35921 16.3691 5.88818C14.8981 4.41715 13.1224 3.68164 11.042 3.68164C8.96168 3.68164 7.18599 4.41715 5.71496 5.88818C4.24393 7.35921 3.50842 9.1349 3.50842 11.2153C3.50842 13.2956 4.24393 15.0713 5.71496 16.5423C7.18599 18.0134 8.96168 18.7489 11.042 18.7489V20.1186C8.58344 20.1186 6.4849 19.2494 4.74641 17.5109C3.00792 15.7724 2.13867 13.6738 2.13867 11.2153C2.13867 8.75666 3.00792 6.65811 4.74641 4.91962C6.4849 3.18113 8.58344 2.31189 11.042 2.31189C13.5006 2.31189 15.5992 3.18113 17.3377 4.91962C19.0761 6.65811 19.9454 8.75666 19.9454 11.2153H19.2605L18.7762 10.731L20.6026 8.90464L21.5711 9.8732ZM21.7717 9.38892C21.7717 9.8455 21.5434 10.0738 21.0869 10.0738C20.6303 10.0738 20.402 9.8455 20.402 9.38892C20.402 8.93234 20.6303 8.70405 21.0869 8.70405C21.5434 8.70405 21.7717 8.93234 21.7717 9.38892ZM11.7269 19.4337C11.7269 19.8903 11.4986 20.1186 11.042 20.1186C10.5855 20.1186 10.3572 19.8903 10.3572 19.4337C10.3572 18.9772 10.5855 18.7489 11.042 18.7489C11.4986 18.7489 11.7269 18.9772 11.7269 19.4337Z" fill="#2B5CED" />
                <path d="M8.5059 9.07371V14.7533H9.76676V7.56262H8.5059L7.3894 8.46927V9.9491L8.5059 9.07371ZM11.3789 14.399C11.7158 14.7116 12.173 14.8679 12.7505 14.8679C13.36 14.8679 13.8365 14.6839 14.1798 14.3156C14.523 13.9475 14.6947 13.4334 14.6947 12.7733V12.0959C14.6947 11.4289 14.5519 10.9166 14.2664 10.5587C13.9808 10.201 13.559 10.022 13.0007 10.022C12.6285 10.022 12.3141 10.1333 12.0575 10.3555V8.72981H14.56V7.56262H10.9699V11.6582H12.0575C12.1922 11.3317 12.4199 11.1684 12.7409 11.1684C12.9911 11.1684 13.1755 11.2501 13.2943 11.4133C13.413 11.5766 13.4724 11.8285 13.4724 12.1688V12.7107C13.4724 13.0374 13.413 13.2857 13.2943 13.4559C13.1755 13.6262 12.9943 13.7112 12.7505 13.7112C12.5258 13.7112 12.3494 13.6487 12.2211 13.5236C12.0927 13.3985 12.0286 13.225 12.0286 13.0025V12.94H10.8736V13.0963C10.8736 13.6522 11.0421 14.0863 11.3789 14.399Z" fill="#2B5CED" />
              </g>
            </svg>
          </SeekButton>
        </SeekBarContainer>
        <TimeContainer>
          <CurrentTime>{currentTime}</CurrentTime>
          <TotalTime>{totalTime}</TotalTime>
        </TimeContainer>
      </Content>
      <PlayButton onClick={onPlay}>
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_35_259)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 10.4314C18.751 10.863 18.5257 11.2636 18.1562 11.4869L6.9 18.3728C6.51356 18.6094 6.02931 18.6184 5.63438 18.3962C5.24323 18.1775 5.00065 17.7647 5 17.3166V3.54624C5.00065 3.09811 5.24323 2.68525 5.63438 2.46655C6.02931 2.24439 6.51356 2.25335 6.9 2.48999L18.1562 9.37593C18.5257 9.59916 18.751 9.99975 18.75 10.4314Z" fill="#F7FAFC" />
          </g>
          <defs>
            <clipPath id="clip0_35_259">
              <rect width="20" height="20" fill="white" transform="translate(0 0.431396)" />
            </clipPath>
          </defs>
        </svg>
      </PlayButton>
    </CardContainer>
  );
};

export default VoiceMessageCard;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f7fa;
  border-radius: 12px;
  padding: 15px;
  width: 100%;
  max-width: 400px;
  margin:12px 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #000;
`;

const Sender = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 10px;
`;

const SeekBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SeekButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  color: #1a73e8;
  font-size: 14px;

  span {
    margin: 0 5px;
  }
`;

const SeekBar = styled.div`
  flex: 1;
  height: 4px;
  background-color: #e0e0e0;
  border-radius: 2px;
  margin: 0 10px;
  position: relative;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #1a73e8;
  border-radius: 2px;
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;

const CurrentTime = styled.span``;

const TotalTime = styled.span``;

const PlayButton = styled.button`
  background-color: #1a73e8;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  padding: 10px;
  margin-left: 15px;
`;

