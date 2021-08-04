import React from "react";
// import styled from "styled-components/macro";
// import { Link } from "react-router-dom";
import signUpJSON from "../../json/signup.json";

// components

// organisms
import { Form } from "../organisms";

// templates
import { ContainerWrapper, LoginWrapper } from "../layouts";

export const Signup = () => {
  const {
    formJSON,
    initialForm,
    switchLink,
    switchLinkKey,
    switchText,
    formHeaderTitle,
    buttonText,
  } = signUpJSON;
  return (
    <ContainerWrapper>
      <LoginWrapper>
        <Form
          switchText={switchText}
          switchLinkKey={switchLinkKey}
          switchLink={switchLink}
          formJSON={formJSON}
          initialForm={initialForm}
          formHeaderTitle={formHeaderTitle}
          buttonText={buttonText}
        />
      </LoginWrapper>
    </ContainerWrapper>
  );
};
