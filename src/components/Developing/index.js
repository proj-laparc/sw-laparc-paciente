import React from "react";
import Lottie from "react-lottie";

import { useAuth } from "../../context/AuthContext";
import {
  Background,
  Container,
  Title,
  Subtitle,
  Footer,
  Button
} from "./styles";
import { animations } from "../../assets";

export default function Developing() {
  const { signOut } = useAuth();
  return (
    <Background>
      <Container>
        <Title>
          Bem vindo ao <span style={{ color: "#A7A7A7" }}>Laparc</span>!
        </Title>
        <div>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animations.programming
            }}
            height={330}
            width={330}
          />
          <Subtitle>Em desenvolvimento...</Subtitle>
        </div>
        <Footer>
          <Button onClick={signOut}>Sair</Button>
        </Footer>
      </Container>
    </Background>
  );
}
