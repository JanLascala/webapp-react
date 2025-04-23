import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./defaultlayout/DefaultLayout";
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import { LoaderProvider } from "./Context/LoaderContext";
import Loader from "./components/Loader";


function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <Loader />
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" Component={HomePage} />
            <Route path="/:id" Component={MovieDetail} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoaderProvider>
  );
}

export default App;
