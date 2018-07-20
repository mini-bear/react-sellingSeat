import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import {connect} from "react-redux";

class Comingsoon extends Component{


    constructor(){
        super();

        this.state = {


        }

    }

    render(){

        return(
            <div>
                <ul className="comingsoonlist">
                    {
                        this.props.Comingsoonlist.map(item=>
                        <li key={item.id}>
                            <img src={item.poster.thumbnail} alt={item.name}/>
                            <div className="movieInfo">
                                <p>{item.name}
                                    <span className="grade">
                                        {/* {item.grade} */}
                                        <span>></span>
                                    </span>
                                </p>
                                <p className="intro">{item.intro}</p>
                            </div>
                        </li>
                    )
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){

        if(this.props.Comingsoonlist.length===0){
            this.props.getcomingsoonlist();
        }

    }    

}

export default connect(
    (state)=>{

        return{

            Comingsoonlist:state.comingsoonlistReducer

        }

    },
    {

        getcomingsoonlist(){

            return axios.get("/v4/api/film/coming-soon?page=1&count=7").then(res=>{

                // console.log(res.data.data.films)
                return{
                    type:"changeComingsoonList",
                    payload:res.data.data.films
                }
    
            })

        }

    }

)(Comingsoon)