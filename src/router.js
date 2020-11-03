import React from 'react';
import Homepage from "./components/pages/home.component";
import ListShowing from "./components/pages/listShowing.component";
import ListComing from "./components/pages/listComing.component";
import NotFound from "./components/pages/notFound.component";
import Detail from './components/pages/detail.component';
import Login from './components/pages/login.component';
import Register from './components/pages/register.component';
import Profile from './components/pages/profile.component';
import ChangePassword from './components/profile/changePassword';
import UserManagement from './components/pages/userManagement.component';
import Edit from './components/admin/editUser';
import MovieManagement from './components/pages/movieManagement';
import EditMovie from './components/admin/editMovie';
import AddMovie from './components/admin/addMovie';

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
        path: '/register',
        exact: true,
        main : () => <Register />
    },
    {
        path: '/profile',
        exact: true,
        main : () => <Profile />
    },
    {
        path: '/changepassword',
        exact: true,
        main : () => <ChangePassword />
    },
    {
        path: '/admin/users',
        exact: true,
        main : () => <UserManagement />
    },
    {
        path: '/admin/users/edit/:userId',
        exact: true,
        main : () => <Edit />
    },
    {
        path: '/admin/movies',
        exact: true,
        main : () => <MovieManagement />
    },
    {
        path: '/admin/movies/edit/:movieId',
        exact: true,
        main : () => <EditMovie />
    },
    {
        path: '/admin/movies/add',
        exact: true,
        main : () => <AddMovie />
    },
    {
        path: '/*',
        exact : true,
        main : () => <NotFound />
    }
]

export default routers;