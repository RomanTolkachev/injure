import { FunctionComponent } from "react";
import { CallUs } from "../components/CallUs/CallUs";
import { team } from "../services/team";
import { SectionDescription } from "../components/Header/SectionDescription";
import { ServiceCardsLayout } from "../components/Services/ServiceCardsLayout";

// <div>
//   {services.map((item) => {
//     return (
//       <>
//         <h4>{item.title}</h4>
//         <div
//           className={"mx-auto max-w-screen-md [&_p]:indent-10"}
//           dangerouslySetInnerHTML={{ __html: item.content }}
//         ></div>
//       </>
//     );
//   })}
// </div>

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
