import { RouteObject } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import SinglePage from "../pages/singlePage/SinglePage";
import Layout from "../components/layout/Layout";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/:code",
                element: <SinglePage />,
            },
        ],
    },
];

export default routes;
