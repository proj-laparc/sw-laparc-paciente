import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: #eee;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom:  30px;
  
`;

export const InnerContent = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;

  button {
    background-color: transparent;
  }
`

export const LoadMoreBtn = styled.button`
  align-self: center;
  color: var(--primary);
  font-size: 16px;
  height: 30px;
  border-radius: 8px;
  width: 150px;
  font-weight: 500;
  background-color: transparent;
  @media(min-width: 1000px){
    display: none;
  }
`

export const ArrowBtn = styled.button`
  @media(max-width: 1000px){
    display: none;
  }
`
export const DashBoard = styled.div`
  margin: 40px auto;
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto;
  gap: 15px;
  flex-wrap: wrap;
  @media(max-width:1000px){
    grid-template-columns: auto auto;
  }
  @media(max-width:1000px){
    display: none;
  }
`;

export const DashBoardSmallDevices = styled(DashBoard)`
  display: none;
  @media(max-width:1000px){
    display: grid
  }
  @media(max-width:750px){
   grid-template-columns: auto;
  }
`;

export const LoadingContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
`;

export const Subtitle = styled.h1`
  text-align: center;
  font-size: 25px;
  color: #334d6e;
`;
