import { useSelector } from "react-redux";
import { RootState } from "../stores";

export default function GetCases(): any {
  const cases = useSelector((reduxStore: RootState) => reduxStore.cases);
  return cases;
}
