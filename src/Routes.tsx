import { Router, Route, Switch } from "react-router-dom";
import history from "../src/utils/History";
import HomePage from "./pages/HomePage";
import ProcessPage from "./pages/ProcessPage";
import CasePage from "./pages/CasePage";
import LogViewer from "../src/components/LogViewer";
import PageNotFound from "../src/components/PageNotFound";
import ErrorPage from "../src/components/ErrorPage";

export default function Routes(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={["/", "/ruleau-finance"]} component={HomePage} />

        <Route
          exact
          path={[
            "/process/:processId",
            "/ruleau-finance/process/:processId",
            "/process/:processId/cases",
            "/ruleau-finance/process/:processId/cases",
            "/process/:processId/rules",
            "/ruleau-finance/process/:processId/rules",
            "/process/:processId/rules",
            "/process/:processId/statistics",
            "/ruleau-finance/process/:processId/statistics",
            "/process/:processId/overview",
            "/ruleau-finance/process/:processId/overview",
          ]}
          component={ProcessPage}
        />
        <Route
          exact
          path={[
            "/process/:processId/case/:caseId",
            "/ruleau-finance/process/:processId/case/:caseId",
          ]}
          component={CasePage}
        />
        <Route
          exact
          path={["/log", "/ruleau-finance/log"]}
          component={LogViewer}
        />

        <Route
          exact
          path={["/error", "/ruleau-finance/error"]}
          component={ErrorPage}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
