const {createStore,combineReducers}=require("redux")

const postInitialState={
    posts:[]
}

const usersInitialState={
    users:[]
}

const createPostActionCreator=(val)=>{
   return{
       type:"ADD_POST",
       payload:val
   }
}

const deletePostActionCreator=(val)=>{
    return{
        type:"DELETE_POST",
        payload:val
    }
 }

const createUserActionCreator=(val)=>{
    return{
        type:"ADD_USER",
        payload:val
    }
 }
 
const deleteUserActionCreator=(val)=>{
     return{
         type:"DELETE_USER",
         payload:val
     }
}

const createPostReducer=(state=postInitialState,action)=>{
    switch(action.type)
    {
        case "ADD_POST":
            return{
                posts:[...state.posts,action.payload]
            }
        case "DELETE_POST":
            let postArr=state.posts.filter((post)=>post.id!==action.payload)
            return{
                posts:postArr
            }
        default:
            return state
    }

}

const createUsersReducer=(state=usersInitialState,action)=>{
    switch(action.type)
    {
        case "ADD_USER":
            return{
                users:[...state.users,action.payload]
            }
        case "DELETE_USER":
            let userArr=state.users.filter((user)=>user.id!==action.payload)
            return{
                users:userArr
            }
        default:
            return state
    }

}

let rootReducer=combineReducers({postRed:createPostReducer,userRed:createUsersReducer})

let store=createStore(rootReducer)

store.subscribe(()=>{
    let state=store.getState()
    console.log("State Accessed")
    console.log(state.postRed)
    console.log(state.userRed)
})

store.dispatch(createPostActionCreator({id:101,title:"React"}))
store.dispatch(createPostActionCreator({id:102,title:"Redux"}))
store.dispatch(createPostActionCreator({id:103,title:"Router"}))
store.dispatch(createUserActionCreator({id:201,title:"Amit"}))
store.dispatch(createUserActionCreator({id:202,title:"Shreya"}))
store.dispatch(createUserActionCreator({id:203,title:"Riya"}))
store.dispatch(deletePostActionCreator(103))
store.dispatch(deleteUserActionCreator(202))