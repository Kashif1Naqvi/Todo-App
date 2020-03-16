import { ADD_POSTS,DELETE_POSTS } from '../constant/constant'


export const AddPosts = (text) =>{
  return{
    type:ADD_POSTS,
    text
  }
}

export const DeletePosts = (id) =>{
  return{
    type:DELETE_POSTS,
    id
  }
}
