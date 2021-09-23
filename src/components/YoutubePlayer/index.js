import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

import { ContentContainer, TitleContainer } from "./styles";
import { icons } from "../../assets";

export default function YoutubePlayer({ data }) {
  return (
    <ContentContainer>
      <TitleContainer>
        <h2>{data.titulo}</h2>
      </TitleContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 24,
        }}
      >
        <ReactPlayer
          width={"90%"}
          height={195}
          controls={true}
          url={data.file_name}
        />
      </div>
    </ContentContainer>
  );
}
