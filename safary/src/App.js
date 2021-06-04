import "./index.scss"
import Header from './components/header/header'
import Home from "./pages/home"
import Clothes from './pages/clothes/clothes'
import Shoes from './pages/shoes/shoes'
import Assec from './pages/assec/assec'
import {Route, Switch} from 'react-router-dom'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <Header className="header"/>
        <Switch>
        <Route exact path = "/" component ={Home}/>
        <Route  path = "/clothes" component ={Clothes}/>
        <Route  path = "/shoes" component ={Shoes}/>
        <Route  path = "/assec" component ={Assec}/>
        </Switch>
     
     
      <Footer id = "#footer"/>
    </>
  );
}

export default App;
