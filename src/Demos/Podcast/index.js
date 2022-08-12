import { lazy, Suspense } from "react"
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom"

const Podcast = () => {
  const Login = lazy(() => import('./modules/Login'));
  const Onboarding = lazy(() => import('./modules/Onboarding'));
  return(
    <Routes>
      <Route index path='/' element={ <Navigate to={'/podcast/login'} /> } />
      <Route path='/login' element={ <Suspense fallback={'Loading....'}><Login/></Suspense> } />
      <Route path='/new' element={ <Suspense fallback={'Loading....'}><Onboarding/></Suspense> } />
    </Routes>
  )
}

export default Podcast