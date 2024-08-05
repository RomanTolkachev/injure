import { FunctionComponent } from "react";
import { InputCustom } from "./InputCustom";
import { CallUsPhoto } from "./CallUsPhoto";
import { IEmployee } from "../../services/utils/types";

export const CallUs: FunctionComponent<{ employee: IEmployee }> = ({
  employee,
}) => {
  return (
    <div className="mx-auto max-w-screen-xl p-16">
      <div className="flex h-[400px] w-full justify-center gap-3 overflow-hidden rounded-2xl border-[#6A6A6A] shadow-2xl md:h-[450px] md:gap-5 lg:h-[550px] lg:gap-12 xl:h-[650px]">
        <div className="my-auto flex max-w-[460px] flex-col items-center">
          <h2 className="mb-6 text-call-us-header font-extrabold text-my-blacker md:mb-8 lg:mb-10 xl:mb-12">
            Контакты
          </h2>
          <span className="mb-10 text-call-us-span font-semibold text-my-blacker first-letter:capitalize md:mb-12 lg:mb-16 xl:mb-20">
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
    </div>
  );
};
