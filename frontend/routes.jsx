// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import CryptoCoins from "./pages/cryptocoins/CryptoCoins";
import Coin from "./pages/coin/Coin";
import { FavoriteCoins } from "./pages/favoritecoins/FavoriteCoins";
import Logout from "./components/Logout";
import Landing from "./pages/landing/Landing";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import ResetPassword from "./pages/forgotpassword/ResetPassword";
import { ThemeProvider } from "./components/ThemeContext";

export const router = createBrowserRouter(
  createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

    // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        {/* <Route path= "/" element={<Home />} /> */}
        <Route path="/single/:theId" element={<Single />} />{" "}
        {/* Dynamic route for single items */}
        <Route path="/demo" element={<Demo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<CryptoCoins />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/favoritecoins" element={<FavoriteCoins />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Route>
  )
);
