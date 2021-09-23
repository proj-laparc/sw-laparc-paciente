import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  margin-top: 26px;
  width: 100%;
  justify-content: center;

  h2 {
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0.01em;
    color: #323c47;
    text-align: center;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ContentContainer = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;

  a{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Image = styled.img`
  margin-top: 24px;
  max-height: 227px;
  width: 90%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }
`;
