import React, { useState, useRef } from "react";
import Lottie from "react-lottie";
import { IoCameraOutline } from "react-icons/io5";
import axios from "axios";

import {
  Container,
  Dashboard,
  LeftSection,
  Division,
  EditImageContainer,
  ProfileImageContainer,
  LabelContainer,
  RightSection,
  MedicalDateContainer,
  Appointments,
  ActionsContainer,
  FormsContainer,
  UploadedFile,
  ReportContainer,
  ObsContainer,
  InputContainer,
  ButtonsContainer,
  CancelButton,
  EditButton,
} from "./styles";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import Cover from "../../../components/Cover";
import SideBar from "../../../components/SideBar";
import { useToast } from "../../../context/ToastContext";
import { useLanguage } from "../../../context/LanguageContext";
import { useAuth } from "../../../context/AuthContext";
import { icons, animations } from "../../../assets";
import api from "../../../services/api";
import { profile } from "../../../constants/Languages";

export default function EditProfile({ setEditionMode, setNewPicturePreview }) {
  const { addToast } = useToast();
  const { language } = useLanguage();
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [appointmentIndexToRender, setAppointmentIndexToRender] = useState(0);
  const [patientData, setPatientData] = useState(user);
  const [picture, setPicture] = useState(user.profile_pic_url);
  const fileInput = useRef(null);

  function renderAppointmentColor(description) {
    switch (description) {
      case "1ª consulta":
        return "#3452C2";
      case "2ª consulta baixo risco":
        return "#7C45A0";
      case "2ª consulta alto risco":
        return "#FF4643";
      case "MRPA entrega":
        return "#CED834";
      case "MRPA devolução":
        return "#47C355";
      case "ECG":
        return "#C2AEEE";
      case "Entrega de exame":
        return "#FF9138";
      default:
        return "gray";
    }
  }

  function changeInput(e) {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  }

  function handleFile(e) {
    if (e.target.files[0]) {
      const fileObject = {
        filePart: e.target.files[0],
        preview: URL.createObjectURL(e.target.files[0]),
      };
      setPicture(fileObject);
    }
  }

  function handleOpenFileInput() {
    fileInput.current.click();
  }

  function renderPicture() {
    if (picture === null || picture === "") {
      return <IoCameraOutline size={60} color={"#fff"} />;
    } else if (typeof picture === "object") {
      return <img src={picture.preview} />;
    } else {
      return <img src={picture} />;
    }
  }

  async function uploadToStorage(file) {
    if (file === user.profile_pic_url) {
      return false;
    }
    const { filePart } = file;
    const type = filePart.type.split("/")[1];
    const genericType = filePart.type.split("/")[0];
    try {
      const firstResponse = await api.get(`/${type}/put_url`);
      const fileData = {
        file_name: firstResponse.data.file_name,
        type: genericType,
      };
      /*para transformar o arquivo "file" do input em um arquivo
      binário (formato configurado no backend) é preciso fazer um 
      parse no arquivo, isto é, transformar em um Blob que contém
      apenas o dado, tamanho do arquivo e o tipo do arquivo. Por fim,
      é necessário criar um arquivo do tipo File (tipo de arquivo que é
      aceito por binary data) com o blob, o novo nome e o tipo do arquivo
      fonte: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data#Sending_binary_data*/
      let blob = filePart.slice(0, filePart.size, filePart.type);
      let binaryFile = new File([blob], firstResponse.data.file_name, {
        type: filePart.type,
      });
      const secondResponse = await axios.put(
        firstResponse.data.url,
        binaryFile,
        {
          headers: {
            "x-amz-acl": "public-read",
            "Content-Type": filePart.type,
            "Content-Disposition": "attachment",
          },
        }
      );
      return fileData.file_name;
    } catch (err) {}
  }

  function formatEditedData(obj) {
    let result = {};
    for (const key in obj) {
      const value = obj[key];
      if (value !== user[key]) {
        result = { ...result, [key]: value };
      }
    }
    return result;
  }

  async function sendProfileData(file) {
    try {
      let data = formatEditedData(patientData);
      if (file !== false) {
        data.profile_pic_file = file;
        setNewPicturePreview(picture.preview);
      }
      const response = await api.patch(`/pacientes/${patientData.id}`, data);
      setUser({ ...user, ...response.data });
      setEditionMode(false);
      addToast({
        type: "success",
        title: "Usuário editado!",
        description: "Suas informações foram atualizadas com sucesso",
      });
    } catch (err) {
      addToast({
        type: "error",
        title: "Erro ao editar seu perfil",
      });
    }
    setLoading(false);
  }

  async function handleSubmit() {
    setLoading(true);
    uploadToStorage(picture).then((result) => {
      sendProfileData(result);
    });
  }

  function validateInputs() {
    const requiredKeys = ["nome", "sobrenome"];
    const editableKeys = ["nome", "sobrenome", "telefone", "email"];
    if (
      !requiredKeys.every(
        (key) => patientData[key] !== "" && patientData[key] !== ""
      )
    ) {
      return true;
    } else if (
      editableKeys.every((key) => patientData[key] === user[key]) &&
      picture === user.profile_pic
    ) {
      return true;
    } else if (loading) {
      return true;
    }
  }

  return (
    <>
      <NavBar selectedOption="profile" title={profile.title[language]}
        openMenu={openMenu} setOpenMenu={setOpenMenu}
        />
        <SideBar open={openMenu} activeOption="profile"/>
        <Cover open={openMenu} onClick={() => setOpenMenu(false)}/>
      <Container>
        <Dashboard>
          <LeftSection>
          <EditImageContainer>

            <ProfileImageContainer>
              {renderPicture()}
            
            </ProfileImageContainer>
            <button
             
              onClick={handleOpenFileInput}
            >
              <input
                name="profile_pic"
                type="file"
                hidden
                ref={fileInput}
                onChange={handleFile}
              />
              <img src={icons.plus} />
            </button>
            </EditImageContainer>
            <InputContainer marginTop={3}>
              <p>{profile.nameLabel[language]}</p>
              <input
                onChange={changeInput}
                value={patientData.nome}
                name="nome"
              />
            </InputContainer>
            <InputContainer marginTop={1.5}>
              <p>{profile.lastNameLabel[language]}</p>
              <input
                onChange={changeInput}
                value={patientData.sobrenome}
                name="sobrenome"
              />
            </InputContainer>
            <InputContainer marginTop={1.5}>
              <p>{profile.phoneLabel[language]}</p>
              <input
                onChange={changeInput}
                value={patientData.telefone}
                name="telefone"
                type="tel"
                placeholder="+55 (21) 98888-8888"
              />
            </InputContainer>
            <InputContainer marginTop={1.5}>
              <p>{profile.emailLabel[language]}</p>
              <input
                onChange={changeInput}
                value={patientData.email}
                name="email"
              />
            </InputContainer>
            <ButtonsContainer>
              <CancelButton onClick={() => setEditionMode(false)}>
                <p>{profile.cancelButton[language]}</p>
              </CancelButton>
              <EditButton
                disabled={validateInputs() ? true : false}
                onClick={handleSubmit}
              >
                {loading ? (
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: animations.loadingBalls,
                    }}
                    height={35}
                    width={30}
                  />
                ) : (
                  <p>{profile.editButton[language]}</p>
                )}
              </EditButton>
            </ButtonsContainer>
          </LeftSection>
          <Division/>
          <RightSection>
            <MedicalDateContainer>
              <h1>{profile.appointmentsLabel[language]}</h1>
              <Appointments>
                {patientData.consultas.length !== 0 ? (
                  patientData.consultas
                    .slice(
                      appointmentIndexToRender,
                      appointmentIndexToRender + 3
                    )
                    .map((consulta, index) => (
                      <div
                        key={index}
                       
                      >
                        <LabelContainer >
                          <p>
                            {
                              profile.appointmentsLabel.options.category[
                                language
                              ]
                            }
                          </p>
                          <h3
                            style={{
                              color: renderAppointmentColor(consulta.categoria),
                            }}
                          >
                            {consulta.categoria
                              ? consulta.categoria
                              : "Não possui categoria"}
                          </h3>
                        </LabelContainer>
                        <LabelContainer >
                          <p>
                            {
                              profile.appointmentsLabel.options.description[
                                language
                              ]
                            }
                          </p>
                          <h3>{consulta.descricao}</h3>
                        </LabelContainer>
                        <LabelContainer>
                          <p>
                            {profile.appointmentsLabel.options.date[language]}
                          </p>
                          <h3>{consulta.data}</h3>
                        </LabelContainer>
                        <LabelContainer>
                          <p>
                            {profile.appointmentsLabel.options.hour[language]}
                          </p>
                          <h3>{consulta.horario}</h3>
                        </LabelContainer>
                      </div>
                    ))
                ) : (
                  <h3 style={{ marginTop: 10 }}>
                    {profile.appointmentsLabel.options.noneMessage[language]}
                  </h3>
                )}
              </Appointments>
              <ActionsContainer appointment={appointmentIndexToRender}>
                {appointmentIndexToRender !== 0 && (
                  <button
                    onClick={() =>
                      setAppointmentIndexToRender(appointmentIndexToRender - 3)
                    }
                  >
                    <span>
                      {profile.appointmentsLabel.options.backButton[language]}
                    </span>
                  </button>
                )}
                {appointmentIndexToRender + 3 <
                  patientData.consultas.length && (
                  <button
                    onClick={() =>
                      setAppointmentIndexToRender(appointmentIndexToRender + 3)
                    }
                  >
                    <span>
                      {profile.appointmentsLabel.options.moreButton[language]}
                    </span>
                  </button>
                )}
              </ActionsContainer>
            </MedicalDateContainer>
            <FormsContainer>
              <h2>{profile.formLabel[language]}</h2>
              {patientData.formulario ? (
                <UploadedFile form={true}>
                  <a href={user.formulario.formulario_url} target="_blank">
                    <img src={icons.pdf} />
                  </a>
                </UploadedFile>
              ) : (
                <h3 >
                  {profile.formLabel.options.noneMessage[language]}
                </h3>
              )}
            </FormsContainer>
            <ReportContainer>
              <h2>{profile.medicalReports[language]}</h2>
              {patientData.laudos.length !== 0 ? (
                patientData.laudos.map((laudo, index) => (
                  <div key={index}>
                    <UploadedFile>
                      <a href={laudo.laudo_url} target="_blank">
                        <img src={icons.pdf} />
                      </a>
                    </UploadedFile>
                    <ObsContainer>
                      <p>{profile.medicalReports.options.obs[language]}</p>
                      <h3>
                        {laudo.descricao
                          ? laudo.descricao
                          : profile.medicalReports.options.noneObs[language]}
                      </h3>
                    </ObsContainer>
                  </div>
                ))
              ) : (
                <h3>
                  {profile.medicalReports.options.noneMessage[language]}
                </h3>
              )}
            </ReportContainer>
          </RightSection>
        </Dashboard>
      </Container>
      <Footer />
    </>
  );
}
