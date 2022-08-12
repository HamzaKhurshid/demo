import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const AppRoutes = () => {
  const Podcast = lazy(() => import('../demos/Podcast'));
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/*" element={ <Navigate to={'/podcast'} /> } />
        <Route path="/podcast/*" element={ <Suspense fallback={'Loading....'}><Podcast/></Suspense> } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
