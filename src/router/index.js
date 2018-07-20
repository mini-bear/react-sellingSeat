import React from "react"
import {HashRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import {Provider} from "react-redux"
import Store from "../redux"

import Home from "../components/Home"
import Film from "../components/Film"
import Nowplaying from "../components/Film/Nowplaying"
import Comingsoon from "../components/Film/Comingsoon"

import App from "../App"

const router = (

    <Provider store={Store}>
        <Router>
        
            <App>
            
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/film" render={()=>
                        <Film>
                            <Switch>
                                <Route path="/film/nowplaying" component={Nowplaying} />
                                <Route path="/film/comingsoon" component={Comingsoon} />
                                <Redirect from="/film" to="/film/nowplaying"/>
                            </Switch>
                        </Film>
                    }/>
                    {/*  <Route path="/card" component={Card}/> */}
                    <Redirect from="*" to="/home"/>
                </Switch>

            </App>
        
        </Router>
    </Provider>

)


export default router;