import React,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
const App = lazy(() => import("./App.jsx"))
import Loading1 from './components/Loading1/Loading1.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './components/context/strore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading1/>}>
    <Provider store={store}>
 <BrowserRouter>
    <App />
 </BrowserRouter>
    </Provider>
    </Suspense>
  
  </React.StrictMode>,
)
