import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Events from "./pages/Events";
import AdminEvents from "./pages/AdminEvents";
import AddEvent from "./pages/AddEvent";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EventDetails from "./pages/EventDetails";
import UpdateEvent from "./pages/UpdateEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/event/:eventId",
        element: <EventDetails />,
      },
      {
        path: "/event/update/:eventId",
        element: <UpdateEvent />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-event",
        element: <AddEvent />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <Error />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },

      {
        path: "/admin/users",
        element: <Users />,
      },
      {
        path: "/admin/events",
        element: <AdminEvents />,
      },
      {
        path: "/admin/lists",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen"
