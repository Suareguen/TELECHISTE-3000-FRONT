import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home"
import Root from "../layouts/mainLayout"
import NotFound from "../pages/NotFound/NotFound"
import Jokes from "../pages/Jokes/Jokes"


const router = createBrowserRouter([
    {
        path: '',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/chistes',
                element: <Jokes />
            }
        ]
    }
])

export default router