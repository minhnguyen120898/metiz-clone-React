import React from 'react'
import CommingMovies from '../list/CommingMovies.component'
import Footer from '../partials/footer.component'
import Header from '../partials/Header/header.component'

const ListComming = () => {
     return (
          <div className="wrapper">
               <Header/>
               <div className="">
                    <CommingMovies />
               </div>
               <Footer/>
          </div>
     )
}
export default ListComming;