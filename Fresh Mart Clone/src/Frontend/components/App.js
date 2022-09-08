import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Routes ,Router,Route} from 'react-router-dom'
import Content from './Homepage'
import About from './about'
import Header from './Header'
import Admin from './admin.js'
import Dashboard from './admindashboard'
import AdminproductNew from './adminproduct'
import Adminproduct from './adminproducts'
import AdminUser from './adminusers'

 class App extends Component {
  render() {
    return (
<React.Fragment>

<Routes >

      <Route path="/" exact element={ <Content/> } />
      <Route path="/about" exact element={ <About/> } />
      <Route path="/admin" exact element={ <Admin/> } />
      <Route path="/dashboard" exact element={ <Dashboard/> } />
      <Route path="/dashboard/products" exact element={ <Adminproduct/> } />
      <Route path="/dashboard/products/new" exact element={ <AdminproductNew/> } />
      <Route path="/dashboard/Users" exact element={ <AdminUser/> } />

    </Routes>
</React.Fragment>
    )
  }
}



export default App