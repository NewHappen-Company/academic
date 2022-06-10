import React from "react";
import { render } from "@testing-library/react";

import { Form }from "../../src/components/Form";

function renderForm(){
  return render(<Form/>)
}

describe("Form", () => {
  test("should display a form", async () => {
    const { findByTestId } = renderForm();
    const form = await findByTestId("form-default");
    expect(form).not.toBeNull();
  });
});