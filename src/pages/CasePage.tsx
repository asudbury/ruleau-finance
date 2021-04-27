import { Box, Divider } from "@material-ui/core";
import React from "react";
import AppBreadcrumbs, { Page } from "../components/AppBreadcrumbs";
import CaseContainer from "../containers/CaseContainer";

export default function CasePage() {
  return (
    <>
      <Box ml={5} mt={1} mr={1}>
        <AppBreadcrumbs page={Page.CasePage} />
      </Box>
      <Box ml={5} mt={1} mr={1}>
        <Divider />
      </Box>
      <CaseContainer />
    </>
  );
}
