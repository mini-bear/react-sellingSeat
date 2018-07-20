
const comingsoonlistReducer= (prevstate=[],data={})=>{

	//处理comingsoon 列表
	let{type,payload} =  data;

	switch(type){
		case "changeComingsoonList":
		 return [...prevstate,...payload]
		 default:
		 return prevstate;
	}


}


export default comingsoonlistReducer;