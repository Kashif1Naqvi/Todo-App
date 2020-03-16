import React,{Component} from 'react'
import Create from './Components/Create'
import AllPosts from './Components/AllPosts'
class App extends Component{
  render(){
    return(
      <div className="container mt-5" >
        <h1 className="text-center font-weight-bold text-info " >React Redux Crud Application</h1>
        <div className="row" >
          <div className="col-12" >
            <Create />
          </div>
          <div className="col-12" >
            <AllPosts />
          </div>
        </div>
      </div>
    )
  }
}

export default App
