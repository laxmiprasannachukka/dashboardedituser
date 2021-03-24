import REACT,{useState} from 'react';
import {useContext} from 'react';
import UserContext from './usercontext';
import {useParams} from 'react-router-dom';

function Edituser(){
    let user=useParams();
    let users=useContext(UserContext);
    let lastIndex=0;
   users.existUser.forEach((item,index)=>{
       if(item.userEmail===user.id){
        lastIndex=index;
       }
   })


    //let [userId,setuserId]=useState(users.existUser[lastIndex].userId);
    let [userName,setuserName]=useState(users.existUser[lastIndex].userName);
    let [userEmail,setuserEmail]=useState(users.existUser[lastIndex].userEmail);
    

    let userdata={
        userName,userEmail
    }
    return (
        <>
        <form onSubmit={(e)=>{e.preventDefault();
        users.existUser[lastIndex]=userdata;
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
        <button className="btn btn-primary" style={{marginTop:"10px"}}>Update User</button>
       </div>
       </div>
        </div>
        </form>
        </>
    )
}

export default Edituser;