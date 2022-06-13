import IRoute from "../interfaces/route";
// @ts-ignore
import ErrorPage from "../pages/ErrorPage/ErrorPage.tsx";
// @ts-ignore
import HomePage from "../pages/HomePage/HomePage.tsx";



const routes: IRoute[] = [
    { path: "/", permissions: null!, component: HomePage, params: null! },
    { path: "*", permissions: null!, component: ErrorPage, params: { code: "404", message: "Page not found" } },
]


export default routes;
