const {createStore}=require("redux")

initialPost={
    posts:[]
}

const addActionPostsCreater=(value)=>{
    return{
        type:"ADD_POSTS",
        payload:value
    }
}
const dateleActionPostsCreater=(id)=>{
    return{
        type:"DELETE_POSTS",
        payload:id
    }
}

const createReducer=(state=initialPost,action)=>{
    switch(action.type){
        case "ADD_POSTS":
            return{
                posts:[...state.posts,action.payload]  
            }
        case "DELETE_POSTS":
            let newPosts=state.posts.filter((post)=>post.id!=action.payload)
            return{
                    posts:newPosts  
            }

    }

}

let store=createStore(createReducer)
store.subscribe(()=>{
    let state=store.getState()
    console.log("post",state.posts)
})

store.dispatch(addActionPostsCreater({id:101,title:"React"}))
store.dispatch(addActionPostsCreater({id:102,title:"Redux"}))
store.dispatch(addActionPostsCreater({id:103,title:"Router"}))
store.dispatch(dateleActionPostsCreater(101))