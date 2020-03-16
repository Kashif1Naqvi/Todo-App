import React,{Component} from 'react'
import {ADD_POSTS} from '../constant/constant'
import { connect } from 'react-redux'
class Create extends Component{
  handleSubmit=(e)=>{
    e.preventDefault()
    let name,message
    name = this.getName.value
    message = this.getMessage.value
    let post = {
      id:new Date(),
      name,
      message
    }
  this.props.dispatch({
      type:ADD_POSTS,
      post
    })
    this.getName.value = ''
    this.getMessage.value = ''
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit} className="form m-5 " >
        <div className="form-group  " >
          <div className="row" >
            <div className="col-1" >
              <label htmlFor="name" className="font-weight-bold text-info " >Name</label>
            </div>
            <div className="col-10" >
              <input required className="form-control" type="text" ref={input=>this.getName = input} />
            </div>
          </div>
        </div>
        <div className="form-group  " >
          <div className="row" >
            <div className="col-1" >
              <label htmlFor="message" className="font-weight-bold text-info font-size-10 ">Message</label>
            </div>
            <div className="col-10" >
              <textarea  cols="10" rows="5" required className="form-control textarea "  ref={input=>this.getMessage = input} style={{resize:'none'}}  ></textarea>
              <input type="submit"  className="btn btn-info btn-lg float-right mt-4 " value="Create Post" />
            </div>
          </div>
        </div>
      </form>
    )
  }
}


export default connect()(Create)
