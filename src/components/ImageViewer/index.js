import React from "react";

import { ContentContainer, TitleContainer, Image } from "./styles";

export default function ImageViewer({ data }) {
  return (
    <ContentContainer>
      <TitleContainer>
        <h2>{data.titulo}</h2>
      </TitleContainer>
      <a
        href={data[`${data.category}_url`]}
        target="_blank"
        style={{ alignSelf: "center" }}
      >
        <Image src={data[`${data.category}_url`]} alt="new" />
      </a>
    </ContentContainer>
  );
}
