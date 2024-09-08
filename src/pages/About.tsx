import { FunctionComponent } from "react";
import { CallUs } from "../components/CallUs/CallUs";
import { team } from "../services/team";
import { SectionDescription } from "../components/Header/SectionDescription";
import { WeHaveSomethingToSay } from "../components/About/WeHaveSomethingToSay";

export const About: FunctionComponent = () => {
  return (
    <div className={"bg-my-white"}>
      <SectionDescription
        header={"о компании"}
        BGImage="/webp/sectionHeader/about.webp"
        className={"mb-10 2xl:mb-14"}
        imgPosition={"object-bottom"}
      />
      <WeHaveSomethingToSay />
      <CallUs employee={team[2]} />
    </div>
  );
};
