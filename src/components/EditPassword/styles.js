import styled from "styled-components";

export const EditionDashboard = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  
`;

export const InputContainer = styled.div`
  margin-top: ${props => props.marginTop && `${props.marginTop}vh`};

  p {
    color: var(--primary);
    font-weight: 500;
    font-size: 17px;
    line-height: 16px;
    letter-spacing: 0.01em;
    @media(max-width: 800px){
        font-size: 15px;
      }
  }

  input {
    border-color: #818e9b90;
    border-width: 0px 0px 1.4px 0px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #323c47;
    width: 350px;
    max-width: 100%;
    padding: 6px 0px 3px 0px;
    @media(max-width: 800px){
        font-size: 16px;
      }
    @media(max-width:768px){
      width: 330px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-top:  40px;
  display: flex;
  justify-content: flex-start;
 
`;

export const EditButton = styled.button`
  width: 170px;
  height: 42px;
  margin: 0  0 0 15px;
  background: var(--primary);
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
  border-radius: 4px;

  p {
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
