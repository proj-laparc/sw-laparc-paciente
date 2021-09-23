import styled, { css } from "styled-components";

function defineMargin(position) {
  switch (position) {
    case "first":
      return css`
        margin-right: 40px;
        margin-left: 30px;
      `;
    case "last":
      return css`
        margin-right: 30px;
      `;
    default:
      return css`
        margin-right: 40px;
      `;
  }
}

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.14);
  display: flex;
  justify-content: center;
  height: 320px;
  width: 320px;
  border-radius: 18px;
  
`;
