import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import ProcessPage from "./pages/ProcessPage";
import CasePage from "./pages/CasePage";
import { logInfo } from "../src/utils/Logger";

export default function Routes(): JSX.Element {
  logInfo("Public Url=" + process.env.PUBLIC_URL);
  let baseName = process.env.PUBLIC_URL;

  if (window.location.href.indexOf("github") === -1) {
    baseName = "";
  }

  logInfo("baseName=" + baseName);
  return (
    <BrowserRouter basename={baseName}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ruleau-finance" component={HomePage} />
        <Route exact path="/process/:processId" component={ProcessPage} />
        <Route exact path="/process/:processId/cases" component={ProcessPage} />
        <Route exact path="/process/:processId/rules" component={ProcessPage} />
        <Route
          exact
          path="/process/:processId/statistics"
          component={ProcessPage}
        />
        <Route
          exact
          path="/process/:processId/overview"
          component={ProcessPage}
        />
        <Route
          exact
          path="/process/:processId/statistics"
          component={ProcessPage}
        />

        <Route
          exact
          path="/process/:processId/case/:caseId"
          component={CasePage}
        />
      </Switch>
    </BrowserRouter>
  );
}
