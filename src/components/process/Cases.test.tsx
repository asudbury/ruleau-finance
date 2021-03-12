import React from "react";
import { render } from "@testing-library/react";
import Cases from "./Cases";

test("Cases", () => {
  const { getByTestId } = render(<Cases />);

  const casesTableDiv = getByTestId("casesTableDiv");

  expect(casesTableDiv).toBeInTheDocument();
});
