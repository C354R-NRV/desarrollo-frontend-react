import {createBrowserRouter} from 'react-router-dom'
import Default from '../screens/Default'
import CatalogoProducto from '../screens/CatalogoProducto'
import LoginForms from '../screens/Forms/LoginForm.jsx'

import App from "../App";

const routes = createBrowserRouter([
{
    path: '/',
    element: <App/>,
    children: [
        {
            path: '/default',
            element: <Default/>,
        },
        {
            path: '/products',
            element: <CatalogoProducto/>,
        },
        {
            path: '/login',
            element: <LoginForms/>,
        },
    ]
}
]);
export default routes;