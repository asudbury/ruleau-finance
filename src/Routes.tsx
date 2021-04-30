import { Router, Route, Switch } from "react-router-dom";
import history from "../src/utils/History";
import HomePage from "../src/pages/HomePage";
import ProcessPage from "./pages/ProcessPage";
import CasePage from "./pages/CasePage";
import LogViewer from "../src/components/LogViewer";

export default function Routes(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ruleau-finance" component={HomePage} />
        <Route
          exact
          path="/ruleau-finance/process/:processId"
          component={ProcessPage}
        />
        <Route exact path="/process/:processId" component={ProcessPage} />
        <Route
          exact
          path="/ruleau-finance/process/:processId"
          component={ProcessPage}
        />
        <Route exact path="/process/:processId/cases" component={ProcessPage} />
        <Route
          exact
          path="/ruleau-finance/process/:processId/cases"
          component={ProcessPage}
        />
        <Route exact path="/process/:processId/rules" component={ProcessPage} />
        <Route
          exact
          path="/ruleau-finance/process/:processId/rules"
          component={ProcessPage}
        />
        <Route
          exact
          path="/process/:processId/statistics"
          component={ProcessPage}
        />
        <Route
          exact
          path="/ruleau-finance/process/:processId/statistics"
          component={ProcessPage}
        />
        <Route
          exact
          path="/process/:processId/overview"
          component={ProcessPage}
        />
        <Route
          exact
          path="/ruleau-finance/process/:processId/overview"
          component={ProcessPage}
        />
        <Route
          exact
          path="/process/:processId/case/:caseId"
          component={CasePage}
        />
        <Route
          exact
          path="/ruleau-finance/process/:processId/case/:caseId"
          component={CasePage}
        />
        <Route exact path="/log" component={LogViewer} />
        <Route exact path="/ruleau-finance/log" component={LogViewer} />
      </Switch>
    </Router>
  );
}
