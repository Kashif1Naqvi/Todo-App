import React,{Component} from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import EditComponent from './EditComponent'
class AllPosts extends Component{
  render(){
    return(
      <div className="container mt-5">
        <h1 className="font-weight-bold text-center text-info" >All posts </h1>

        {
          this.props.posts.map(
            (post)=>(
              <div key={post.id} >
                {
                 post.editing ?
                  <EditComponent post={post}  key={post.id} />:<Post post={post}  key={post.id} />
                }
              </div>
            )
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    posts : state
  }
}
export default connect(mapStateToProps)(AllPosts)
