import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/shop";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import About from "../components/About";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/shop',
            element: <Shop/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
        {
            path: '/about',
            element: <About/>
        }
      ]
    },
  ]);

  export default router