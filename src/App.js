import React from 'react'
import NavBar from './components/NavBar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import Footer from './components/Footer'
import Blog from './components/Blog'
import Deve from './components/Deve'
const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8">
            <div className="row gx-2">
                {[1].map(el => <Blog />)}
            </div>
          </div>
          <div className="col-12 col-sm-4 py-3">
            <aside>
              {[1].map(el => <Deve />)}
            </aside>
          </div>
          {/* <Deve /> */}
          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
