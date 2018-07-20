import React,{Component} from "react"
import {NavLink } from "react-router-dom";
import "./index.css"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Sidebar extends Component{

    render(){

        return(
            <div>
                <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={300}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>    
                {
                    this.props.myshow?
                    <div className="container" onClick={()=>{
                        this.props.myevent()
                    }}>
                    </div>
                    :null  
                }
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                transitionName="listMove"
                transitionAppear={true}
                transitionAppearTimeout={300}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>  
                {
                    this.props.myshow?
                    <aside> 
                        <ul onClick={()=>{
                            this.props.myevent()
                        }}>
                            <li><NavLink to="/home">首页<span>></span></NavLink></li>      
                            <li><NavLink to="/film">影片<span>></span></NavLink></li>   
                            <li><NavLink to="/card">卖座卡<span>></span></NavLink></li>                 
                        </ul>
                    </aside>
                    :null
                }
                </ReactCSSTransitionGroup>
            </div>

        )

    }

}

export default Sidebar