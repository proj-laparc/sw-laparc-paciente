import styled from "styled-components";

export const Container = styled.div`
  background-color: #eee;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;

  section {
    margin-top: 10px;
    display: flex;
    min-height: 800px;

    div {
      display: flex;
      flex-wrap: wrap;
    }

    button {
      background-color: transparent;
    }
  }
`;

export const SectionOne = styled.div`
  display: flex;
  flex-direction: column;

  section {
    margin-top: 10px;
    display: flex;
    padding-left: 50px;
    align-items: center;

    div {
      display: flex;
      flex-wrap: wrap;
    }

    button {
      background-color: transparent;
    }
  }
`;

export const SectionTwo = styled(SectionOne)`
  padding-top: 0px;
  margin-top: 40px;
`;

export const LoadingContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
`;

export const Subtitle = styled.h1`
  text-align: center;
  font-size: 25px;
  color: #334d6e;
`;
