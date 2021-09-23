import styled from "styled-components";

import laparcBackground from "../../assets/images/laparcBackground.jpg";
import laparcSmallBackground from "../../assets/images/laparcSmallBackground.jpg";

export const Container = styled.div`
  background-color: #dedede99;
`


export const WelcomeSection = styled.div`
  background-size: contain;
  display: flex;
  max-width: 100vw;
  background: url(${laparcBackground});
  @media(max-width: 1000px){
    flex-direction: column;
    background: none;
  }
`;
 
export const WelcomeContainer = styled.div`
  height: 449.8px;
  background-color: rgba(36, 36, 36, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  @media(max-width: 1000px){
    width: 100%;
    height: 200px;
    background: url(${laparcBackground});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  h1 {
    color: #ffffff;
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    @media(max-width: 1000px){
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      background-color: rgba(36, 36, 36, 0.5);
    }
  }
`;

export const FirstOptionContainer = styled.div`
  width: 30%;
  background-color: #dedede99;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 1000px){
      width: 100%;
      flex-direction: row;
      justify-content: space-evenly;
      background-color: #fff;
      margin: 15px 0;
      padding: 15px 0;
  }

  h1 {
    color: #000000;
    font-size: 45px;
    line-height: 69px;
    text-align: center;
    font-weight: normal;
    margin-top: 67.5px;
    @media(max-width: 1000px){
      margin-top: 0px;
      line-height: 35px;
      font-size:28px;
      width: 200px;
  }
  }

  button {
    width: 220px;
    height: 55px;
    margin-top: 100px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.75);
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    @media(max-width: 1000px){
      margin-top: 0px;
      width: 150px;
      height: 40px;
      font-size: 16px;
  }
  }
`;

export const ContentSection = styled.div`
  height: 567px;
  max-width: 100vw;
  display: flex;
  @media(max-width: 1000px){
    flex-direction: column-reverse;
    height: 100%;
    margin-bottom: 15px;

  }
`;

export const Cards = styled.div`
  display: flex;
  align-self: center;
  margin: 0 20px 20px;
  @media(max-width: 1000px){
    align-self: flex-start;
    justify-content:flex-start;
  }
  >div + div{
    margin-left:30px;
  }
  
`

export const NewsContainer = styled.div`
  height: 100%;
  background-color: #eee;
  width: 70%;
  @media(max-width: 1000px){
    width: 100%;
  }
  
`;

export const SecondOptionContainer = styled.div`
  background-size: contain;
  background-image: url(${laparcSmallBackground});
  height: 567px;
  width: 30%;
  @media(max-width: 1000px){
    width: 100%;
    height: 100%;
    background-image: none;
    
  }
  div {
    height: 100%;
    width: 100%;
    background-color: rgba(247, 104, 91, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 1000px){
    
      padding: 15px;
    }
    

    h1 {
      font-size: 45px;
      line-height: 72px;
      margin-top: 93px;
      font-weight: normal;
      color: #000000;
      @media(max-width: 1000px){
        margin: 0 0 10px 0;
        font-size: 28px;
        line-height: 30px;
      }
    }

    h2 {
      margin-top: 59px;
      text-align: center;
      font-weight: 500;
      font-size: 27px;
      line-height: 40px;
      color: #000000;
      width: 350px;
      @media(max-width: 1000px){
        margin: 0 0 10px 0;
        font-size: 20px;
      }
    }

    button {
      margin-top: 78px;
      height: 40px;
      width: 150px;
      background: #c94b40;
      @media(max-width: 1000px){
        margin: 0;
      }
    }
  }
`;

export const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  

  h1 {
    font-weight: 600;
    font-size: 27px;
    line-height: 60px;
    color: #000000;
    margin-left: 80px;
    margin-top: 25px;
    @media(max-width: 1000px){
      margin: 10px 0 0 20px;
    }
  }

  section {
    margin-top: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    &::-webkit-scrollbar-track {
      background-color: #F4F4F4;
      height: 3px;
    }
    &::-webkit-scrollbar {
        background: #F4F4F4;
        height: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }
    width: 100%;
    @media(max-width: 1000px){
      margin-top: 10px;  
      align-self: center;
    }

    button {
      background-color: transparent;
    }
  }
`;

export const LoadingContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const Subtitle = styled.h1`
  text-align: center;
  font-size: 25px;
  color: #334d6e;
`;
