import React from "react";
import styled from "styled-components";
import HeaderBar from "../components/Header/HeaderBar";
import ProfileCard from "../components/Card/ProfileCard";
import ChatBubble from "../components/Bubble/ChatBubble";
import VoiceMessageCard from "../components/Card/VoiceMessageCard";

/**
 * Home 컴포넌트 - 홈페이지를 렌더링
 * @returns {JSX.Element} 홈페이지 컴포넌트
 */
const ReplayDetail: React.FC = () => {
  return (
    <ReplayDetailContainer>
      <HeaderBar
        title="Replay Chat"
        onBackClick={() => console.log("뒤로가기 클릭됨")}
        onToggleClick={() => console.log("토글 클릭됨")}
      />
      <ProfileCard
        imageUrl="../../images/portrait-2194457_1280.jpg"
        userName="사라"
        status="Online"
      />
      <ChatBubble
        message="마이크, 최근 마블 영화 봤어요?"
        userName="사라"
        userImage="../../images/portrait-2194457_1280.jpg"
        isMine={false}
      />
      <ChatBubble
        message="아직이요, 사라. 이번 주말에 볼 계획이에요."
        userName="마이크"
        userImage="../../images/portrait-2194457_1280.jpg"
        isMine={true}
      />
      <VoiceMessageCard
        imageUrl="../../images/sound-waves-7409203_1280.jpg"
        title="Voice Message"
        sender="Mike"
        currentTime="2:15"
        totalTime="4:30"
        onPlay={() => console.log('재생')}
        onSeekBack={() => console.log('15초 뒤로')}
        onSeekForward={() => console.log('15초 앞으로')}
      />
    </ReplayDetailContainer>
  );
};

export default ReplayDetail;

const ReplayDetailContainer = styled.div`
  position: relative;
  height: 100vh;
`;