import { FunctionComponent } from "react";
import { InputCustom } from "./InputCustom";
import { CallUsPhoto } from "./CallUsPhoto";
import { IEmployee } from "../../services/utils/types";
import { ButtonToVideo } from "../buttons/ButtonToVideo";
import { ButtonCallUs } from "../buttons/ButtonCallUs";

export const CallUs: FunctionComponent<{ employee: IEmployee }> = ({
  employee,
}) => {
  return (
    <>
      <div className="mx-auto mb-16 max-w-screen-xl px-16 max-md:hidden">
        <div className="flex h-[370px] w-full justify-center overflow-hidden rounded-2xl border-[#6A6A6A] shadow-2xl md:h-[370px] lg:h-[550px] lg:justify-around xl:h-[650px]">
          <div className="my-auto flex h-full max-h-[350px] max-w-[460px] flex-col items-center justify-around px-5 py-10 lg:max-h-[400px] xl:max-h-[450px]">
            <h2 className="justify-around font-extrabold text-my-blacker md:text-3xl lg:text-5xl xl:text-6xl">
              Контакты
            </h2>
            <span className="text-nowrap font-semibold text-my-blacker first-letter:capitalize max-[880px]:hidden md:text-sm lg:text-base xl:text-xl">
              будем рады ответить на ваши вопросы
            </span>
            <form
              className="flex w-full flex-col gap-2 px-5 xl:px-14"
              action=""
            >
              <InputCustom type="text" placeholder="имя" />
              <InputCustom type="email" placeholder="E-mail" />
              <InputCustom type="tel" placeholder="Номер телефона" />
            </form>
          </div>
          <CallUsPhoto employee={employee} />
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[767px] overflow-hidden md:hidden">
        <h2 className="text-call-us-header-mobile mx-auto mb-2 w-fit font-bold tracking-tight text-[#399DFF]">
          Остались вопросы?
        </h2>
        <span className="text-call-us-span-mobile mb-5 block text-center font-semibold text-my-deep-gray">
          Оставьте заявку и мы ответим Вам.
        </span>
        <div className="relative left-1/2 mx-auto aspect-[2] h-[600px] -translate-x-1/2 overflow-hidden">
          <img
            src={employee.photoCallUs}
            alt="lawyer"
            className="absolute left-1/2 top-0 z-[1] h-full -translate-x-1/2"
          />
          <svg
            className="absolute w-full"
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
          >
            <ellipse
              className="rotate-[-0deg]"
              ry="70%"
              rx="31%"
              id="svg_1"
              cy="77%"
              cx="61%"
              strokeWidth="0"
              stroke="#000"
              fill={employee.colourAccent}
            />
            <ellipse
              className="rotate-[3deg]"
              ry="67%"
              rx="31%"
              id="svg_1"
              cy="81%"
              cx="65%"
              strokeWidth="0"
              stroke="#000"
              fill={employee.colourMain}
            />
            {/*<rect*/}
            {/*  width="100%"*/}
            {/*  height="100%"*/}
            {/*  x="17%"*/}
            {/*  y="0"*/}
            {/*  fill={employee.colourMain}*/}
            {/*/>*/}
          </svg>
        </div>
        <div className="absolute left-1/2 top-0 z-[4] flex h-full w-full max-w-[480px] -translate-x-1/2 items-end px-10 pb-10">
          <ButtonCallUs>оставить заявку</ButtonCallUs>
        </div>
      </div>
    </>
  );
};
