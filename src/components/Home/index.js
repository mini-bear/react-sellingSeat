import React,{Component} from "react";
import "./index.css";
import ReactSwipe from 'react-swipe';
import axios from "axios";

class Home extends Component{


    constructor(){
        super();

        this.state = {

            looplist:[],

            nowplayinglist:[],

            comingsoonlist:[]

        }

    }

    render(){

        return(

            <div>
                <ReactSwipe className="carousel"  swipeOptions={{continuous: true,auto: 3000}} key={this.state.looplist.length}>
                    {
                        this.state.looplist.map((item)=>
                            <img src={item.imageUrl} key={item.id} alt={item.name} />
                        )
                    }
                </ReactSwipe>
                <div className="movie">
                    <ul key={this.state.nowplayinglist.length}>
                        {
                            this.state.nowplayinglist.map((item)=>

                                <li key={item.id}>
                                    <img src={item.cover.origin} alt={item.name}/>
                                    <div className="movieInfo">
                                        <p className="l">{item.name}</p>
                                        <span className="r">{item.grade}</span>
                                    </div>
                                </li>
                        )
                        }
                    </ul>
                    {
                        this.state.nowplayinglist.length?
                        <div>
                            <div className="more-button">
                            更多热映电影
                            </div>
                            <div className="dividing-line">
                                <div className="upcoming">
                                    即将上映
                                </div>
                            </div>
                        </div>
                        :null
                    }
                  
                    <ul key={this.state.comingsoonlist.length + 1}>
                        {
                            this.state.comingsoonlist.map((item)=>

                                <li key={item.id}>
                                    <img src={item.cover.origin} alt={item.name}/>
                                    <div className="movieInfo">
                                        <p className="l">{item.name}</p>
                                        <span className="r">{item.grade}</span>
                                    </div>
                                </li>
                        )
                        }
                    </ul>
                    {
                        this.state.comingsoonlist.length?
                        <div className="more-button">
                            更多即将上映电影
                        </div>
                        :null
                    }
                  
                </div>
            </div>

        )

    }
    componentDidMount(){

        axios.get("/v4/api/billboard/home?__t=1531274350965").then(res=>{

            this.setState({
                looplist:res.data.data.billboards
            })

        })

        axios.get("/v4/api/film/now-playing?__t=1531544737040&page=1&count=5").then(res=>{
            // console.log(res.data.data.films)
            this.setState({
                nowplayinglist:res.data.data.films
            })

        })

        axios.get("/v4/api/film/coming-soon?__t=1531548639365&page=1&count=3").then(res=>{
            // console.log(res.data.data.films)
            this.setState({
                comingsoonlist:res.data.data.films
            })

        })

    }


}

export default Home