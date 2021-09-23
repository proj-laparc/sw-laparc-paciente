import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
`;

export const Dashboard = styled.div`
  width: 90vw;
  margin: 15px auto 60px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 80%;
  border-radius: 7.5px;
  padding-top: 30px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    ul {
      margin-bottom: 60px;
    }
  }
`;

export const ContactsContainer = styled.ul`
  list-style-type: none;
  width: 300px;
  margin-top: 3.5%;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-weight: 500;
      font-size: 24px;
      text-align: center;
    }

    img {
      margin: 68px 0px;
      @media (max-width: 800px) {
        margin: 35px 0;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 32px;

  h2 {
    font-weight: normal;
    font-size: 18px;
    margin-left: 17px;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  h1 {
    font-weight: 500;
    font-size: 27px;
    align-self: center;
  }
`;

export const InputsContainer = styled.ul`
  list-style-type: none;

  h2 {
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
  }

  li {
    margin-top: 18px;

    input {
      margin-top: 9px;
      width: 450px;
      height: 45px;
      border: 0.750169px solid #f7685b;
      border-radius: 3.00068px;
      padding-left: 15px;
      @media (max-width: 600px) {
        width: 80vw;
      }
    }

    textarea {
      border: 0.750169px solid #f7685b;
      border-radius: 3.00068px;
      padding: 15px;
      height: 200px;
      resize: none;
      text-align: justify;
      margin-top: 9px;
      width: 450px;
      @media (max-width: 600px) {
        width: 80vw;
      }
    }
  }
`;

export const SubmitButton = styled.button`
  width: 183.04px;
  height: 45.01px;
  background: #f7685b;
  border-radius: 6px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 16px;
`;
