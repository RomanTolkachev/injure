import { FunctionComponent } from "react";
import { CallUs } from "../components/CallUs/CallUs";
import { team } from "../services/team";
import { SectionDescription } from "../components/Header/SectionDescription";

export const About: FunctionComponent = () => {
  return (
    <>
      <SectionDescription
        header={"о компании"}
        BGImage="/webp/sectionHeader/about.webp"
        className={"mb-10 2xl:mb-14"}
        imgPosition={"object-bottom"}
      />
      <CallUs employee={team[2]} />;
    </>
  );
};
