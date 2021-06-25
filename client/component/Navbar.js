
import React, { useContext,useEffect,useState } from 'react'
import { Link ,useHistory} from 'react-router-dom';
import {UserContext} from '../App';
import M from 'materialize-css';
function Navbar() {
  const history=useHistory()
  const {state, dispatch} = useContext(UserContext)
  
  const renderList = () => {
    console.log(state)
    if (state) {

      return [
        <li key ="1"><Link  to="/profile">Profile</Link></li>,
        <li key="2" ><Link  to="/create">Create a Post</Link></li>,
         <li key ="5">
          <button className="btn  #c62828 red darken-3" onClick={()=>{
            localStorage.clear()
            dispatch({type:"CLEAR"})
           // history.push('/login')
          }}>
          LogOut
            </button>
        </li>

      ]
    }
    else {
      return [
        <li key ="6"><Link to="/login">Login</Link></li>,
        <li key ="7"><Link to="/signup">SignUp</Link></li>,
        

      ]

    }
  }
  return (
    
      <nav>
        <div className="nav-wrapper white" >
          <Link to={state?"/":"/login"} className="brand-logo left">Lite Lo</Link>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>
      </nav>

    
  )
}

export default Navbar
