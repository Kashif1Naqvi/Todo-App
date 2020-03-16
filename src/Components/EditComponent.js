import React,{Component} from 'react'
import {UPDATE_POST} from '../constant/constant'
import { connect } from 'react-redux'
class EditComponent extends Component{
  handleSubmit=(e)=>{
    e.preventDefault()
    let name,message
    name    = this.getName.value
    message = this.getMessage.value
    let data = {
      name,
      message
    }
   this.props.dispatch({
      type: UPDATE_POST,
      id:this.props.post.id,
      data:data,
    })

  }
  render(){
    const {id,name,message} = this.props.post
    return(
      <div key={id} >
        <form onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <label htmlFor="name" >Name</label>
            <input defaultValue={name} required className="form-control" type="text" ref={input=>this.getName = input} />
          </div>
          <div className="form-group">
            <label htmlFor="message" >Message</label>
            <input defaultValue={message} required className="form-control" type="text" ref={input=>this.getMessage = input} />
          </div>
          <input type="submit" value="Update" />
        </form>
      </div>
    )
  }
}

export default connect()(EditComponent)
