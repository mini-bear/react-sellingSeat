import React,{Component} from "react"
import "./index.css"


class Navbar extends Component{

    render(){

        return(
            <div className="nav-container">
                <nav>
                    
                    <div className="leftmenu" onClick={()=>{
                        this.props.myevent()
                    }}>
                        <div className="left">

                            <i className="iconfont icon-ego-caidan"></i>   

                        </div> 

                        <span className="title">卖座电影</span>    
                    </div>
                    <div className="rightmenu">
                        <div className="right">

                            <span className="city">大连<i className="iconfont icon-jiantouarrow483"></i></span>

                            <a className="user"><i className="iconfont icon-iconfuzhi"></i></a>

                        </div>
                    </div>

                </nav>
            </div>


        )

    }

}

export default Navbar