import { FunctionComponent } from "react";
import { ButtonToVideo } from "../buttons/ButtonToVideo";

export const Hero: FunctionComponent = () => {
  return (
    <div className="my-gradient h-[calc(100svh-79px)] min-h-[600px] w-full overflow-hidden">
      <div className="container relative h-full w-full bg-hero bg-[length:auto_100%] bg-center bg-no-repeat lg:bg-right">
        <div className="hero-mask absolute left-0 z-[1] h-[calc(100svh-79px)] min-h-[600px] w-full opacity-60 sm:hidden"></div>
        <div className="absolute top-0 z-[2] flex h-full items-center justify-center max-sm:right-1/2 max-sm:translate-x-1/2 sm:pl-4 md:pl-6 xl:pl-20">
          <div className="flex h-full max-w-[400px] flex-col justify-center tracking-tight max-sm:py-16 md:max-w-[480px] xl:max-w-[680px]">
            <h1 className="mb-4 px-4 text-hero-main-small-mobile font-black uppercase text-white max-sm:mt-auto sm:px-0 sm:text-hero-main">
              нам
              <br /> доверяют
              <br /> по праву
            </h1>
            <p className="mb-10 px-4 text-hero-legend text-white sm:px-0">
              Мы - юридическая компания «In Jure», специализирующаяся на
              правовом сопровождении бизнеса и на оказании помощи физическим
              лицам во всех регионах России.
            </p>
            <div className="w-fit max-sm:mx-auto max-sm:mt-auto max-sm:w-full">
              <ButtonToVideo>смотреть видео</ButtonToVideo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
