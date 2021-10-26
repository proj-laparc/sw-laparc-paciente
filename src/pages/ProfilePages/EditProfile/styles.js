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
  flex-direction: row;
  margin-bottom: 60px;
  justify-content: ${(props) => (props.loading ? "center" : "flex-start")};
  height: 80%;
  padding: 50px 30px;
  border-radius: 7.5px;
  @media(max-width: 800px){
    padding: 20px 10px;
    flex-direction: column;
    align-items: center;
  }
`;
 
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

export const Division = styled.div`
  width: 1px;
  background-color: #eee;
  min-height: 100%;
  margin: 0 5%;
  @media(max-width: 800px){
    display: none;
  }
`
export const EditImageContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  @media(max-width:1000px){
    align-self: center;
  }
  button{
    align-self: flex-end;
  }
`
export const ProfileImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
  background-color: #99a3ae;
  justify-content: center;
  align-items: center;
  display: flex;
  

  >img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
`;

export const LabelContainer = styled.div`
  margin-top: ${(props) => props.marginTop && `${props.marginTop}vh`};

  p {
    color: #818e9b;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }

  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #323c47;
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.01em;
      color: var(--primary);
      font-weight: 500;
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
    font-size: 18px;
    line-height: 27px;
  }

  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #323c47;
  }
`;

export const Appointments = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 800px){
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
    font-size: 14px;
    color: #919ca7;
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
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    margin-bottom: 10px;
  }

  p {
    color: #000000;
    font-size: 14px;
    font-weight: 400;
    width: 100px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }

  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #323c47;
    
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
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    margin-bottom: 10px;
  }

  a {
    p {
      color: #000000;
      font-size: 14px;
      font-weight: 400;
      width: 95px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #323c47;
  }
`;
export const ObsContainer = styled.div`
  align-self: flex-end;

  p {
    color: #818e9b;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }

  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #323c47;
    margin-bottom: 15px;
  }
`;

export const Sections = styled.div`
  flex-direction: row;
  background-color: red;
  width: 100%;
`;

export const TitleContainer = styled.div`
  position: absolute;
  left: 1755px;
  top: 285px;
`;

export const IconButton = styled.button`
  width: 0px;
  height: 0px;

  button:hover {
    filter: brightness(100%);
  }

  path {
    transition: opacity 0.2s;
  }

  path:hover {
    opacity: 0.3;
  }
`;

export const InputContainer = styled.div`

  margin-top: ${(props) => props.marginTop && `${props.marginTop}vh`};

  p {
    color: var(--primary);
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }

  input {
    border-color: #818e9b90;
    border-width: 0px 0px 1.4px 0px;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #323c47;
    width: 350px;
    max-width: 100%;
    padding: 4px 0px 3px 0px;
    @media(max-width:768px){
      width: 330px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-top:  20px;
  flex: row;
  display: flex;
  justify-content: flex-start;
`;


export const EditButton = styled.button`
  width: 170px;
  height: 42px;
  margin-left: 10px;
  background: var(--primary);
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
  border-radius: 4px;

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.01em;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  @media (max-width: 768px) {
      width: 160px;
      p{
        font-size: 12px;
      } 
    }
`;

export const CancelButton = styled.button`
  width: 170px;
  height: 42px;

  background-color: white;
  color: black;
  border: 1.5px solid var(--primary);
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
  border-radius: 4px;
  transition: filter 0.2s;

  p {
    color: var(--primary);
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.01em;
  }
  @media (max-width: 768px) {
      width: 160px;
      p{
        font-size: 12px;
      } 
    }

  :hover {
    filter: brightness(100%) opacity(0.7);
  }
`;
