import { TestProcesses } from "../../testData/TestProcesses";

export default function GetProcessSelector(): any {
  return {
    meta: { pending: false },
    payload: TestProcesses,
    error: false,
  };
}
