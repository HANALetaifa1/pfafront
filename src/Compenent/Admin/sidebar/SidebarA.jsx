import React from 'react'
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

function SidebarA() {
  return (

        <div className="sidebar1">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link to="/AppA" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Acceuil
                </li>
                </Link>
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  observation
                </li>
                <li className="sidebarListItem">
                  <TrendingUp className="sidebarIcon" />
                  suivre
                </li>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                <Link to="/AppUser" className="link">
                  <li className="sidebarListItem">
                    <PermIdentity className="sidebarIcon" />
                    Liste des Médecins
                  </li>
                </Link>
            
                <Link to="/GestionMedecins" className="link">
                  <li className="sidebarListItem">
                    <PermIdentity className="sidebarIcon" />
                    Getion des Médecins
                  </li>
                </Link>
                <Link to="/Listmedecin" className="link">
                  <li className="sidebarListItem">
                    <PermIdentity className="sidebarIcon" />
                    Liste des Specialités
                  </li>
                </Link>
            </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notifications</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <MailOutline className="sidebarIcon" />
                  Mail :
                </li>
                <Link className="link">
                <li className="sidebarListItem">
                  <ChatBubbleOutline className="sidebarIcon" />
                  Messages
                </li></Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <WorkOutline className="sidebarIcon" />
                  Manage
                </li>
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Analytics
                </li>
                <li className="sidebarListItem">
                  <Report className="sidebarIcon" />
                  Reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

export default SidebarA
