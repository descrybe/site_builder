
import { createBrowserRouter } from "react-router-dom"

import BuilderPage from './pages/builder'
import MainPage from './pages/main'

export enum ERoutes {
  MAIN = '/',
  BUILDER = 'builder'
}

export const routes = [
  {
    path: ERoutes.MAIN,
    element: <MainPage />,
  },
  {
    path: ERoutes.BUILDER,
    element: <BuilderPage />,
  },
]

const router = createBrowserRouter(routes);

export default router;