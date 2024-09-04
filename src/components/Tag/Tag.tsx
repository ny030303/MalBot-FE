import React from "react";
import styled from "styled-components";

const Tag: React.FC = () => {
  return <CardContainer>Tag</CardContainer>;
};

export default Tag;

const CardContainer = styled.div`
  width: 90%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: white;
  padding: 20px;
`;
