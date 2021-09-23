import React, { useEffect, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import Lottie from "react-lottie";

import {
  Container,
  Dashboard,
  Content,
  TitleContainer,
  LeftSection,
  Division,
  ProfileImageContainer,
  LabelContainer,
  OptionsContainer,
  RightSection,
  MedicalDateContainer,
  Appointments,
  ActionsContainer,
  FormsContainer,
  UploadedFile,
  ReportContainer,
  ObsContainer,
  IconButton,
  LoadingContainer,
  Subtitle,
} from "./styles";
import NavBar from "../../../components/NavBar";
import Cover from "../../../components/Cover";
import SideBar from "../../../components/SideBar";
import Footer from "../../../components/Footer";
import EditPasswordDashboard from "../../../components/EditPassword";
import { useToast } from "../../../context/ToastContext";
import { useLanguage } from "../../../context/LanguageContext";
import { useAuth } from "../../../context/AuthContext";
import { icons, animations } from "../../../assets";
import EditProfile from "../EditProfile";
import { profile } from "../../../constants/Languages";
import api from "../../../services/api";

export default function Profile() {
  const { addToast } = useToast();
  const { language } = useLanguage();
  const { user, setUser, signOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const [editPasswordMode, setEditPasswordMode] = useState(false);
  const [editionMode, setEditionMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [appointmentIndexToRender, setAppointmentIndexToRender] = useState(0);
  const [newPicturePreview, setNewPicturePreview] = useState("");
 
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

  function renderPicture() {
    if (user.profile_pic_url === null || user.profile_pic_url === "") {
      return <IoCameraOutline size={60} color={"#fff"} />;
    } else if (newPicturePreview !== "") {
      return <img src={newPicturePreview} />;
    } else {
      return <img src={user.profile_pic_url} />;
    }
  }

  async function getUserInformation() {
    setLoading(true);
    //token expirado: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjU2NjMyNzUsIm5iZiI6MTYyNTY2MzI3NSwianRpIjoiYjFjMTgwYmItY2NiZC00ODQwLWFjZDgtMDg4OWQ1YzdkMWNiIiwiZXhwIjoxNjI1NjY2ODc1LCJpZGVudGl0eSI6WzIzNCwicGFjaWVudGUiXSwiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MifQ.nGe8PvIq_jA3HOH2hvIKFh0XvFWwMVaQ6n4_gwXZ_KQ
    try {
      const response = await api.get(
        `/pacientes/${user.id}?embed=laudos,formulario,consultas`
      );
      setUser({ ...user, ...response.data });
    } catch (err) {
      addToast({
        type: "error",
        title: "Erro ao carregar suas informações",
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    getUserInformation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (editionMode) {
    return (
      <EditProfile
        setEditionMode={setEditionMode}
        setNewPicturePreview={setNewPicturePreview}
      />
    );
  }

  return (
    <>
      <NavBar selectedOption="profile" title={profile.title[language]}
        openMenu={openMenu} setOpenMenu={setOpenMenu}
        />
        <SideBar open={openMenu} activeOption="profile"/>
        <Cover open={openMenu} onClick={() => setOpenMenu(false)}/>
      <Container>
        <Dashboard loading={loading}>
          {loading ? (
            <LoadingContainer>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animations.doctorWriting,
                }}
                height={350}
                width={350}
              />
              <Subtitle>{profile.loadingText[language]}</Subtitle>
            </LoadingContainer>
          ) : (
            <>
              <TitleContainer>
                <IconButton onClick={() => setEditionMode(true)}>
                  {icons.edit}
                </IconButton>
              </TitleContainer>
              <Content>
                <LeftSection>
                <ProfileImageContainer>{renderPicture()}</ProfileImageContainer>
                <LabelContainer>
                  <p>{profile.nameLabel[language]}</p>
                  <h3>{user.nome}</h3>
                </LabelContainer>
                <LabelContainer >
                  <p>{profile.lastNameLabel[language]}</p>
                  <h3>{user.sobrenome}</h3>
                </LabelContainer>
                <LabelContainer >
                  <p>{profile.phoneLabel[language]}</p>
                  <h3>
                    {user.telefone
                      ? user.telefone
                      : profile.phoneLabel.options.nonePhone[language]}
                  </h3>
                </LabelContainer>
                <LabelContainer >
                  <p>{profile.emailLabel[language]}</p>
                  <h3>
                    {user.email
                      ? user.email
                      : profile.emailLabel.options.noneEmail[language]}
                  </h3>
                </LabelContainer>
                {editPasswordMode ? (
                  <EditPasswordDashboard
                    setEditPasswordMode={setEditPasswordMode}
                  />
                ) : (
                  <OptionsContainer>
                    <button onClick={() => setEditPasswordMode(true)}>
                      <h3>{profile.changePasswordButton[language]}</h3>
                    </button>
                    <button onClick={signOut}>
                      <h3>{profile.logOutButton[language]}</h3>
                    </button>
                  </OptionsContainer>
                )}
              </LeftSection>
                <Division/>
                <RightSection>
                <MedicalDateContainer>
                  <h1>{profile.appointmentsLabel[language]}</h1>
                  <Appointments>
                    {user.consultas.length !== 0 ? (
                      user.consultas
                        .slice(
                          appointmentIndexToRender,
                          appointmentIndexToRender + 3
                        )
                        .map((consulta, index) => (
                          <div
                            key={index}
                      
                          >
                            <LabelContainer marginTop={3.2}>
                              <p>
                                {
                                  profile.appointmentsLabel.options.category[
                                    language
                                  ]
                                }
                              </p>
                              <h3
                                style={{
                                  color: renderAppointmentColor(
                                    consulta.categoria
                                  ),
                                }}
                              >
                                {consulta.categoria
                                  ? consulta.categoria
                                  : "Não possui categoria"}
                              </h3>
                            </LabelContainer>
                            <LabelContainer>
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
                                {
                                  profile.appointmentsLabel.options.date[
                                    language
                                  ]
                                }
                              </p>
                              <h3>{consulta.data}</h3>
                            </LabelContainer>
                            <LabelContainer>
                              <p>
                                {
                                  profile.appointmentsLabel.options.hour[
                                    language
                                  ]
                                }
                              </p>
                              <h3>{consulta.horario}</h3>
                            </LabelContainer>
                          </div>
                        ))
                    ) : (
                      <h3 style={{ marginTop: 10 }}>
                        {
                          profile.appointmentsLabel.options.noneMessage[
                            language
                          ]
                        }
                      </h3>
                    )}
                  </Appointments>
                  <ActionsContainer appointment={appointmentIndexToRender}>
                    {appointmentIndexToRender !== 0 && (
                      <button
                        onClick={() =>
                          setAppointmentIndexToRender(
                            appointmentIndexToRender - 3
                          )
                        }
                      >
                        <span>
                          {
                            profile.appointmentsLabel.options.backButton[
                              language
                            ]
                          }
                        </span>
                      </button>
                    )}
                    {appointmentIndexToRender + 3 < user.consultas.length && (
                      <button
                        onClick={() =>
                          setAppointmentIndexToRender(
                            appointmentIndexToRender + 3
                          )
                        }
                      >
                        <span>
                          {
                            profile.appointmentsLabel.options.moreButton[
                              language
                            ]
                          }
                        </span>
                      </button>
                    )}
                  </ActionsContainer>
                </MedicalDateContainer>
                <FormsContainer>
                  <h2>{profile.formLabel[language]}</h2>
                  {user.formulario ? (
                    <UploadedFile form={true}>
                      <a href={user.formulario.formulario_url} target="_blank">
                        <img src={icons.pdf} />
                      </a>
                    </UploadedFile>
                  ) : (
                    <h3>
                      {profile.formLabel.options.noneMessage[language]}
                    </h3>
                  )}
                </FormsContainer>
                <ReportContainer>
                  <h2>{profile.medicalReports[language]}</h2>
                  {user.laudos.length !== 0 ? (
                    user.laudos.map((laudo, index) => (
                      <div
                        key={index}
              
                      >
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
                              : profile.medicalReports.options.noneObs[
                                  language
                                ]}
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
           

              </Content>
                
              </>
          )}
        </Dashboard>
      </Container>
      <Footer />
    </>
  );
}
