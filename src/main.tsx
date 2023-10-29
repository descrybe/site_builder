import ReactDOM from 'react-dom/client'
import MainPage from './pages/main'
import './index.css'
import { store } from './store/index'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import BuilderPage from './pages/builder'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "builder",
    element: <BuilderPage />,
  },
]);

export default router;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
