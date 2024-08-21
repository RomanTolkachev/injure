import { FunctionComponent } from "react";
import { ServiceCard } from "./ServiceCard";
import { services } from "../../services";

export const ServiceCardsLayout: FunctionComponent = () => {
  const filtered = services.filter((item) => item.type === "physical");

  return (
    <div
      className={
        "grid-container mx-auto grid max-w-[1024px] grid-flow-dense auto-rows-fr grid-cols-3 gap-4"
      }
    >
      {filtered.map((item, key) => {
        return (
          <ServiceCard
            serviceData={item}
            className={`h-full w-full ${item.size}`}
          />
        );
      })}
    </div>
  );
};
