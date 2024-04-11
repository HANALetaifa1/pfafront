import React from 'react';
import './faeturedinfo.css';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
function FaeturedInfo() {
  return (
     <div className="featured">
    <div className="featuredItem">
      <span className="featuredTitle">Médecin</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">415</span>
        <span className="featuredMoneyRate">
          +11.4 <ArrowUpward  className="featuredIcon "/>
        </span>
      </div>
      <span className="featuredSub">nombre des médecins inscrit</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Patient</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">215</span>
        <span className="featuredMoneyRate">
          -1.4 <ArrowDownward className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">nombre des patients inscrit</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Visiteur</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">900</span>
        <span className="featuredMoneyRate">
          +2.4 <ArrowUpward className="featuredIcon"/>
        </span>
      </div>
      <span className="featuredSub">nombre des visiteur inscrit</span>
    </div>
  </div>
  )
}

export default FaeturedInfo
