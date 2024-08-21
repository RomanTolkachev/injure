import React, { FunctionComponent } from "react";
import { CallUs } from "../components/CallUs/CallUs";
import { team } from "../services/team";
import { SectionDescription } from "../components/Header/SectionDescription";
import { SectionAddressMapMytischi } from "../components/Contacts/SectionAdressMap/SectionAddressMapMytischi";
import { SectionAddressMapKhimky } from "../components/Contacts/SectionAdressMap/SectionAddressMapKhimky";

export const Contacts: FunctionComponent = () => {
  return (
    <>
      <SectionDescription
        header="контакты"
        BGImage="/webp/sectionHeader/handShake.png"
        className={"mb-10 2xl:mb-14"}
      />
      <SectionAddressMapMytischi />
      <SectionAddressMapKhimky />
      <CallUs employee={team[3]} />;
    </>
  );
};
