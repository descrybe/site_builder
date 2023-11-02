import ReactDOM from 'react-dom/client'
import { store } from '@store/index'
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom"
import './index.css'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
