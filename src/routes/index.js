import { BrowserRouter, Routes, Route } from "react-router-dom";
import PodcastAppRoutes from "../demos/Podcast/routes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          PodcastAppRoutes.map(({ path, key, component: Component }) => {
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
