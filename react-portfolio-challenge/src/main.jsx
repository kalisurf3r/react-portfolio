
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Aboutme from './pages/Aboutme.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Aboutme />,
        children: [
            {
                path: '/Contact',
                element: <Contact />
            },
            {
                path: '/Portfolio',
                element: <Portfolio />
            },
            {
                path: '/Resume',
                element: <Resume />
            },
        ],
    },
]);

ReactDom.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
