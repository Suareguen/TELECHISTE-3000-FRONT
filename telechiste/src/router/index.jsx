import { createBrowserRouter, redirect } from "react-router-dom"
import Home from "../pages/Home/Home"
import Root from "../layouts/mainLayout"
import NotFound from "../pages/NotFound/NotFound"
import Jokes from "../pages/Jokes/Jokes"
import SignUp from "../pages/SignUp/SignUp"
import Login from "../pages/Login/Login"
import Profile from "../pages/Profile/Profile"
import Favorites from "../pages/Favorites/Favorites"



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
            },
            {
                path: '/signup',
                loader: () => {
                    if(localStorage.getItem('token')) {
                        return redirect('/profile')
                    }
                    else {
                        return null
                    }
                },
                element: <SignUp />
            },
            {
                path: '/login',
                loader: () => {
                    if(localStorage.getItem('token')) {
                        return redirect('/profile')
                    }
                    else {
                        return null
                    }
                },
                element: <Login />
            },
            {
                path: '/profile',
                loader: () => {
                    if(!localStorage.getItem('token')) {
                        alert('inicia sesion')
                        return redirect('/login')
                    }
                    else {
                        return null
                    }
                },
                element: <Profile />
            },
            {
                path: '/favoritos',
                loader: () => {
                    if(!localStorage.getItem('token')) {
                        alert('inicia sesion')
                        return redirect('/login')
                    }
                    else {
                        return null
                    }
                },
                element: <Favorites />
            }
        ]
    }
])

export default router