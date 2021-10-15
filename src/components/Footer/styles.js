import styled from "styled-components";

export const Container = styled.div`
  background-color: #f7685b;
  height: 100%;
  max-width: 100vw;
  padding: 20px;
`;

export const MainInformationContainer = styled.div`
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 1200px){
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
  }
`;

export const InformationContainer = styled.div`
  height: 100%;
  padding: 15px 0px;
  height: 100%;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid #84000a;
  @media(max-width: 1200px){
    border: none;
    width: 100%;
    padding: 10px;
  }

  h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 27px;
      color: #ffffff;
      @media(max-width: 1200px){
        line-height: 20px;
        font-size: 15px;
      }
    }
`;

export const ContactsContainer = styled.div`

  height: 62px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media(max-width: 1200px){
    border: none;
    width: 100%;
    border-bottom: 1px solid #fff;
    margin-bottom: 15px;
    padding: 0 10px 10px;
  }
  div {
    display: flex;
    align-items: center;

    h3 {
      font-weight: 600;
      font-size: 16px;
      color: #ffffff;
      margin-left: 15px;
    }
  }
`;

export const LanguagesContainer = styled.div`

  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  button + button{
    margin-left:10px;
  }
  @media(max-width: 1200px){
    align-self:center;
    button + button{
    margin-left:30px;
  }
  }
`;

export const RightMainInformation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  @media(max-width: 1200px){
    flex-direction: column;
    width: 100%;
  }
`

export const LanguageButton = styled.button`
  background-color: transparent;
  opacity: ${(props) => (props.enabled ? 1 : 0.5)};
  img{
    width: 60px;
    height: 60px;
  
  }
  
`;

export const LinksContainer = styled.div`
  margin-top: 20px;

  @media(max-width: 800px){
    display: none;
  }
  h1 {
    font-weight: bold;
    font-size: 21px;
    line-height: 45px;
    color: #84000a;
  }

  section {
    display: flex;
    margin-top: 5px;
    justify-content: space-between;
  }

  h2 {
    font-size: 18px;
    color: #84000a;
  }
`;

export const NationalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  border-right: 2px solid #84000a;

  ul {
    margin-top: 5px;
    list-style-type: none;

    h3 {
      line-height: 27px;
      font-weight: 600;
      font-size: 18px;
      color: #ffffff;
      margin-top: 10px;
    }
  }
`;

export const InternationalContainer = styled(NationalContainer)`
  width: 40%;
  border-right: none;
`;

export const Link = styled.a.attrs({
  target: "_blank",
})`
  text-decoration: underline;
  cursor: pointer;
  color: #fff;
`;
