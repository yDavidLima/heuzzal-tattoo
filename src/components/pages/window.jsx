import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Header } from "../common/Header";
import { Home } from "../Home/Home";
import { About } from "./About"
import { Services } from "../Home/Services";
import { Portfolio } from "./Portfolio";
import { Testimonials } from "./Testimonials";
import { Blog } from "./Blog";
import { Emdesenvolvimento } from "./Emdesenvolvimento";
import { Contact } from "./Contact";
import Footer from "../common/Footer"



export const Window = () => {
    return (
    <> 
    <Router>
        <Header />
        <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/about' component={About} />
             <Route exact path='/services' component={Services} />
             <Route exact path='/portfolio' component={Portfolio} />
             <Route exact path='/testimonials' component={Testimonials} />
             <Route exact path='/blog' component={Blog} />
             <Route exact path='/contact' component={Contact} />
             <Route exact path='/emdesenvolvimento' component={Emdesenvolvimento} />
        </Switch>
        <Footer />
    </Router>
</>
)
}