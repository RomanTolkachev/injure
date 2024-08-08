import { FunctionComponent } from "react";
import { team } from "../services/team";
import { EmployeeCard } from "../components/Team/EmployeeCard";
import { IEmployee } from "../services/utils/types";

export const Team: FunctionComponent = () => {
  return (
    <section className="container w-screen py-6 md:py-16">
      <ul className="">
        {team.map((person: IEmployee, key) => {
          return (
            <li key={key} className="[&>li]: mb-10">
              <EmployeeCard person={person} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
