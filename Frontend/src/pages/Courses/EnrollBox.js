import React, { useState } from "react";
import Banner from "../../images/course1.webp";

function EnrollBox() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setPhoneNumberError("");

    if (email.length < 1) {
      setEmailError("*This field is required");
    } else {
      var regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      var validEmail = regEx.test(email);
      var spl1 = email.split("@");

      if (!validEmail) {
        setEmailError("*Enter a valid email");
      } else if (spl1[0].length < 3) {
        setEmailError("*Enter a valid email");
      }
    }

    if (phoneNumber.length < 10) {
      setPhoneNumberError("*Enter a valid phone number");
    } else if (!/^[0-9]{10}$/.test(phoneNumber)) {
      setPhoneNumberError("*Enter a valid 10-digit phone number");
    }
  };

  return (
    <div className="container-fluid my-4 py-4">
      <div className="row" style={{justifyContent:'right',alignItems:'right',position:'absolute',bottom:'4rem',left:'45rem'}}>
       

        <div className="col-lg-6 text-start pt-4">
          <form id="first_form1" onSubmit={handleSubmit}>
            <div className="container-fluid d-flex justify-content-center mb-4" style={{ backgroundColor: "" }}>
              <div className="signup">
                <div className="d-flex flex-column align-items-center mt-5 mb-4 pb-7 pt-7">
                  <h3 style={{ color: "#66023b",position:'relative',right:'2.5rem',fontWeight:'700',fontFamily:'serif' }}>Expert Learning<br/>
Consultant</h3>
                </div>
                <div className="mb-4 signin d-flex flex-column">
                  <input
                    type="text"
                    id="email"
                    onChange={handleEmailChange}
                    style={{ width: "300px", height: "40px" }}
                    placeholder="Email Address*"
                  />
                  {emailError && <span style={{ color: "red" }}>{emailError}</span>}
                </div>
                <div className="mb-4 signin d-flex flex-column">
                  <input
                    type="text"
                    id="phoneNumber"
                    onChange={handlePhoneNumberChange}
                    style={{ width: "300px", height: "40px" }}
                    placeholder="Phone Number*"
                  />
                  {phoneNumberError && <span style={{ color: "red" }}>{phoneNumberError}</span>}
                </div>
                <div className="d-flex flex-column signin mb-5">
                  <input
                    type="submit"
                    value="Request Call Back"
                    style={{
                      width: "300px",
                      height: "40px",
                      backgroundColor: "#66023b",
                      color: "#fff",
                      border: "#4a2c40",
                    }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EnrollBox;
