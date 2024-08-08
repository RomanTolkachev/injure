import { FunctionComponent } from "react";
import { CallUs } from "../components/call-us/CallUs";
import { team } from "../services/team";

export const Contacts: FunctionComponent = () => {
  return <CallUs employee={team[3]} />;
};
