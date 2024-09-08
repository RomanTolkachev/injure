import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { team } from "../../services/team";

const parentVariants = {
  start: {},
  end: {
    transition: {
      duration: 0.7,
      delayChildren: 0.2,
    },
  },
};

const childrenVariants = {
  start: {
    right: "40%",
  },
  end: (key: number) => ({
    translateX: `calc(${(team.length / 2) * -50 + (team.length / 2) * 5}% + ${key * 95}%)`,
    right: "50%",
    transition: {
      duration: 0.8,
    },
  }),
};

export const WeHaveSomethingToSay: FunctionComponent = () => {
  return (
    <div className={"mx-auto w-full max-w-screen-lg px-16"}>
      <div className={"rounded-2xl bg-white py-16"}>
        <motion.div
          className={"relative mx-auto mb-12 h-44 w-full"}
          variants={parentVariants}
          initial="start"
          animate="end"
        >
          {team.map((item, key) => {
            return (
              <motion.div
                key={key}
                custom={key}
                className={`absolute top-0 aspect-square h-full overflow-hidden rounded-full`}
                variants={childrenVariants}
                style={{ zIndex: `${team.length - key}` }}
              >
                <img src={item.photoTeam} alt="image3" />
              </motion.div>
            );
          })}
        </motion.div>
        <h3
          className={
            "mx-auto mb-8 w-fit text-4xl font-bold first-letter:capitalize"
          }
        >
          нам есть что сказать
        </h3>
        <p className={"mx-auto w-fit max-w-[500px] text-center"}>
          Наша цель - защита прав и интересов клиентов и предоставление
          высококачественных услуг благодаря честному и законному подходу к
          бизнесу.
        </p>
      </div>
    </div>
  );
};
