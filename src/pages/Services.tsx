import { FunctionComponent } from "react";
import { CallUs } from "../components/call-us/CallUs";
import { team } from "../services/team";

export const Services: FunctionComponent = () => {
  return (
    <div className="">
      <CallUs employee={team[1]}></CallUs>
    </div>
  );
};
