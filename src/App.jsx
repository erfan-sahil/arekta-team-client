
import { Header } from './component/Header'
import Home from "./component/Home"
import MyPlans from "./component/MyPlans"
import MyCoach from "./component/MyCoach"
import Login from "./component/Login"
import Result from "./component/Result"
import Register from "./component/Register"
import Quiz from "./component/Quiz"
import Main from "./routes/Main"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/quiz",
          element: <Quiz></Quiz>
        },
        {
          path: "/myplans",
          element: <MyPlans></MyPlans>
        },
        {
          path: "/mycoach",
          element: <MyCoach></MyCoach>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element:<Register></Register>
        },
        {
          path: "/register",
          element:<Result></Result>
        },
      ]
    },

  ]);

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
