
import {  Navigate } from 'react-router-dom'
const ProtectedRoutesMedecin = ({children}) => {
    let token=localStorage.getItem("CC_Token");
    // console.log("token est " + token)
    return(
    token!=null ? children : <Navigate to="/login"/>
    )
    }
    export default ProtectedRoutesMedecin

