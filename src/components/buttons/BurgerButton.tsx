import {
  Dispatch,
  FunctionComponent,
  MouseEventHandler,
  SetStateAction,
  useCallback,
} from "react";

interface IBurgerButtonProps {
  setBurgerOpen?: Dispatch<SetStateAction<boolean>>;
  burgerOpen: boolean;
}

export const BurgerButton: FunctionComponent<IBurgerButtonProps> = ({
  setBurgerOpen,
  burgerOpen,
}) => {
  const handleToggleBurger: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      return setBurgerOpen!(!burgerOpen);
    }, [burgerOpen, setBurgerOpen]);
  return (
    <button
      className="fixed right-0 top-0 z-[3] h-[79px] w-[79px] overflow-hidden p-[10px] text-center lg:hidden"
      onClick={handleToggleBurger}
    >
      <span
        style={burgerOpen ? { opacity: 0 } : undefined}
        className="absolute left-[10px] top-[25px] h-[2.5px] w-[42px] bg-white duration-500"
      ></span>
      <span
        style={burgerOpen ? { transform: "rotate(45deg)" } : undefined}
        className="absolute left-[10px] top-[39px] h-[2.5px] w-[42px] bg-white duration-500"
      ></span>
      <span
        style={burgerOpen ? { transform: "rotate(-45deg)" } : undefined}
        className="absolute left-[10px] top-[39px] h-[2.5px] w-[42px] bg-white duration-500"
      ></span>
      <span
        style={burgerOpen ? { opacity: 0 } : undefined}
        className="absolute left-[10px] top-[53px] h-[2.5px] w-[42px] bg-white duration-500"
      ></span>
    </button>
  );
};
