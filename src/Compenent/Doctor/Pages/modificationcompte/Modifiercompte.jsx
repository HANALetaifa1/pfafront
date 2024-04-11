import React from 'react';
import "./modifcompte.css";
import {useSelector} from "react-redux";
import {urlimage} from "../../../../Axios/Api"
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import TopDoctor from '../../topbarD/TopDoctor';
function Modifiercompte() {
  const {user} = useSelector((state) =>state.auth);
  return (
    <div>
      <TopDoctor/>
    <div className="user">
    <div className="userTitleContainer">
      <h1 className="userTitle">Modifier Compte</h1>
   
    </div>
    <div className="userContainer">
      <div className="userShow">
        <div className="userShowTop">
          <img
           src={user.avatar ? urlimage + user.avatar : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} 
            alt="avatar"
            className="userShowImg"
          />
          <div className="userShowTopTitle">
            <span className="userShowUsername">{user.firstName} {user.lastName}</span>
            <span className="userShowUserTitle">{user.email}</span>
          </div>
        </div>
        <div className="userShowBottom">
          <span className="userShowTitle">Détails du compte</span>
          <div className="userShowInfo">
            <div className="userShowIcon">
          <img src={urlimage +user?.specialiteID?.Icon} alt={user?.specialiteID?.Icon}  style={{ Width: '50px', height: '50px' }} /> 
          </div>
            <span className="userShowInfoTitle">{user?.specialiteID?.nomsep}</span>

          </div>
          <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">{user.firstName} {user.lastName}</span>
          </div>
          {/* <div className="userShowInfo">
          <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">span>
          </div> */}
          <div className="userShowInfo">
            <LocationSearching className="userShowIcon" />
            <span className="userShowInfoTitle">{user.adresse}</span>
          </div>
          <span className="userShowTitle">Contact Details</span>
          <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
            <span className="userShowInfoTitle">{user.phone}</span>
          </div>
          <div className="userShowInfo">
            <MailOutline className="userShowIcon" />
            <span className="userShowInfoTitle">{user.email}</span>
          </div>
         
        </div>
      </div>
      {/* <div className="userUpdate">
        <span className="userUpdateTitle">Modifier</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Nom</label>
              <input
                type="text"
                placeholder={user.lastName}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Prénom</label>
              <input
                type="text"
                placeholder={user.firstName}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="text"
                placeholder={user.email}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Phone</label>
              <input
                type="text"
                placeholder={user.phone}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Adresse</label>
              <input
                type="text"
                placeholder={user.adresse}
                className="userUpdateInput"
              />
            </div>
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img
                className="userUpdateImg"
                src={user.avatar ? urlimage + user.avatar : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} 
    alt={user.fristName}
              />
              <label htmlFor="file">
                <Publish className="userUpdateIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="userUpdateButton">Update</button>
          </div>
        </form>
      </div> */}
    </div>
  </div>
  </div>
  )
}

export default Modifiercompte
