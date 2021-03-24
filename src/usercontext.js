import REACT from "react";
import {useState} from "react";
import Users from "./users";
let UserContext= REACT.createContext();

export default UserContext;

let data=[{userName:"Lucky",userEmail:"lucky@gmail.com"},
{userName:"Naveen",userEmail:"Naveen@gmail.com"},
{userName:"laxmi",userEmail:"laxmi@gmail.com"}
]

export const UserProvider=({children})=>{
  
    let [existUser,updateUser]=useState(data);
return <UserContext.Provider value={{existUser,updateUser}}>
    {children}
</UserContext.Provider>
}