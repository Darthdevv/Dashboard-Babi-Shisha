import { createBrowserRouter } from "react-router-dom";
import TestBox from "../HooK/TestBox";
import {
    AboutBox,
    AdsAEditBox,
    AdsAddBox,
    AdsBox,
    ContactBox,
    ProductEdit,
    ProductNew,
    ProfileBox,
    UserAddBox,
} from "../components";
import CategoriesEdit from "../components/CategoriesEdit/CategoriesEdit";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Categories from "./Pages/Categories";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import UserDetail from "./Pages/UserDetail";
import Users from "./Pages/Users";
export let Router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <div>errorElement</div>,
    },
    {
        path: "/admin",
        element: <Layout />,
        errorElement: <div>errorElement</div>,
        children: [
            { index: true, element: <Dashboard /> },

            {
                path: "contact",
                element: (
                    <TestBox type="admin">
                        <ContactBox />
                    </TestBox>
                ),
            },
            {
                path: "about",
                element: (
                    <TestBox type="admin">
                        <AboutBox />
                    </TestBox>
                ),
            },
            {
                path: "ads",
                element: (
                    <TestBox type="admin">
                        <AdsBox />
                    </TestBox>
                ),
            },
            {
                path: "ads/add",
                element: (
                    <TestBox type="admin">
                        <AdsAddBox />
                    </TestBox>
                ),
            },
            {
                path: "ads/edit/:editAds",
                element: (
                    <TestBox type="admin">
                        <AdsAEditBox />
                    </TestBox>
                ),
            },
            {
                path: "users",
                element: (
                    <TestBox type="admin">
                        <Users />
                    </TestBox>
                ),
            },
            {
                path: "users/detail/:user_id",
                element: (
                    <TestBox type="admin">
                        <UserDetail />
                    </TestBox>
                ),
            },
            {
                path: "users/add/:user_add",
                element: (
                    <TestBox type="admin">
                        <UserAddBox />
                    </TestBox>
                ),
            },
            {
                path: "categories",

                element: (
                    <TestBox type="agency">
                        <Categories />
                    </TestBox>
                ),
            },
            {
                path: "categories/edit/:editCategories",
                element: (
                    <TestBox type="agency">
                        <CategoriesEdit />
                    </TestBox>
                ),
            },
            {
                path: "product",

                element: (
                    <TestBox type="agency">
                        <Product />
                    </TestBox>
                ),
            },
            {
                path: "product/add",
                element: (
                    <TestBox type="agency">
                        <ProductNew />
                    </TestBox>
                ),
            },
            {
                path: "product/edit/:productEdit",
                element: (
                    <TestBox type="agency">
                        <ProductEdit />
                    </TestBox>
                ),
            },
            {
                path: "profile",
                element: (
                    <TestBox type="agency">
                        <ProfileBox />
                    </TestBox>
                ),
            },

            {
                // path: "admin",
                // element: <Admin />,
                // loader: async (e) => {
                //   if (localStorage.AccessToken) {
                //   }
                //   return e
                // },
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
