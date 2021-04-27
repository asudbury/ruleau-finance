import log from "loglevel";

export default function useUrlManager() {
  let processIndex = 2;
  let caseIndex = 4;

  log.setLevel("debug");

  const publicUrl = process.env.PUBLIC_URL;
  let processName = "";
  let formattedProcessName = "";
  let caseName = "";

  log.debug("publicUrl=" + publicUrl);

  if (window.location.pathname.indexOf("process") > -1) {
    const segments = window.location.pathname.split("/");

    if (segments[processIndex] === "process") {
      processIndex = 3;
      caseIndex = 5;
    }

    processName = segments[processIndex];

    log.debug("processName=" + processName);

    formattedProcessName = segments[processIndex].replace(
      new RegExp("-", "g"),
      " "
    );

    log.debug("formattedProcessName=" + formattedProcessName);

    caseName = segments[caseIndex];

    log.debug("caseName=" + caseName);
  }

  return [publicUrl, processName, formattedProcessName, caseName];
}
