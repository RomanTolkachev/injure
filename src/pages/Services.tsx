import { FunctionComponent } from "react";
import { CallUs } from "../components/CallUs/CallUs";
import { team } from "../services/team";
import { SectionDescription } from "../components/Header/SectionDescription";
import { ServiceCardsLayout } from "../components/Services/ServiceCardsLayout";

export const Services: FunctionComponent = () => {
  return (
    <div className="">
      <SectionDescription
        header="услуги"
        BGImage="/webp/sectionHeader/handShake.png"
        className={"mb-10 2xl:mb-14"}
      />
      <div>
        <ServiceCardsLayout />
      </div>
      <CallUs employee={team[1]}></CallUs>
    </div>
  );
};
