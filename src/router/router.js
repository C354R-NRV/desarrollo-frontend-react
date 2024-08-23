import {createBrowserRouter} from 'react-router-dom'
import Default from '../screens/Default'
import CatalogoProducto from '../screens/CatalogoProducto'
import LoginForms from '../screens/Forms/LoginForm.jsx'

import App from "../App";
import LandingPage from '../screens/LandingPage.jsx';

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-react':'/';

const routes = createBrowserRouter([
{
    path: '/',
    element: <App/>,
    children: [
        {
            path: '/',
            element: <LandingPage/>,
        },
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
], {
    basename: basename
});
export default routes;