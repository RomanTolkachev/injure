import { FunctionComponent } from "react";
import { CallUs } from "../components/call-us/CallUs";
import { team } from "../services/images";

export const Services: FunctionComponent = () => {
  return (
    <div className="">
      <CallUs employee={team.alexandr}></CallUs>
    </div>
  );
};
