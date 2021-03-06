import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;
export const Content = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`
export const QuestionsDashboard = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-self: center;
  padding: 22px 0px 60px 0px;
  

  section {
    background-color: #fff;
    max-width: 1500px;
    width: 80%;
    display: flex;
    flex-direction: column;
    @media(max-width: 800px){
      width: 95vw;
  }
  }
`;

export const LoadingContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.h1`
  text-align: center;
  font-size: 25px;
  color: #334d6e;
`;
