import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "./Home";
import NotFound from "./NotFound";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarProvider } from "notistack";
import Products from "./Products";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="font-sans">
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3}>
          <Navbar />
          <Routes>
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/c/:category" element={<Products />} />
          </Routes>
          <Footer />
        </SnackbarProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
