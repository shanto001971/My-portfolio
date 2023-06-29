import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Components/Home/Home";
import MyProject from "../Components/MyProject/MyProject";

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
        loader: () => fetch('http://localhost:5000/feedback')
      },
    ]
  },
]);