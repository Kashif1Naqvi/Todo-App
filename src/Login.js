import React,{Component} from 'react'

class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit =aysnc (e) => {
    e.preventDefault()
    let formData = {
      email:this.state.email,
      password:this.state.password
    }
    let responce = await fetch('http://motor.nexasolution.com/login.php',{
      mode:'cors',
      reffer:'no-reffer',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      credential:'follow',
      body:JSON.stringify(formData)
    })
    console.log(responce);

  }
  render(){
    return(
      <form onSubmit={this.handleSubmit} >
        <div>
          <label htmlFor="Email" >EMAIL ADDRESS</label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email " />
        </div>
        <div>
          <label htmlFor="Password" >PASSWORD</label>
          <input type="password" value={this.state.password} onChange={this.handleChange} placeholder="Email" name="shah" />
        </div>
        <input type="submit" value="Login" />
      </form>
    )
  }
}
export default Login
