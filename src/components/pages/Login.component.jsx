import React from 'react'
import LoginChild from '../loginChild/LoginChild.component'
import Footer from '../partials/footer.component'
import Header from '../partials/Header/header.component'

const Login = () => {
     return (
          <div className="wrapper">
               <Header/>
               <div className="">
                    <LoginChild />
               </div>
               <Footer/>
          </div>
     )
}
export default Login;