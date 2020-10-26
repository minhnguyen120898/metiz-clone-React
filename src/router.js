import React from 'react';
import Homepage from "./components/pages/home.component";
import ListShowing from "./components/pages/listShowing.component";
import ListComing from "./components/pages/listComing.component";
import NotFound from "./components/pages/notFound.component";
import Detail from './components/pages/detail.component';
import Login from './components/pages/login.component';

const routers = [
    {
        path: '/',
        exact : true,
        main : () => <Homepage />,
    },
    {
        path: '/showing',
        exact : true,
        main : () => <ListShowing />
    },
    {
        path: '/coming',
        exact : true,
        main : () => <ListComing />
    },
    {
        path: '/film/detail/:productID',
        exact : true,
        main : () => <Detail />
    },
    {
        path: '/login',
        exact: true,
        main : () => <Login />
    },
    {
        path: '/*',
        exact : true,
        main : () => <NotFound />
    }
]

export default routers;