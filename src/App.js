import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/home/Home";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Notfound from "./pages/notFound/Notfound";
import Login from "./pages/login/Login.jsx";
import List from "./pages/list/List.jsx";
import Single from "./pages/single/Single.jsx";
import Coupon from "./pages/coupon/Coupon";
import Category from "./pages/category/Category";
import Delivery from "./pages/delivery/Delivery";
import New from "./pages/new/New.jsx";
import { userInput } from "./Formsource";
import "./style/dark.scss";
import { useState } from "react";
import EditList from "./pages/list/EditList";
import AddList from "./pages/list/AddList";
import ListAdd from "./pages/list/ListAdd";

function App() {
  const [dark, setDark] = useState(false);

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home setDark={setDark} dark={dark} />} />
        <Route path="login" element={<Login setDark={setDark} dark={dark} />} />
        <Route
          path="categories"
          element={<Category setDark={setDark} dark={dark} />}
        />
        <Route
          path="coupons"
          element={<Coupon setDark={setDark} dark={dark} />}
        />
        <Route
          path="delivery"
          element={<Delivery setDark={setDark} dark={dark} />}
        />
        <Route path="users">
          <Route index element={<List setDark={setDark} dark={dark} />} />
          <Route
            path=":userId"
            element={<Single setDark={setDark} dark={dark} />}
          />
          <Route
            path="new"
            element={
              <New
                inputs={userInput}
                title="Update Profile"
                setDark={setDark}
                dark={dark}
              />
            }
          />
        </Route>
        <Route path="products">
          <Route
            path="/products/edit"
            element={<EditList setDark={setDark} dark={dark} />}
          />
          <Route
            path="/products/add"
            element={<ListAdd setDark={setDark} dark={dark} />}
          />
          <Route index element={<List setDark={setDark} dark={dark} />} />
          <Route
            path=":productId"
            element={<Single setDark={setDark} dark={dark} />}
          />
          <Route path="new" element={<New setDark={setDark} dark={dark} />} />
        </Route>
        <Route path="*" element={<Notfound setDark={setDark} dark={dark} />} />
      </Route>
      //
    )
  );
  return (
    <div className={dark ? "app dark" : "app"}>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
