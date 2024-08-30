import { FunctionComponent, useState } from "react";
import { CallUs } from "../components/CallUs/CallUs";
import { team } from "../services/team";
import { SectionDescription } from "../components/Header/SectionDescription";
import { ServiceCardsLayout } from "../components/Services/ServiceCardsLayout";
import { motion } from "framer-motion";

export const Services: FunctionComponent = () => {
  const [currentType, setCurrentType] = useState<"business" | "physical">(
    "physical",
  );
  return (
    <div className="">
      <SectionDescription
        header="услуги"
        BGImage="/webp/sectionHeader/handShake.png"
        className={"mb-10 2xl:mb-14"}
      />
      <nav className={"pt-5"}>
        <motion.ul
          className={
            "border-my-gray-light mx-auto grid w-fit grid-cols-2 gap-2 overflow-hidden rounded-3xl border p-1 text-sm font-bold sm:text-xl md:text-3xl [&>*]:first-letter:capitalize"
          }
        >
          <motion.li
            animate={{
              boxShadow:
                currentType === "physical"
                  ? "-4px 3px 7px 3px rgba(34, 60, 80, 0.2)"
                  : "-4px 3px 7px 3px rgba(34, 60, 80, 0)",
              color: currentType === "physical" ? "#211C1C" : "#B7B7B7",
            }}
            className={"text-nowrap rounded-2xl p-4 text-center"}
            onClick={() => setCurrentType("physical")}
          >
            частным клиентам
          </motion.li>
          <motion.li
            animate={{
              boxShadow:
                currentType === "business"
                  ? "-4px 3px 7px 3px rgba(34, 60, 80, 0.2)"
                  : "-4px 3px 7px 3px rgba(34, 60, 80, 0)",
              color: currentType === "business" ? "#211C1C" : "#B7B7B7",
            }}
            className={"text-nowrap rounded-2xl p-4 text-center"}
            onClick={() => setCurrentType("business")}
          >
            бизнесу
          </motion.li>
        </motion.ul>
      </nav>
      <div>
        <ServiceCardsLayout currentType={currentType} />
      </div>
      <CallUs employee={team[1]}></CallUs>
    </div>
  );
};
