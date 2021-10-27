import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import headerLaparcBackground from "../../assets/images/headerLaparcBackground.jpg";

export const Container = styled.div`
  background-color: #eee;
  max-width: 100%;
  @media(max-width: 1000px){
      display: none;
    }
  
`;

export const HeaderContainer = styled.div`
  background-color: #fff;
  height: 102px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100vw;
  align-items: center;
  padding-right: 25px;
  

  img {
    width: 403.5px;
    height: 99.75px;
   
  }
`;
export const SmallDevicesContainer = styled.div`
  @media(min-width: 1000px){
      display: none;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 60px;
    width: 100%;
    background-color: #fff;

    h4{
      color: #99A3AE;
      font-size: 22px;
      font-weight:600;
      @media(max-width: 350px){
        font-size: 18px;
      }
    }
`
function renderActive(selected) {
  if (selected) {
    return css`
      border-bottom: 3px solid #f7685b;
    `;
  } else {
    return css`
      border-bottom: 3px solid transparent;
      transition: border-bottom 0.2s linear;

      :hover {
        border-bottom: 3px solid #f7685b;
      }
    `;
  }
}

export const ButtonsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > div + div {
    margin-left:15px;
  }
  
`;

export const ButtonContainer = styled.div`
  background-color: transparent;
  border-radius: 0px;
  height: 58px;
  display: flex;
  align-items: center;
  ${(props) => renderActive(props.selected)}
`;

export const SubOptions = styled.div`
  position: absolute;
  margin-top: 50px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border: 1px solid #00000020;
`;

export const SubOption = styled.button`
  width: 100%;
  padding: 9px 40px 9px 15px;
  align-items: center;
  border-radius: 0px;
  display: flex;
  color: #000000;
  font-weight: 400;
  font-size: 15px;
  text-decoration: none;
`;

export const Button = styled(Link)`
  font-weight: 600;
  font-size: 18px;
  color: #242424;
  text-decoration: none;

  img {
    width: 336px;
    height: auto;
  }
`;

export const TitleContainer = styled.div`
  margin-top: 16px;
  background-size: contain;
  background-image: url(${headerLaparcBackground});
  height: 120px;

  div {
    background: rgba(36, 36, 36, 0.5);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-weight: bold;
      font-size: 30px;
      line-height: 72px;
      text-align: center;
      color: #ffffff;
    }
  }
`;
