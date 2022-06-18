import IRoute from "../interfaces/route";
// @ts-ignore
import ErrorPage from "../pages/ErrorPage/ErrorPage.tsx";
// @ts-ignore
import HomePage from "../pages/HomePage/HomePage.tsx";
// @ts-ignore
import LoginPage from "../pages/Login/Login.tsx";
// @ts-ignore
import SignupPage from "../pages/Signup/Signup.tsx";
// @ts-ignore
import AccountPage from "../pages/Account/Account.tsx";



const routes: IRoute[] = [
    { path: "/", permissions: null!, component: HomePage, params: null! },
    { path: "/login", permissions: null!, component: LoginPage, params: null! },
    { path: "/signup", permissions: null!, component: SignupPage, params: null! },
    { path: "/account", permissions: null!, component: AccountPage, params: null! },
    { path: "*", permissions: null!, component: ErrorPage, params: { code: "404", message: "Page not found" } },
]


export default routes;
