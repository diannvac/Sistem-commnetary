
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
export function PrivateRoute ({children}) {
  const {user} = UserAuth();
 if(user==null){
  return <Navigate to={"/loginpage"}/>
 }
 return children;
}


