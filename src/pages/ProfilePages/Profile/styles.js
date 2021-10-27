import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eeeeee;
  height: 100%;
`;

export const Dashboard = styled.div`
  width: 90vw;
  max-width: 1500px;
  margin-top: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  justify-content: ${(props) => (props.loading ? "center" : "flex-start")};
  height: 80%;
  padding: 0 30px;
  border-radius: 7.5px;
  @media(max-width: 800px){
    padding: 0 10px;
  }
`;
 
export const Division = styled.div`
  width: 1px;
  background-color: #eee;
  margin: 0 5%;
  min-height: 100%;
  @media(max-width: 800px){
    display: none;
  }
`


export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  @media(max-width: 800px){
    flex-direction: column;
    align-items: center;
  }
  
`

export const LeftSection = styled.div`
  width: 45%;
  @media(max-width: 800px){
    width: 90%;
    margin: 0 auto 20px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
  }
`;

export const ProfileImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
  background-color: #99a3ae;
  justify-content: center;
  align-items: center;
  display: flex;
  @media(max-width:1000px){
    align-self: center;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
`;

export const LabelContainer = styled.div`
  margin-top: 10px;
  
  p {
    color: #818e9b;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    @media(max-width: 800px){
      font-size: 14px;
      line-height: 18px;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #323c47;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media(max-width: 800px){
      font-size: 15px;
      line-height: 22px;
    }
  }
`;

export const OptionsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  

  button {
    width: 0px;
    width: fit-content;
    margin-top: 8px;

    h3 {
      font-size: 17px;
      line-height: 22px;
      letter-spacing: 0.01em;
      color: var(--primary);
      font-weight: 500;
      @media(max-width: 800px){
        font-size: 15px;
      }
    }
  }

  button:hover {
    filter: brightness(100%);
    opacity: 0.8;
  }
`;

export const RightSection = styled.div`
  width: 45%;
  @media(max-width: 800px){
    width: 90%;
    margin: 0 auto 20px;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

export const MedicalDateContainer = styled.div`
  
  h1 {
    color: #919ca7;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    @media(max-width: 800px){
      font-size: 18px;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #323c47;
    @media(max-width: 800px){
      font-size: 14px;
    }
  }
`;

export const Appointments = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (min-width: 800px){
    align-self: center;
  }
  >div{
    margin: 0 50px 30px 0;
  }
`;

function renderActions(appointment) {
  if (appointment === 0) {
    return css`
      justify-content: flex-end;
    `;
  } else {
    return css`
      justify-content: space-between;
    `;
  }
}

export const ActionsContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  align-self: center;

  display: flex;
  ${(props) => renderActions(props.appointment)}

  span {
    font-weight: 500;
    font-size: 16px;
    color: #919ca7;
    @media(max-width: 800px){
      font-size: 14px;
    }
  }

  button {
    transition: filter 0.2s;

    :hover {
      filter: brightness(100%) opacity(0.7);
    }
  }
`;

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;

  h2 {
    color: #919ca7;
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
    margin-bottom: 10px;
    @media(max-width: 800px){
      font-size: 16px;
    }
  }

  p {
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    width: 100px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    @media(max-width: 800px){
      font-size: 14px;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #323c47;
    @media(max-width: 800px){
      font-size: 14px;
    }
    
  }
`;

export const UploadedFile = styled.div`
  margin-top: ${(props) => (props.form ? 0.5 : 0)}vh;
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 68px;
  }
`;

export const ReportContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;

  h2 {
    color: #919ca7;
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
    margin-bottom: 10px;
    @media(max-width: 800px){
      font-size: 16px;
    }
  }

  a {
    p {
      color: #000000;
      font-size: 16px;
      font-weight: 400;
      width: 95px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      @media(max-width: 800px){
      font-size: 14px;
    }
    }
  }

  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #323c47;
    @media(max-width: 800px){
      font-size: 14px;
    }
  }
`;

export const ObsContainer = styled.div`
  align-self: flex-end;

  p {
    color: #818e9b;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    @media(max-width: 800px){
      font-size: 14px;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #323c47;
    margin-bottom: 15px;
    @media(max-width: 800px){
      font-size: 14px;
    }
  }
`;

export const Sections = styled.div`
  flex-direction: row;
  background-color: red;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  

`;

export const IconButton = styled.button`
  margin: 15px 15px 0 0;
  border-radius:100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  button:hover {
    filter: brightness(100%);
  }

  path {
    transition: opacity 0.4s;
  }

  path:hover {
    opacity: 0.3;
  }
`;

export const LoadingContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.h1`
  text-align: center;
  font-size: 25px;
  color: #334d6e;
`;
