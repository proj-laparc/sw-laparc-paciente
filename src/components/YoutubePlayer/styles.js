import styled from 'styled-components';

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
  display: flex;
  width: 100%;
`;

