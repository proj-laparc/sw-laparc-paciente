import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eeeeee;
  min-height: 800px;
`;

export const Dashboard = styled.div`
  width: 90vw;
  margin-top: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  justify-content: flex-start;
  height: 80%;
  @media(max-width: 800px){
    width: 95vw;
  }
`;

export const Description = styled.div`
  margin-top: 40px;
  padding: 0px 42px;
  white-space:pre-wrap;
  @media(max-width: 800px){
    padding: 0px 20px;
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 18.0094px;
    line-height: 27px;
    letter-spacing: 0.01em;
    color: #323c47;
    text-align: justify;
  }
`;

function renderRightContainer(length) {
  if (length === 0) {
    return css`
      margin-bottom: 10px;
    `;
  } else if (length === 1) {
      return css`
        justify-content: center;
        margin-bottom: 60px;
      `;
  } else {
      return css`
        margin-bottom: 60px;
        justify-content: space-between;
      `;
  }
}

export const PicturesContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-self: center;
  flex-direction: column;
  flex-wrap: wrap;
  ${props => renderRightContainer(props.length)}

  img + img{
    margin-top: 30px;
  }
`;

export const Picture = styled.img`
  width: 80%;
  border-radius: 2px;
  align-self: center;
  @media(max-width: 600px){
    width: 90%;
  }
`;

export const Subtitle = styled.h1`
  text-align: center;
  font-size: 20px;
  color: #334d6e;
`;

export const LoadingContainer = styled.div`
  margin-top: 170px;
  display: flex;
  flex-direction: column;
`;
