import React from "react";
import { render } from "@testing-library/react";

import { Code, ICodeProps } from "../../src/components/Code";

function renderCode(props: Partial<ICodeProps> = {}){
  const defaultProps = {
    text: "code invite"
  }

  return render(<Code {...defaultProps}/>)
}

describe("Code", () => {
  test("should display a code with a invite code", async () => {
    const { getByText } = renderCode();
    const getInvite = getByText('code invite');
    
    expect(getInvite).toBeInTheDocument();
  });
});