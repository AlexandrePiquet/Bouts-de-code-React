import { Layout } from "./components/Layout";
import { Accueil } from "./pages/Accueil";
import { Page1 } from "./pages/page1";
import { NotFound } from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

export const App = () => {
  //render

  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
