import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const LogoLaparc = styled.img`
  margin-top: 15px;
  width: 400px;
  align-self: center;
  @media(max-width: 600px){
    width: 80vw;
  }
`;

export const RedefinePasswordTitle = styled.h2`
  font-style: bold;
  font-size: 21px;
  line-height: 25px;
  color: #242424;
  align-self: center;
  margin-top: 10px;
  max-width: 90vw;
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
  width: 420px;
  height: 54px;
  margin-top: 4px;
  color: #666666;
  border: 0px none;
  padding: 0px 30px;
  font-size: 16px;
  border: none;
  @media(max-width: 600px){
    width: 80vw;
  }
`;

export const PasswordInput = styled.input`
  border: none;
  background: #eeeeee;
  color: #666666;
  height: 54px;
  width: 420px;
  border-radius: 20px;
  padding: 0px 50px 0px 30px;
  @media(max-width: 600px){
    width: 100%;
  }
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

export const SubmitButton = styled.button`
  background: var(--primary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  align-self: center;
  width: 211px;
  height: 54px;
  line-height: 21px;
  margin: 30px 0;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  transition: filter 0.2s;
  &:hover {
    filter: ${(props) => (props.disabled ? "none" : "brightness(90%)")};
  }
`;
export const ConfirmationDescription = styled.p`
  align-self: center;
  margin-top: 30px;
  text-align: center;
  width: 350px;
  max-width: 80vw;
`