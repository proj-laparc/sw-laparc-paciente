import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  width: 79%;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f5;
  margin-left: 21%;
`;

export const Title = styled.h1`
  color: var(--primary);
  align-self: center;
  font-size: 60px;
  line-height: 78px;
  margin-top: 20px;
  margin-bottom: 45px;
`;

export const Subtitle = styled.h1`
  text-align: center;
  margin-top: 34px;
  color: #242424;
`;

export const Footer = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 75px;
  align-self: center;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 220px;
  height: 61px;
  margin: 0 67.5px;
  background: var(--primary);
  border-radius: 16.5059px;
  font-size: 22px;
  border: 2.60619px solid var(--primary);
  box-sizing: border-box;
  border-radius: 16.5059px;
`;
