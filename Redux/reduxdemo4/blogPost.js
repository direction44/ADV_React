const {createStore,applyMiddleware} =require("redux")
const thunkMiddleWare=require("redux-thunk").thunk

const initialState={
    post:[],
    loading:false,
    error:""
}

const startPostActionCreator=()=>{
    return{
        type:"REQUEST_STARTED"
    }
}

const addDataPostActionCreator=(data)=>{
    return{
        type:"REQUEST_SUCCESSED",
        payload:data
    }
}

const failedDataPostActionCreator=(err)=>{
    return{
        type:"REQUEST_FAILED",
        payload:err
    }
}

const thunkCreator=()=>{
    return async(dispatch)=>{
        dispatch(startPostActionCreator())
        try{
            let response=await fetch("http://jsonplaceholder.typicode.com/posts")
            if(!response.ok)
            {
                throw new Error(response.statusText)
            }
            let result=await response.json()
            dispatch(addDataPostActionCreator(result))

        }
        catch(err){
            dispatch(failedDataPostActionCreator(err.message))
        }
    }
}
const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case "REQUEST_STARTED":
        return{
            ...state,
            loading:true
        }
        case "REQUEST_SUCCESSED":
        return{
            ...state,
            loading:false,
            post:action.payload
        }
        case "REQUEST_FAILED":
        return{
            ...state,
            loading:false,
            error:action.payload
        }
        default:
         return state
    }
}

const store=createStore(postReducer,applyMiddleware(thunkMiddleWare))

store.subscribe(()=>{
    let state=store.getState()
    console.log("State Is:",state)
})

store.dispatch(thunkCreator())