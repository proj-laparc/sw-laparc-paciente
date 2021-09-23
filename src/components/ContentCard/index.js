import React from "react";

import { Container } from "./styles";
import YoutubePlayer from "../../components/YoutubePlayer";
import ImageViewer from "../../components/ImageViewer";
import AudioPlayer from "../../components/AudioPlayer";
import PdfViewer from "../../components/PdfViewer";
 
export default function ContentCard({ position, data }) {
  function renderRightType() {
    if (data.tipo === "youtube") {
      return <YoutubePlayer data={data} />;
    } else if (data.tipo === "image") {
      return <ImageViewer data={data} />;
    } else if (data.tipo === "audio") {
      return <AudioPlayer data={data} />;
    } else {
      return <PdfViewer data={data} />;
    }
  }

  return <Container position={position}>{renderRightType()}</Container>;
}
