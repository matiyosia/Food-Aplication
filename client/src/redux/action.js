import axios from "axios";

export const GET_RECIPE = "GET_RECIPE";
export const GET_BY_NAME = "GET_BY_NAME";
export const FILTER_ASC = "FILTER_ASC";
export const FILTER_MIN = "FILTER_MIN";
export const GET_TYPES = "GET_TYPES";
export const GET_TYPES_DIET = "GET_TYPES_DIET";
export const GET_DIET = "GET_DIET";
export const POST_RECIPE = "POST_RECIPE";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const FILTER_CREAD = "FILTER_CREAD";

// export const getRecipes = () => {
// 	return async function (dispatch){
//         await fetch(`http://localhost:3001/recipe`)
//         .then(res => res.json())
//         .then(data =>
//              dispatch({
//                 type:GET_RECIPE,
//                 payload:data
//             })
//         )

//     }
// };

export const getRecipes = () => {
  return async function (dispatch) {
    try {
      let json = await axios.get(`http://localhost:3001/recipe`);
      return dispatch({
        type: GET_RECIPE,
        payload: json.data,
      });
    } catch (error) {
        throw error;
    }
  };
};

export const getByName = (name) => {
  return async function (dispatch) {
    try {
      let json = await axios.get(`http://localhost:3001/recipe?name=${name}`);
      return dispatch({
        type: GET_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      alert("no existe");

      throw error;
    }
  };
};

export const types = () => {
  return async function (dispatch) {
   try {
    let json = await axios.get("http://localhost:3001/types");
    //   console.log(json)
    return dispatch({
      type: GET_TYPES,
      payload: json.data,
    });
   } catch (error) {
       throw error
   }
  };
};

export const getTypeDiet = (payload) => {
  // console.log(payload)
  return {
    type: GET_TYPES_DIET,
    payload,
  };
};
export const getFilterAsc = (payload) => {
  return {
    type: FILTER_ASC,
    payload,
  };
};

export const getFilterMax = (payload) => {
  // console.log(payload)
  return {
    type: FILTER_MIN,
    payload,
  };
};
export const getCreates = (payload) => {
  // console.log(payload)
  return {
    type: FILTER_CREAD,
    payload,
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/recipe/${id}`);
      // console.log(res.data)
      return dispatch({
        type: GET_DIET,
        payload: res.data,
      });
    } catch (error) {
      throw error
    }
  };
};

export const postCreate = (payload) => {
  return async function (dispatch) {
    try {
        const json = await axios.post(
            "http://localhost:3001/recipe/create",
            payload
          );
      
          return json;
    } catch (error) {
        throw error
    }
  };
};
