import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Components/Home/Home";
import MyProject from "../Components/MyProject/MyProject";
import LogIn from "../Components/Login/LogIn";
import SingUp from "../Components/SingUp/SingUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/myProject',
        element: <MyProject />,
        loader: () => fetch('https://my-portfolio-server-kohl.vercel.app/feedback')
      },
      {
        path: '/login',
        element: <LogIn/>
      },
      {
        path: '/singUp',
        element: <SingUp/>
      },
    ]
  },
]);