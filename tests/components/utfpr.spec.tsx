import React from "react";
import { render } from "@testing-library/react";

import { UTFPRLogo }from "../../src/components/utfpr";

function renderUTFPRLogo(){
  return render(<UTFPRLogo/>)
}

describe("UTFPRLogo", () => {
  test("should display a utfpr logo", async () => {
    const { findByTestId } = renderUTFPRLogo();
    const utfprLogo = await findByTestId("utfpr-logo");
    expect(utfprLogo).not.toBeNull();
  });
});