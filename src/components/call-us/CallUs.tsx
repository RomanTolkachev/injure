import { FunctionComponent } from "react";
import { InputCustom } from "./InputCustom";

export const CallUs: FunctionComponent = () => {
  return (
    <div className="flex h-[650px] justify-center gap-12 overflow-hidden">
      <div className="my-auto flex max-w-[460px] flex-col items-center">
        <h2 className="mb-12 text-6xl font-extrabold text-my-blacker">
          Контакты
        </h2>
        <span className="mb-20 text-xl font-semibold text-my-blacker first-letter:capitalize">
          будем рады ответить на ваши вопросы
        </span>
        <form className="flex w-full flex-col gap-2 px-14" action="">
          <InputCustom type="text" placeholder="имя" />
          <InputCustom type="email" placeholder="E-mail" />
          <InputCustom type="tel" placeholder="Номер телефона" />
        </form>
      </div>
      <div className="relative aspect-square h-full">
        <img
          src="/webp/call_lawyer.webp"
          alt="lawyer"
          className="absolute left-1/2 top-0 z-[1] -translate-x-[40%]"
        />
        <svg
          className="absolute -top-1/4 aspect-[3]"
          xmlns="http://www.w3.org/2000/svg"
          height="175%"
        >
          <ellipse
            className="rotate-[-7deg]"
            ry="50%"
            rx="16%"
            id="svg_1"
            cy="45%"
            cx="14.5%"
            strokeWidth="0"
            stroke="#000"
            fill="#4D8892"
          />
          <ellipse
            className="rotate-[-2deg]"
            ry="50%"
            rx="16%"
            id="svg_1"
            cy="53%"
            cx="15.5%"
            strokeWidth="0"
            stroke="#000"
            fill="#CBEBFF"
          />
          <rect width="100%" height="100%" x="17%" y="0" fill="#CBEBFF" />
        </svg>
      </div>
    </div>
  );
};
