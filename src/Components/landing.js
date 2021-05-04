import React from "react";
import Style from "../Components/landing.module.css";
import Logo from "../assets/workday.png";
import Gms from "../assets/gms.JPG";
import Login from "./login";
// import Verify from './verify';
import Verify from "../Components/verify";

let temp = false;
const tempFunc = () => {
    console.log("Temp func");
    temp = true;
  };
const Landing = () => {
  return (
    <div>
      <div className={Style.landing}>
        <div className={Style.leftBlock}>
          <img className={Style.images} src={Logo} alt="Logo" />
          <Login onRender={tempFunc} />
        </div>
        <div className={Style.rightBlock}>
          {temp?<Verify/>:console.log(temp)}
          <img className={Style.images} src={Gms} alt="gms" />
          <div className={Style.notice}>
            <h2>Notice</h2>

            <p>NOTICE TO USERS</p>
            <p>
              This computer system is the property of Workday and is for
              authorized use only. Users have no explicit or implicit
              expectation of privacy. By using this system, the user consents to
              interception, monitoring, recording, copying, auditing,
              inspection, and disclosure of information as needed to perform the
              legitimate business functions of Workday.
            </p>
            <p>
              If you have questions about this policy, please contact
              support@workday.com.
            </p>

            <h2>Status</h2>
            <p>
              Your Implementation tenant will be unavailable for a maximum of 12
              hours during the next Weekly Service Update; starting on Friday,
              February 5, 2021 at 6:00 PM PST (GMT-8) until Saturday, February
              6, 2021 at 6:00 AM PST (GMT-8).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
