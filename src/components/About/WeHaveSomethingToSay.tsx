import { motion } from "framer-motion";
import { FunctionComponent, useRef } from "react";
import { team } from "../../services/team";

const parentVariants = {
  initial: { translateX: 0 },
  end: { translateX: 0 },
};

export const WeHaveSomethingToSay: FunctionComponent = () => {
  return (
    <div className={"h-44 w-full"}>
      <motion.div className={"relative mx-auto h-full w-1"}>
        {team.map((item, key) => {
          return (
            <motion.div
              key={key}
              className={`absolute right-1/2 aspect-square h-full overflow-hidden rounded-full`}
              style={{
                transform: `translateX(calc(${(team.length / 2) * -50 + (team.length / 2) * 5}% + ${key * 95}%))`,
                zIndex: `${team.length - key}`,
              }}
            >
              <img src={item.photoTeam} alt="image3" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
