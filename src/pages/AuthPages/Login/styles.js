import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  @media(max-width: 1000px){
    justify-content: center;
  }
`;
export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ArcosImage = styled.img`
  width:65%;
  @media(max-width: 1000px){
    display: none;
  }
`;

export const MainLogin = styled.div`
  display: flex;
  width: 35%;
  justify-content: flex-start;
  flex-direction: column;
  @media(max-width: 1000px){
    width: 100%;
  }
  
`;

export const LogoLaparc = styled.img`
  margin-top: 20px;
  align-self: center;
  width: 350px;
  @media(max-width: 1000px){
    margin-top: 0;
    max-width: 80vw;
  }
`;

export const Inputs = styled.div`
  align-self: center;
  margin-top: 53px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
`;

export const InputType = styled.span`
  font-size: 18px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.7);
  margin-left: 30px;
`;

export const Input = styled.input`
  background: #eeeeee;
  border-radius: 20px;
  width: 100%;
  height: 54px;
  margin-top: 4px;
  color: #666666;
  border: 0px none;
  padding: 0px 30px;
  font-size: 16px;
  border: none;
`;

export const PasswordInput = styled.input`
  border: none;
  background: #eeeeee;
  color: #666666;
  height: 54px;
  width: 100%;
  border-radius: 20px;
  padding: 0px 50px 0px 30px;
`;

export const PasswordContainer = styled.div`
  background: #eeeeee;
  border-radius: 20px;
  width: 420px;
  height: 54px;
  margin-top: 4px;
  border: 0px none;
  font-size: 16px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 600px){
    width: 100%;
  }

  button {
    position: relative;
    right: 20px;
  }
`;

export const LoginButton = styled.button`
  background: var(--primary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  align-self: center;
  width: 211px;
  min-height: 54px;
  line-height: 21px;
  margin-top: 30px;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  transition: filter 0.2s;
  &:hover {
    filter: ${(props) => (props.disabled ? "none" : "brightness(90%)")};
  }
`;

export const ForgotPasswordContainer = styled(Link)`
  text-decoration: none;
  align-self: center;
  margin: 68px 0 30px;
  transition: opacity 0.2s;
  &:focus,
  &:hover {
    opacity: 0.8;
  }
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const ForgotPassword = styled.span`
  color: #666666;
  line-height: 21px;
  font-size: 18px;
  border-bottom: 1px solid #66666690;
  white-space: nowrap;
  margin-bottom: 20px;
`;
