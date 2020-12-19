import { MDBContainer } from 'mdbreact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React,{useEffect} from 'react'
import DataTable from './components/DataTable'
import Download from './components/Download'
import NavbarPage from './components/NavbarPage'
import FormScreem from './screens/FormScreem'
import './index.css'
import DataScreen from './screens/DataScreen'
const App = () => {
  return (
    <Router>
      <NavbarPage />
      <main>
          <Route path="/data" component={DataScreen} exact />
          <Route path="/" component={FormScreem} exact />
      </main>
    </Router>
  )
}

export default App
