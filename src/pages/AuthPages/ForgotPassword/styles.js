import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const LogoLaparc = styled.img`
  margin-top: 60px;
  width: 400px;
  align-self: center;
  @media(max-width: 600px){
    width: 80vw;
  }
`;

export const ForgotPasswordTitle = styled.h2`
  font-style: bold;
  font-size: 21px;
  line-height: 25px;
  color: #242424;
  align-self: center;
  margin-top: 53px;
`;

export const ForgotPasswordSubtitle = styled.span`
  font-size: 18px;
  line-height: 25px;
  margin-top: 10px;
  color: #242424;
  align-self: center;
  max-width: 90vw;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  align-self: center;
  margin-top: 38px;
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
  width: 420px;
  height: 54px;
  margin-top: 4px;
  color: #666666;
  border: 0px none;
  padding: 0px 30px;
  font-size: 16px;
  @media(max-width: 600px){
    width: 80vw;
  }
`;

export const SubmitButton = styled.button`
  background: var(--primary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  align-self: center;
  width: 211px;
  height: 54px;
  line-height: 21px;
  margin-top: 50px;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  transition: filter 0.2s;
  &:hover {
    filter: ${(props) => (props.disabled ? "none" : "brightness(90%)")};
  }
`;

export const BackButton = styled(Link)`
  position: absolute;
  top: 30px;
  left: 30px;
  align-self: flex-start;
`;
