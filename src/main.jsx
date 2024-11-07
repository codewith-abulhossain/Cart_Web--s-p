import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import 'animate.css';
import {Toaster} from "react-hot-toast";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
        <div><Toaster position="bottom-center"/></div>
    </StrictMode>,
)
