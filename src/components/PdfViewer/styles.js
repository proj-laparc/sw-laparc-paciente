import styled from "styled-components";

export const TitleContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;

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
  display: flex;
  width: 100%;
`;

export const PdfContainer = styled.div`
  height: 220px;
  width: 160px;
  align-self: center;
  display: flex;
  justify-content: center;
  margin-top: 6px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  align-self: center;
`;

export const Subtitle = styled.h3`
  text-align: center;
  font-size: 12px;
  color: #334d6e;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 220px;
`;
