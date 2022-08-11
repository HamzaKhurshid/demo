import { BrowserRouter, Routes, Route } from "react-router-dom";
import podcastAppRoutes from "../demos/Podcast/routes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          podcastAppRoutes.map(({ path, key, component: Component }) => {
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
