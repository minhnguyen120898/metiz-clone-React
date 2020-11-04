import React from 'react'
import RegisterChild from '../RegisterChild/RegisterChild.component'
import Footer from '../partials/footer.component'
import Header from '../partials/Header/header.component'

const Register = () => {
     return (
          <div className="wrapper">
               <Header/>
               <div className="">
                    <RegisterChild />
               </div>
               <Footer/>
          </div>
     )
}
export default Register;