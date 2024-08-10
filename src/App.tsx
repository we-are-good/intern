import { ErrorBoundary } from "@sentry/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router-dom";
import { queryClient, router } from "./routes/Routes";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <CookiesProvider>
        <ErrorBoundary fallback={<p>something went wrong</p>}>
          <GlobalStyle />
          <ReactQueryDevtools initialIsOpen={true} />
        </ErrorBoundary>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
