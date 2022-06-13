import React from "react";
import IErrorPage from "./errorPage";
import IPage from "./page";

export default interface IRoute {
    path: string;
    permissions: string[];
    component: React.FC<IPage> | React.FC<IErrorPage>;
    params: any;
}
