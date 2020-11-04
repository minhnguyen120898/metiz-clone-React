import React from 'react'
import ChooseTickets from './components/pages/ChooseTickets.component'
import ChooseSeats from './components/pages/ChooseSeats.component'

import Error404 from './components/pages/Error404.component'
import Home from './components/pages/home.component'
import MovieDetail from './components/pages/MovieDetail.component'
import Sale from './components/pages/sale.component'
import SaleDetails from './components/pages/saledetail.component'
import Pays from './components/pages/Pays.component'
import Register from './components/pages/Register.component'
import Login from './components/pages/Login.component'
import ListShowing from './components/pages/listShowing.component'
import FilmDetail from './components/filmDetail/filmDetails.component'
import ListComming from './components/pages/listComing.component'
import Profile from './components/pages/Profile.component'
import ChangePassword from './components/Profile/ChangePassword.component'
const routers = [
     {
          path: "/sale",
          exact: true,
          main: () => <Sale/>
     },
     {
          path:"/",
          exact: true,
          main: () => <Home/>
     },
     {
          path:"/sale/:saleId",
          exact: true,
          main: () => <SaleDetails/>
     },
     {
          path: "/showing",
          exact: true,
          main: () => <ListShowing/>
     },
     {
        path: '/coming',
        exact : true,
        main : () => <ListComming />
     },
     {
        path: '/profile',
        exact: true,
        main : () => <Profile />
     },
     {
          path: "/film/details/:productID",
          exact: true,
          main: () => <FilmDetail />
     },
     {
          path: "/movie-detail/:productId",
          exact: true,
          main: () => <MovieDetail />,
     },
     {
          path: "/choose-tickets",
          exact: true,
          main: () => <ChooseTickets />,
     },
     {
          path: "/pays",
          exact: true,
          main: () => <Pays />,
     },
     {
          path: "/choose-seats",
          exact: true,
          main: () => <ChooseSeats />,
     },
     {
          path: "/register",
          exact: true,
          main: () => <Register />,
     },
     {
          path: "/login",
          exact: true,
          main: () => <Login />,
     },
      {
          path: "/changepassword",
          exact: true,
          main: () => <ChangePassword />
     },
     {
          path: "/*",
          exact: true,
          main: () => <Error404 />,
     },
]
export default routers