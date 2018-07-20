import React,{Component} from "react";
import "./index.css";
import {NavLink} from "react-router-dom"


class Film extends Component{


    constructor(){
        super();

        this.state = {
        }

    }

    render(){

        return(
            <div className="filmChooseContainer">
                <ul className="filmChoose">
                    <li>
                        <NavLink to="/film/nowplaying" activeClassName="active">正在热映</NavLink>
                    </li>
                    <li>
                        <NavLink to="/film/comingsoon" activeClassName="active">即将上映</NavLink>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }    

}

export default Film