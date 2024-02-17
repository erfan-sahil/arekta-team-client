import React from "react";
import { Header } from "../component/Header";
import { Sidebarr } from "../component/Sidebarr";
import { Outlet } from "react-router-dom";

const componentName = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="flex w-full">
        <div className="w-1/5">
          <Sidebarr></Sidebarr>
        </div>

        <div className="w-4/5 flex justify-center items-center">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default componentName;
