import { FunctionComponent } from "react";

export const BurgerButton: FunctionComponent = () => {
  return (
    <button className="overflow-hidden h-[79px] lg:hidden fixed top-0 right-0 z-[3] p-[10px] w-[79px] text-center">
      <span
        style={{ transform: "translateX(90px)" }}
        className="duration-500 w-[42px] h-[2.5px] top-[25px] left-[10px] bg-white absolute"
      ></span>
      <span
        style={{ transform: "rotate(45deg)" }}
        className="duration-500 w-[42px] h-[2.5px] top-[39px] left-[10px] bg-white absolute"
      ></span>
      <span
        style={{ transform: "rotate(-45deg)" }}
        className="duration-500 w-[42px] h-[2.5px] top-[39px] left-[10px] bg-white absolute"
      ></span>
      <span
        style={{ transform: "translateX(-90px)" }}
        className="duration-500 w-[42px] h-[2.5px] top-[25px] left-[10px] bg-white absolute translate-y-[28px]"
      ></span>
    </button>
  );
};
