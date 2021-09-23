import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  position: fixed;
  height: 100%;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  min-width: 205px;
  z-index:90;
  display: ${props => props.open ? "block" : "none"};
  position: fixed;
  top: 0;
  width: 250px;
  @media(min-width: 1000px){
    display: none;
  }
`;
 
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${props => props.open? "40px":"1.8vw"};
  border-bottom: 1.5px solid #ebeff290;
  height: 60px;

  h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: var(--primary);
  }
`;


export const SideBarContainer = styled.div`
  margin-top: 4.3vh;
  display: inline-block;
`;



export const StyledLink = styled(Link)`
  text-decoration: none;
`