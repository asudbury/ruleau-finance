import React from "react";
import { Grid } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

interface CaseRuleDependenciesProps {
  dependencies: any;
}

export default function CaseRuleDependencies({
  dependencies,
}: CaseRuleDependenciesProps): JSX.Element {
  function getDependencies(runIf : boolean): JSX.Element {
    const items = dependencies.filter((item : any) => item.run_if === runIf);

    if (items.length > 0) {
      return (
        <div>
          {items.map((item) => (
            <span
              key={item.rule}
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <SortIcon color="primary" />
              {item.rule}
            </span>
          ))}
        </div>
      );
    }

    return <div>None</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        Depends On
      </Grid>
      <Grid item xs={11}>
        {getDependencies(false)}
      </Grid>
      <Grid item xs={1}>
        Run If
      </Grid>
      <Grid item xs={11}>
        {getDependencies(true)}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}
