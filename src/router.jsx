import { createBrowserRouter } from "react-router-dom";

import Home from './pages/home'

import Blog from './pages/blog'
import SinglePost from './pages/blog/single'

export const router = createBrowserRouter([
    {
        path: '/',
        element:  <Home/>
        
    },
    {
        path: '/blog',
        element:  <Blog/>,

    },
    {
        path: 'blog/:slug',
        element:  <SinglePost/>,

    }
])