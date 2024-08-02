import { FunctionComponent } from "react";
import { Hero } from "../components/Main/Hero";
import { CallUs } from "../components/call-us/CallUs";

export const Main: FunctionComponent = () => {
  return (
    <>
      <Hero />
      <CallUs />
    </>
  );
};
