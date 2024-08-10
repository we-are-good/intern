import { QueryClient } from "@tanstack/react-query";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProtectedRouter from "../components/ProtectedRouter";
import NavBar from "../service/NavBar";
import Home from "./Home";
import Mypage from "./Mypage";
import Login from "./Login";
import Joinin from "./Joinin";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
    },
  },
});

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ProtectedRouter />}>
        <Route path="" element={<NavBar />}>
          <Route path="" element={<Home />} />
          <Route path="mypage/:id" element={<Mypage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="joinin" element={<Joinin />} />
    </>
  )
);
