import React from "react";

function Footer (){
  return(
    <React.Fragment>
    <div className="bg-dark text-jost p-3">
    <div className="info-box mx-auto">
    <p className="text-center">HEALTH NOTICE</p>
    <p className="">
    <ul className="list-type-none">
    <li>Anyone who has had contact with any known COVID-19 cases or who has any flu symptoms or fever should STAY HOME and self-quarantine</li>
    <li>Attendees may be advised to wear masks and/or gloves</li>
    </ul>
    </p>
    </div>
  <div className="mt-5 row text-center text-light text-jost">
    <div className="col-12 col-md-4">
    <p className="">VENUE ADDRESS</p>
    <p className="">3, Victoria Street, Wadoye road, <br />Abe-Igi, pipeline, <br/> Baale-Ajuwon, Ogun state</p>
    
    </div>
    <div className="col-12 col-md-4">
    <p className="">CONTACT US</p>
     <p className="">+2348023417225 <br /> <a href="mailto:huj" className="text-light"> support@irapadacathedral.com</a></p>
    </div>
    <div className="col-12 col-md-4">
    <a href="" className="btn btn-light">Register</a>
    </div>
    </div>
    <div className="row text-jost text-center mt-5">
    <div className="col-12">
    <p className="text-light">MMXXI<br />
    <b>KING OF GLORY</b>
    <br />
    <small>&copy; 2021. Irapada Cathedral Media Team. All rights reserved</small>
    </p>
    </div>
    </div>
    </div>
    
    </React.Fragment>
    );
}

export default Footer;