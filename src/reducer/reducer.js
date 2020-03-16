import { EDIT_POST,DELETE_POSTS,ADD_POSTS,UPDATE_POST } from '../constant/constant'
const reducer = (state=[],action)=>{
  switch(action.type) {
    case ADD_POSTS:
       return state.concat([action.post])
    case DELETE_POSTS:
       return state.filter(post=>post.id !== action.id )
    case EDIT_POST:
      return state.map(post=>post.id === action.id ? {...post, editing:!post.editing } : post)
    case UPDATE_POST:
      return state.map((post)=>{
        console.log("post",action);
        if(post.id === action.id){
          return {
            ...post,
            name:action.data.name,
            message:action.data.message,
            editing:!post.editing
          }
        }else return post
      })
    default:
      return state
  }
}
export default reducer
