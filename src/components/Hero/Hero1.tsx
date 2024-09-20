import React from 'react';
import styled from 'styled-components';

interface ImageComponentProps {
  imageUrl: string;
}

const Hero1: React.FC<ImageComponentProps> = ({ imageUrl }) => {
  return <ImageContainer imageUrl={imageUrl} />;
};

export default Hero1;

const ImageContainer = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 200px;
  background: url(${(props) => props.imageUrl}) center/cover no-repeat;
  border-bottom: 1px solid #eee;
`;
