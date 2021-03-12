import React from "react";
import { useHistory } from "react-router-dom";
import Cases from "../components/process/Cases";

export default function CasesContainer(): JSX.Element {
  const history = useHistory();

  function onCaseSelected(caseID: string) {
    history.push(`${"/case/"}${caseID}`);
  }

  return <Cases onCaseSelected={onCaseSelected} />;
}
