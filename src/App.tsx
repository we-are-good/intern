import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/Home";
import Mypage from "./routes/Mypage";
import NavBar from "./routes/NavBar";
import ProtectedRouter from "./routes/ProtectedRouter";
import GlobalStyle from "./styles/GlobalStyles";
import Login from "./routes/Login";
import Joinin from "./routes/Joinin";

function App() {
  const router = createBrowserRouter(
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
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}

export default App;
