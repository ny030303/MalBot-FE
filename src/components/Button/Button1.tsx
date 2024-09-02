import React from "react";
import styled from "styled-components";

const Button1: React.FC = () => {
  return <Container>Button</Container>;
};

export default Button1;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 5px;
  margin: auto;
`;
