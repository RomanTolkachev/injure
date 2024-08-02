import { FunctionComponent } from "react";
import { InputCustom } from "./InputCustom";
import { CallUsPhoto } from "./CallUsPhoto";
import { IEmployee } from "../../services/utils/types";

export const CallUs: FunctionComponent<{ employee: IEmployee }> = ({
  employee,
}) => {
  return (
    <div className="flex h-[400px] w-full justify-center gap-3 overflow-hidden md:h-[450px] md:gap-5 lg:h-[550px] lg:gap-12 xl:h-[650px]">
      <div className="my-auto flex max-w-[460px] flex-col items-center">
        <h2 className="text-call-us-header mb-6 font-extrabold text-my-blacker md:mb-8 lg:mb-10 xl:mb-12">
          Контакты
        </h2>
        <span className="text-call-us-span mb-10 font-semibold text-my-blacker first-letter:capitalize md:mb-12 lg:mb-16 xl:mb-20">
          будем рады ответить на ваши вопросы
        </span>
        <form className="flex w-full flex-col gap-2 px-14" action="">
          <InputCustom type="text" placeholder="имя" />
          <InputCustom type="email" placeholder="E-mail" />
          <InputCustom type="tel" placeholder="Номер телефона" />
        </form>
      </div>
      <CallUsPhoto employee={employee} />
    </div>
  );
};
