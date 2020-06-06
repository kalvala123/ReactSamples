import React , { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import NestedView from './NestedView'
import {CatalogView, ProductView} from './catalog'
import './style.css';

  
class RouterTest extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Header />
                    <div className="wrapper">
                    <Switch>
                        <Route path={"/"} exact component={Home} />
                        <Route path={"/about"} component={About} />
                        <Route path={"/nested"} component={NestedView} />
                        <Route path={"/catalog"} component={CatalogView} />
                        <Route path ={"/product/:id"} component={ProductView} />
 
                    </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default RouterTest;
//render(<App /> , document.getElementById('root'));