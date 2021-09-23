import styled from "styled-components"
export const Cover = styled.div`
  display: ${props => props.open? "block": "none"};
  position: fixed;
  left: 250px;
  top: 0;
  z-index:1000;
  right: 0;
  bottom: 0;
  background-color: rgba(33,33,33,0.3);
  z-index:99;
  @media(min-width: 1000px){
    display: none;
  }

`

export default Cover;