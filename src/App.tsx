import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
