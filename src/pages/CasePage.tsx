import React, { useState } from "react";
import { Box, Divider } from "@material-ui/core";
import AppBreadcrumbs, { Page } from "../components/AppBreadcrumbs";
import CaseContainer from "../containers/CaseContainer";
import RulesContainer from "../containers/RulesContainer";

export default function CasePage() {
  const [open, setOpen] = useState(false);

  function handleShowRuleDocumentation() {
    setOpen(true);
  }

  function handleHideRuleDocumentation() {
    setOpen(false);
  }

  return (
    <>
      <Box ml={5} mt={1} mr={1}>
        <AppBreadcrumbs page={Page.CasePage} />
      </Box>
      <Box ml={5} mt={1} mr={1}>
        <Divider />
      </Box>
      <CaseContainer onShowRuleDocumentation={handleShowRuleDocumentation} />
      <RulesContainer open={open} onClose={handleHideRuleDocumentation} />
    </>
  );
}
