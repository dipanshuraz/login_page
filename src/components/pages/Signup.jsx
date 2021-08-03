import React from "react";
// import styled from "styled-components/macro";
// import { Link } from "react-router-dom";
import signUpJSON from "../../json/signup.json";

// components

// organisms
import Form from "../organisms/Form";

// templates
import ContainerWrapper from "../layouts/ContainerWrapper";
import LoginWrapper from "../layouts/LoginWrapper";

const Signup = () => {
  const {
    formJSON,
    initialForm,
    switchLink,
    switchLinkKey,
    switchText,
    formHeaderTitle,
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
        />
      </LoginWrapper>
    </ContainerWrapper>
  );
};

export default Signup;
