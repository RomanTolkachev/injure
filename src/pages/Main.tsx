import { FunctionComponent } from "react";
import { Hero } from "../components/Main/Hero";
import { CallUs } from "../components/call-us/CallUs";
import { team } from "../services/images";

export const Main: FunctionComponent = () => {
  return (
    <>
      <Hero />
      <CallUs employee={team.artem} />
    </>
  );
};
