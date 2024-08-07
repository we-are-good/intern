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
import GlobalStyle from "./styles/globalStyles";
import Login from "./routes/Login";
import Joinin from "./routes/Joinin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
      },
    },
  });
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <GlobalStyle />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

export default App;
