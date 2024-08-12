import React from "react";
import "../page/HomePgContent.css";
import icon1 from "../images/icon1.png"
// import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"

const HomePgContent = () => {
  return (
    <>
    <div
      className="container ct1 animate__animated animate__fadeInLeft"    
    >
      <div className="row">
        <div className="col-6">
          <h4>Advocate Portal</h4>
          <p><i>~ Provide a bridge between User and Advocate</i></p>
          <div class="box">
            <ol>
              <li>
                <strong> Allows clients to book at any time and place</strong>
                <br />
                <br />
              </li>
              <li>
                <strong>Book Appointments and Check Past Appointments</strong>
                <br />
                <br />
              </li>
              <li>
                <strong>Only use friendly environment</strong>
                <br />
                <br />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class=" container3 animate__animated animate__fadeInUp">
	<div class="boxA">
		<img src={icon1}/>
		<h3>Make an appointment</h3>
		<p>
		Patients can talk to you from the comfort of their own home
		</p>
	</div>
	
	<div class="boxB">
		{/* <img src={icon2}/> */}
		<img src={"https://cdn-icons-png.flaticon.com/512/12692/12692402.png"}/>
		<h3>Help by specialist Lawyer</h3>
		<p>"Receive expert legal guidance and advice from our specialist lawyer."
		</p>
	</div>
	
	<div class="boxC">
		<img src={icon3}/>
		<h3>Book appointment and Get Best advice from Lawyer</h3>
		<p >
		"Book an appointment and get the best advice from our experienced lawyer."
		</p>
	</div>
</div>

    </>
  );
};

export default HomePgContent;
