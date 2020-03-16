import React,{Component} from 'react'
import {connect} from 'react-redux'
class Post extends Component{
  Delete = () => {
    const {id} = this.props.post
    if(this.props.dispatch({ type:'DELETE_POSTS',id:id })){
      alert("Are you sure?")
    }
  }
  render(){
    const {id,name,message} = this.props.post
    console.log("dasda",this.props);
    return(
      <div className="row" >
          <div className="col-4" >
              <p className="text-info">Name:{name}</p>
          </div>
          <div className="col-4" >
            <p className="text-info">Message: {message}</p>
          </div>
          <div className="col-4">
            <button className="btn btn-info btn-lg " onClick={this.Delete} >DELETE</button>
            <button className="btn btn-danger btn-lg " onClick={()=>this.props.dispatch({ type:'EDIT_POST',id:id })} >EDIT</button>
          </div>
      </div>
    )
  }
}
export default connect()(Post)
