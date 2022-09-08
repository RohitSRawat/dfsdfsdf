import formapi from "../api/api";
import history from "../history";
export const productaction = (values) => async (dispatch) => {
  const response = await formapi.get(`/getproduct/${values}`);
  dispatch({ type: "getthedata", payload: response.data });
};

export const wpadmin = (values) => async (dispatch) => {
  try {
    const response = await formapi.post("/checkadminusername", values);
    dispatch({ type: "fetchadmindata", payload: response.data });
    if (response.data) {
      history.push("/dashboard");
    }
  } catch (error) {
    dispatch({ type: "fielderror", payload: error.response.data });
  }
};

export const fetchcheck = (values) => async (dispatch) => {
  try {
    const response = await formapi.post(`/sss/`);
    dispatch({ type: "checktheuser", payload: response.data });
    console.log()
    if(values.pathname == '/dashboard/products' || values.pathname == '/dashboard/products/new' ||values.pathname == '/dashboard/Users' ){
          console.log('true')
    }else{
      setTimeout(() => {
        history.push("/dashboard");
      }, 1000);
    }
   
  } catch (error) {
    dispatch({ type: "checktheuser", payload: error.response.data });
  }
};
export const destorytoken = (values) => async (dispatch) => {
    
      const response = await formapi.post(`/destorytoken`);
      dispatch({ type: "destorytoken", payload:response.data });
      history.push("/admin");

   
  };

  export const createproducts = (values) => async (dispatch) => {

   

      const response = await formapi.post("/creatproduct",values);
      dispatch({ type: "createproducts", payload: response.data });
    //   if (response.data) {
    //     // history.push("/dashboard/products");
    //   }
    // } catch (error) {
    //   dispatch({ type: "productsfielderror", payload: error.response.data });
    // }

  }
  



// //     import formapi from '../api/formapi'
// export const create = (values) => async (dispatch) => {
// const response = await formapi.post('/',values)
// dispatch({type:'create',payload:response.data})
// }
