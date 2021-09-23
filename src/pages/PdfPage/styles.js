import styled from 'styled-components';
import {Document} from "react-pdf"
export const Container = styled.div`
  width: 100vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  min-height:100vh;
  height: 100%;
`;

export const StyledDocument = styled(Document)`
  max-width: 100vw !important;
  canvas,div{
    @media(max-width: 1000px){
      width: 90vw !important;
    }
  }
  span{
    display: none !important;;
  }
`

export const Dashboard = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7.5px;
  width: 100vw;
  height: 100%;
  margin-bottom: 20px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }
`;

export const PdfContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: ${props =>
      props.loading
        ? '0px 0px 16px rgba(0, 0, 0, 0.14)'
        : '0px 0px 0px rgba(0, 0, 0, 0)'};
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Subtitle = styled.h1`
  text-align: center;
  font-size: 19px;
  color: #334d6e;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  height: ${props => (props.error ? 350 : 745)}px;
  align-items: center;
`;
