import { FunctionComponent } from "react";
import { CallUs } from "../components/call-us/CallUs";
import { team } from "../services/team";

export const About: FunctionComponent = () => {
  return <CallUs employee={team[2]} />;
};
