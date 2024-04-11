import React from 'react'
import MenuDoctor from './MenuDoctor';
import ListPatient from '../PatientList/ListPatient';
import TopDoctor from "../../topbarD/TopDoctor"
function PrincipaleDo() {
  return (
    <div>
      {/* <TopDoctor/> */}

{/* hero start  */}
{/* <div className="container-fluid bg-primary py-5 mb-5 hero-header3">
  <div className="container py-5">
    <div className="row justify-content-start">
      <div className="col-lg-8 text-center text-lg-start" style={{ paddingTop: "50px", textAlign: "center" }}>

        <div className="pt-2">

        </div>
      </div>
    </div>
  </div>
</div> */}
      <div>
        <ListPatient/>
      </div>
      
      </div>
  )
}

export default PrincipaleDo