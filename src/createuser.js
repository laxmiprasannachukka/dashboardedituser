import REACT,{useState} from 'react';
import {useContext} from 'react';
import UserContext from './usercontext';

function Createuser(){
    let users=useContext(UserContext);
    let [userName,setuserName]=useState("");
    let [userEmail,setuserEmail]=useState("");
    let userdata={
        userName,userEmail
    }
    return (
        <>
        <form onSubmit={(e)=>{e.preventDefault();
        users.existUser.push(userdata);
        users.updateUser(users.existUser);
        setuserName("");
        setuserEmail("");
        }}>
        <div class="container">
        <div class="row">
       
        <div className="col-lg-6">
        <label>UserName</label>
        <input className="form-control" type="text" value={userName} onChange={(e)=>{setuserName(e.target.value)}}/>
        </div>
        <div className="col-lg-6">
        <label>Email</label>
        <input className="form-control" type="text" value={userEmail} onChange={(e)=>{setuserEmail(e.target.value)}}/>
        </div>
        </div>
        <div class="row">
        <div className="col-lg-3">
        <button className="btn btn-primary" style={{marginTop:"10px"}}>Add User</button>
       </div>
       </div>
        </div>
        </form>
        </>
    )
}

export default Createuser;