import React from "react";
import Lottie from "react-lottie";
import ReactPlayer from "react-player";

import { ContentContainer, TitleContainer } from "./styles";
import { animations } from "../../assets";

export default function AudioPlayer({ data }) {
  return (
    <ContentContainer>
      <TitleContainer>
        <h2>{data.titulo}</h2>
      </TitleContainer>
      <div style={{ marginTop: 0 }}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animations.audio,
          }}
          height={200}
        />
      </div>
      <ReactPlayer
        controls={true}
        height={33}
        width={"85%"}
        style={{ marginTop: 0, alignSelf: "center" }}
        url={data[`${data.category}_url`]}
      />
    </ContentContainer>
  );
}
