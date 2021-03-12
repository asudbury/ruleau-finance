import { useSelector } from "react-redux";
import { RootState } from "../services/stores";

export default function IsUserLoggedIn(): boolean {

  const userData = useSelector((reduxStore: RootState) => reduxStore.user);
  return userData.payload.username;
}
