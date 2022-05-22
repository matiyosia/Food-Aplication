import axios from 'axios'

export const GET_RECIPE="GET_RECIPE";
export const GET_BY_NAME="GET_BY_NAME";
export const FILTER_ASC="FILTER_ASC";
export const FILTER_MIN="FILTER_MIN";
export const GET_TYPES="GET_TYPES"
export const GET_TYPES_DIET="GET_TYPES_DIET"
export const GET_DIET="GET_DIET"
export const POST_RECIPE="POST_RECIPE"
export const CLEAR_DETAIL="CLEAR_DETAIL"
export const FILTER_CREAD="FILTER_CREAD"



export const getRecipes = () => async (dispatch) => {
	try {
		const res = await axios.get(`http://localhost:3001/recipe`);
        // console.log(res)
		dispatch({type: 'GET_RECIPE', payload: res.data});
	} catch (err) {
		console.log(err);
	}
};


export const getByName = (name)=>{
    return async function(dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/recipe?name=${name}`);
            return dispatch({
              type:GET_BY_NAME,
              payload:json.data
        })
            
        } catch (error) {
            alert("no existe")
            throw(error)
        }
    }
   
} 

export const types = ()=>{
  
        return async function (dispatch){
            let json =await axios.get("http://localhost:3001/types")
              console.log(json)
            return dispatch({
                type:GET_TYPES,
                payload:json.data
            })
        }
    
}

export const  getTypeDiet = (payload)=>{
    // console.log(payload)
        return {
            type:GET_TYPES_DIET,
            payload
        }
}
export const getFilterAsc = (payload)=>{
    
        return {
            type:FILTER_ASC,
            payload
        }
}


export const getFilterMax = (payload)=>{
    // console.log(payload)
        return {
            type:FILTER_MIN,
            payload
        }
}
export const getCreates = (payload)=>{
    // console.log(payload)
        return {
            type:FILTER_CREAD,
            payload
        }
}





export const getDetail = (id) =>  {
	
        return async function (dispatch){
            const res = await axios.get(`http://localhost:3001/recipe/${id}`);
            // console.log(res.data)
            return dispatch({
                type:GET_DIET,
                payload:res.data
            })
        }
        
   
};


export const postCreate =(payload)=>{
    return async function (dispatch){
        const json = await axios.post("http://localhost:3001/recipe/create",payload)

        return json
    }
}