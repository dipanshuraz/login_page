import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Signup from "../components/pages/Signup";

describe("SignUp Page", () => {
  test("renders Signup heading", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>,
    );
    const headerComponent = screen.getByText("Register");
    expect(headerComponent).toBeInTheDocument();
  });

  test("rendering for sign up button", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>,
    );
    const signupButtonComponent = screen.getByRole("button", {
      name: "Sign Up",
    });
    expect(signupButtonComponent).toBeInTheDocument();
  });
});
