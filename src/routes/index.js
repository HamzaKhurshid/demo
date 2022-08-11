import { BrowserRouter, Routes, Route } from "react-router-dom";
import PodcastRoutes from "../demos/Podcast/routes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          PodcastRoutes.map(({ path, key, component: Component }) => {
            return (
              <Route path={path} key={key} element={Component} />
            );
          })
        }
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
