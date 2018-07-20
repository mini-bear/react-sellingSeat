
const nowplayinglistReducer= (prevstate=[],data={})=>{

	//处理nowplaying 列表
	let{type,payload} =  data;

	switch(type){
		case "changeNowplayingList":
		 return [...prevstate,...payload]
		 default:
		 return prevstate;
	}


}


export default nowplayinglistReducer;