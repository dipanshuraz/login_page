import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";
import Login from "../components/pages/Login";

describe("Login", () => {
  test("renders Login component", async () => {
    const history = createMemoryHistory();
    const authSuccess = jest.fn();

    const { queryByTestId } = render(
      <Router history={history}>
        <Login authSuccess={authSuccess} />
      </Router>,
    );

    fireEvent.change(queryByTestId("email"), {
      target: { value: "demo@demo.com" },
    }); // invoke handleChange
    fireEvent.change(queryByTestId("password"), { target: { value: "demo" } }); // invoke handleChange
    fireEvent.click(screen.getByText("Sign In"));
    expect(authSuccess).toBeCalled();
  });
});
