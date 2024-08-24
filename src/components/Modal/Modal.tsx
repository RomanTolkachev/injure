import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { BurgerButton } from "../buttons/BurgerButton";

interface IModalProps {
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FunctionComponent<IModalProps> = (props: IModalProps) => {
  const innerRef: React.RefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (innerRef.current && !innerRef.current.contains(e.target as Node)) {
        props.closeModal();
      }
    }

    function handleClickEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        props.closeModal();
      }
    }

    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("keydown", handleClickEscape, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("keydown", handleClickEscape, true);
    };
  }, [props]);

  return createPortal(
    <div
      className={
        "fixed left-0 top-0 z-[11] flex h-full w-full items-center justify-center bg-black opacity-60"
      }
    >
      <div className={"relative h-[500px] w-[700px]"} ref={innerRef}>
        {props.children}
        <div
          className={"absolute right-[40px] top-[40px]"}
          onClick={props.closeModal}
        >
          <BurgerButton burgerOpen={true} />
        </div>
      </div>
    </div>,
    document.getElementById("portal") as HTMLElement,
  );
};

export default Modal;
