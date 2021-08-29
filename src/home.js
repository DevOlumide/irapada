import React,{useState} from "react";
import {Accordion, AccordionSummary, AccordionDetails, Card} from "@material-ui/core";
//import {ExpandMore} from "@material-ui/icons";



import Navbar from './navbar';
import Footer from './footer';


function Home(){
 
  
  return(
    <React.Fragment>
    <Navbar />
    <div className="container App ir-mt-6">
    <div className="row">
      <div className="text-playfair ir-small text-center">
    <span className="text-playfair"style={{wordSpacing: "3rem"}}> ISHAGA-ELLIOT MMXXI JAN,30
    </span>
      </div>
    </div>
    <div className="row text-jost">
      <h1 className="ir-large font-weight-x-bold my-4 text-jost">KING OF GLORY</h1>
      <p className="mb-5">Join hundreds of people who testify to God's
       redemption after worshipping with us every Sunday at 10:00am prompt.
      <p className="pt-4">
      <b>
      <a href="" className="ir-underline text-dark">See testimonies</a>
      </b>
      </p>
      </p>
    </div>
    <img src="/assets/images/landing.jpg"/>
    <p className="my-5">
    <span className="text-jost heading">
    WHO WE ARE
    </span>
    <p className="text-jost big">
     We are one body of the Celestial Church of Christ. Our mission is to help people break-free from the bondage and shackles of the opressor, to raise an army of Levites for Christ. We are a humble congregation of people united by christ.
    </p>
    </p>
    <video src="" />
    <br />
    <small className="text-jost">Watch a recap of last Sunday's sermon.</small>
    <p className="my-4">
    <b>
    <a href="" className="ir-underline text-dark text-jost">Register</a>
    </b>
    </p>
    <p className="mt-5 text-jost nowrap">
    <span className="heading">CHURCH SERVICES</span>
    <div className="row">
    <div className="col-4">
    <ul className="list-style-type-none">
    <li>
    <b>MONDAY</b>
    </li>
    <li>
    <b>TUESDAY</b>
    </li>
    <li>
    <b>WEDNESDAY</b>
    </li>
    <li>
    <b>WEDNESDAY</b>
    </li>
    <li>
    <b>THURSDAY</b>
    </li>
    <li>
    <b>FRIDAY</b>
    </li>
    <li>
    <b>FRIDAY</b>
    </li>
    <li>
    <b>SUNDAY</b>
    </li>
    <li>
    <b>SUNDAY</b>
    </li>
    </ul>
    </div>
    
    
    <div className="col-4">
    <ul className="list-style-type-none">
    <li>
    <b>10:00pm</b>
    </li>
  
    <li>
    <b>7:00am</b>
    </li>

    <li>
    <b>9:00am</b>
    </li>
 
    <li>
    <b>6:00pm</b>
    </li>
   
    <li>
    <b>12:00am</b>
    </li>
  
    <li>
    <b>3:00pm</b>
    </li>
    <li>
    <b>6:00pm</b>
    </li>
    <li>
    <b>9:00am</b>
    </li>
    <li>
    <b>10:00am</b>
    </li>
    </ul>
    </div>
    <div className="col-4">
    <ul className="list-style-type-none">
    <li>
    <b>Wardens Vigil</b>
    </li>
    <li>
    <b>Victory Prayers</b>
    </li>
    <li>
    <b>Supplicant Service</b>
    </li>
    <li>
    <b>Devotional Worship</b>
    </li>
    <li>
    <b>Prophets Vigil</b>
    </li>
    <li>
    <b>Service for pregnant women</b>
    </li>
    <li>
    <b>Devotional Service</b>
    </li>
    <li>
    <b>Bible Study</b>
    </li>
    <li>
    <b>Devotional Worship</b>
    </li>
    </ul>
    </div>
    </div>
    </p>
    <div className="text-jost">
    <i>
    Every First Thursday of the month, a special vigil know as the NEW MOON SERVICE takes place.
    </i>
    </div>
    <p className="mt-5 text-jost">
    <span className="heading">
    ADULT HARVEST
    </span>
    <p className="big">
    Our yearly Adult Harvest programme is a special programme designed by the church to thank God, and pray for achievements year on year
    <br />
    </p>
    <small className="text-jost text-muted">CHURCH PREMISES - DEC 21 </small>
    </p>
    <b>
    <a href="" className="ir-underline text-jost text-dark" >I will be visiting</a>
    
    </b>
    <div className="count-down">
    <div className=""></div>
    <div className=""></div>
    <div className=""></div>
    </div>
    <p className="mt-5 text-jost heading">Next Sunday</p>
   <small className="text-dark ir-underline text-jost">
   <b> Speakers</b>
   </small>
   <Card>
    <div className="row mt-3 text-jost">
    <div className="col-12 col-md-3">
    <img src="/assets/images/shepherd_pics.jpg"/>
    <p className="">SUP/EV/BAMBE<small className="x-small">GCOP,JP</small>
    <br />
    <span className=" ir-label">Sermoner</span>
    </p>
    </div>
    
    </div>
    </Card>
    <div className="text-jost mt-5">
    <span className="heading text-jost">ICIM JUVENILE</span>
    <p className="">
    <p className="big">
    Our weekly juvenile programme is designed for children between the age 1 - 18. The programme emphasizes our effort in helping to grow the next generation of Celestial Church of Christ. We teach them the bible and help them learn about God.
    </p>
    <br />
    <a href="" className="ir-underline text-dark">See juvenile</a>
    </p>
    </div>
    
    <div className="text-jost my-5">
    <span className="heading">
    DONATE TO A CAUSE
    </span>
    <p className="">He who gives to the poor, lends to the Lord and he will repay him for his deed was what the bible said in Proverbs 19:17. SOMEONE OUT THERE NEEDS YOUR HELP.
      Remember the word of the Lord Jesus Christ 
    <br />
    <q className="">It is more blessed to give than receive</q>.
    <p className="mt-5">
    <img src="/assets/images/poor-1.jpg" />
    <img src="/assets/images/poor-2.jpg" />
    </p>
    <p className="text-jost mb-5 text-left">
    <br />
    <b className="ir-underline"> I want to donate</b>
    </p>
    </p>
    </div>
    
    <div className="text-jost my-5">
    <b className="heading">FREQUENTLY ASKED QUESTIONS</b>
    <p className="mt-3">
    <Accordion>
    <AccordionSummary>
    <b> Is spiritual counselling available? </b>
    </AccordionSummary>
    <AccordionDetails>
    Yes! You have the chance of having a personal meeting with the spiritual head of the church from 9am to 7pm, every Tuesday, only.
    </AccordionDetails>
    </Accordion>
    
    
    <Accordion>
    <AccordionSummary>
    <b> Are revivals organised regularly? </b>
    </AccordionSummary>
    <AccordionDetails>
    All activities in the Celestial Church of Christ are inspired by God and based on the spiritual needs of the church. In a typical year we have about 3-5 revivals, all are directed by God and based on the spiritual needs of the church and not human selfish plans.
    </AccordionDetails>
    </Accordion>
    
    <Accordion>
    <AccordionSummary>
    <b> What if I am far away? </b>
    </AccordionSummary>
    <AccordionDetails>
    If you are far away and cannot be present physically, you can worship with us live, via this website or at irapadacathedral_1 on Instagram
    </AccordionDetails>
    </Accordion>
    </p>
    </div>
    <div className="text-jost text-left">
    <span className="heading">I WANT TO VOLUNTEER</span>
    <p className="">Volunteers! please reach out to <a href="mailto:irapadacathedral@gmail.com" className="text-dark">support@irapadacathedral.com</a></p>
    </div>
    
  
    </div>
  
    <Footer />
    </React.Fragment>
    )
}

export default Home;