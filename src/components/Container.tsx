import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

export const Container: FunctionComponent = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};
