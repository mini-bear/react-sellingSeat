import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import {connect} from "react-redux";

class Nowplaying extends Component{


    constructor(){
        super();

        this.state = {


        }

    }

    render(){

        return(
            <div>
                <ul className="nowplayinglist">
                    {
                        this.props.Nowplayinglist.map(item=>
                        <li key={item.id}>
                            <img src={item.poster.thumbnail} alt={item.name}/>
                            <div className="movieInfo">
                                <p>{item.name}<span className="grade">{item.grade}<span>></span></span></p>
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

        // axios.get("/v4/api/film/now-playing?page=1&count=7").then(res=>{

        //     // console.log(res.data.data.films)
        //     this.setState({

        //         Nowplayinglist:res.data.data.films

        //     })

        // })
        if(this.props.Nowplayinglist.length===0){
            this.props.getnowplayinglist();
        }
        

    }
}

export default connect(
                (state)=>{

                    return{

                        Nowplayinglist:state.nowplayinglistReducer

                    }

                },
                {

                    getnowplayinglist(){

                        return axios.get("/v4/api/film/now-playing?page=1&count=7").then(res=>{

                            // console.log(res.data.data.films)
                            return{
                                type:"changeNowplayingList",
                                payload:res.data.data.films
                            }
                
                        })

                    }

                }

)(Nowplaying)