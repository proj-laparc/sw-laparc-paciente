import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";

import { useLanguage } from "../../context/LanguageContext";
import { Container, QuestionContainer, AnswerContainer, ArrowButton } from "./styles";

export default function QuestionCard({ data, index }) {
  const { language } = useLanguage();
  const [showAnswer, setShowAnswer] = useState(false);

  function chooseLanguage() {
    // eslint-disable-next-line default-case
    switch(language){
      case "portuguese":
        return "pt";
      case "english":
        return "en";
      case "spanish":
        return "es";
    }
  }
  return (
    <Container>
      <QuestionContainer>
        <p>
          <span>{`Q${index + 1}:`}</span> {` ${data[`pergunta_${chooseLanguage()}`]}`}
        </p>
        <ArrowButton
          onClick={() => setShowAnswer(!showAnswer)}
          showAnswer={showAnswer}
        >
    
          <FiChevronUp
            color="#323c47"
            size={24}
          />
          
        </ArrowButton>
      </QuestionContainer>
      {showAnswer && (
        <AnswerContainer>
          <p>
            <span>R:</span> {` ${data[`resposta_${chooseLanguage()}`]}`}
          </p>
        </AnswerContainer>
      )}
    </Container>
  );
}
