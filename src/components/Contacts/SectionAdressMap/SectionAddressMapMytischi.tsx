import React, { FunctionComponent } from "react";
import { Address } from "./Address";
import { YandexMap } from "./YandexMap";
import { OpeningHours } from "./OpeningHours";
import { Legal } from "./Legal";
import { SmallHeaderAndInfoBrick } from "./SmallHeaderAndInfoBrick";

const markText =
  "Российская Федерация,\n" +
  "Московская область,\n" +
  "г. Мытищи, ул. Летняя\n" +
  "строение 19, офис 9-18";

export const SectionAddressMapMytischi: FunctionComponent = () => {
  return (
    <section className="container mx-auto my-6 grid w-full grid-cols-1 grid-rows-[auto_auto] gap-3 gap-x-24 px-8 tracking-tighter sm:my-10 sm:gap-y-6 lg:my-20 lg:max-w-[1024px] lg:grid-cols-2 lg:gap-y-10">
      <Address
        city={"мытищи"}
        firstContact={
          <SmallHeaderAndInfoBrick
            email={"fomartemy@gmail.com"}
            telephone={"8-985-557-27-08"}
          />
        }
        secondContact={
          <SmallHeaderAndInfoBrick
            email={"amarkelova_arina@inbox.ru"}
            telephone={"8-915-452-90-61"}
          />
        }
      />
      <div className="aspect-square w-full">
        <YandexMap
          coordinates={"55.832096, 37.629453"}
          whereWeAre={"55.909968, 37.736743"}
          zoom={10}
          clickOnMarkText={markText}
        />
      </div>
      <OpeningHours className={""} />
      <Legal
        legalForm={"ИП"}
        legalBody={"Фомин Артем Александрович"}
        registerNumberType={"ОГРНИП"}
        registerNumber={"320290100020510"}
        TIN={"292203988833"}
      />
    </section>
  );
};
