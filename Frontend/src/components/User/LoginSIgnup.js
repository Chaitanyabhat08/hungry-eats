import React, { useState } from "react";
import Banner from "../../../public/images/pexels-ella-olsson-1640773.jpg";
import "./Loginsignup.css";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [loginOtpOption, setLoginOtpOption] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);

  const [userName, setUserName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // Login form submit logic here
  };

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
    // Signup form submit logic here
  };

  const handleOtpFormSubmit = (e) => {
    e.preventDefault();
    // OTP form submit logic here
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex" }}>
          <div
            className="Section-1"
            style={{
              width: "65%",
              height: "51.5rem",
              backgroundColor: "rgb(233, 232, 233)",
              position: "relative",
            }}
          >
            <h1
              style={{
                position: "absolute",
                top: "40%",
                left: "25%",
                fontFamily: "cursive",
                color: "Black",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "78px",
                zIndex: 1,
              }}
            >
              Welcome To <br />
              Hungry Eats
            </h1>
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                maskImage: "linear-gradient(to right, transparent, rgba(233, 232, 233, 1))",
                zIndex: 2,
              }}
            ></div>
            <img src={Banner} alt="banner on signup" style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
          </div>
          <div className="Section-2" style={{ width: "35%", paddingTop: "100px", justifyContent: "center", backgroundColor: "whitesmoke" }}>
            <h1 style={{ fontFamily:"Cambria, Cochin, Georgia, Times,'Times New Roman', serif"}}>{!showSignup ? "LOGIN" : "SIGNUP"}</h1>
            <hr/>
            {showSignup && (
              <form class="form" onSubmit={handleSignupFormSubmit}>
                <p id="heading">
                  Already a User? <Link onClick={() => setShowSignup(false)}><br />Login</Link>
                </p>
                <div class="field">
                  <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="22" height="22" fill="currentColor">
                    <path d="M 25 7 C 16.47 7 11 12.147891 11 21.087891 L 11 26.058594 C 11 26.058594 10.175781 27.042656 10.175781 28.722656 C 10.175781 30.972656 11.908625 32.185172 13.140625 32.826172 C 14.546625 39.015172 21.294 43 25 43 C 28.706 43 35.453375 39.015172 36.859375 32.826172 C 38.091375 32.185172 39.824219 30.697266 39.824219 28.447266 C 39.824219 26.767266 39 26.058594 39 26.058594 L 39 21.087891 C 39 10.533891 32.923828 9.9375 32.923828 9.9375 C 32.923828 9.9375 29.804 7 25 7 z M 32.947266 17.246094 C 34.428266 18.555094 35.81975 21.92 36.96875 27 L 38.460938 27 C 38.649575 27.301063 38.822266 27.755472 38.822266 28.447266 C 38.822266 30.967266 35.986328 32.152344 35.986328 32.152344 C 34.814328 38.289344 28.085 42 25 42 C 21.915 42 15.277672 38.508344 14.013672 32.152344 C 14.013672 32.152344 11.175781 31.145656 11.175781 28.722656 C 11.175781 27.962052 11.384415 27.386416 11.591797 27 L 13.009766 27 L 14.501953 23.869141 C 22.937953 23.813141 29.197266 21.643094 32.947266 17.246094 z" />
                  </svg>
                  <input autoComplete="off" placeholder="Name" class="input-field" type="text" value={userName} required />
                </div>
                <div class="field">
                  <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                  </svg>
                  <input autoComplete="off" placeholder="Email" class="input-field" value={registerEmail} type="email" required />
                </div>
                <div className="field">
                  <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="21" height="21" fill="currentColor">
                    <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path>
                  </svg>
                  <input
                    autoComplete="off"
                    placeholder="Phone"
                    className="input-field"
                    type="text"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                    value={registerPhone}
                  />
                </div>
                <div class="field">
                  <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                  </svg>
                  <input placeholder="Password" class="input-field" type={passwordShown ? "text" : "password"} value={registerPassword} required />
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setPasswordShown((prevValue) => !prevValue)}
                    style={{ margin: 0, padding: 0, backgroundColor: "#ece7e7", borderRadius: "50%" }}
                  >
                    {passwordShown ? "🙈" : "👀"}
                  </button>
                </div>

                <div class="btn">
                  <button className="button1">Signup</button>
                </div>
              </form>
            )}
            {!showSignup && !loginOtpOption && (
              <div>
                <form class="form" onSubmit={handleLoginFormSubmit}>
                  <p id="heading">
                    New ?<Link onClick={handleSignupClick}> <br />Create your account</Link>
                  </p>
                  <div class="field">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                    </svg>
                    <input autoComplete="off" placeholder="Email" class="input-field" type="email" value={loginEmail} />
                  </div>
                  <div class="field">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                    </svg>
                    <input placeholder="Password" class="input-field" type={passwordShown ? "text" : "password"} value={loginPassword} required />
                    <button
                      type="button"
                      className="btn"
                      onClick={() => setPasswordShown((prevValue) => !prevValue)}
                      style={{ margin: 0, padding: 0, backgroundColor: "#ece7e7", borderRadius: "50%" }}
                    >
                      {passwordShown ? "🙈" : "👀"}
                    </button>
                  </div>

                  <div class="btn">
                    <button className="button1">Login</button>
                  </div>
                </form>
                <div>
                  <button id="option">Forgot Password?</button>
                  <button id="option" onClick={() => setLoginOtpOption(true)}>Login with OTP?</button>
                </div>
              </div>
            )}
            {loginOtpOption && 
              <>
              <form class="form" onSubmit={handleLoginFormSubmit}>
                <div className="field">
                  <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="21" height="21" fill="currentColor">
                    <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path>
                  </svg>
                  <input
                    autoComplete="off"
                    placeholder="Phone"
                    className="input-field"
                    type="text"
                    pattern="[0-9]{10}"
                    minLength={10}
                    required
                  />
                </div>
              </form>
              <button id="option" type="button" onClick={()=>setOtpRequested(true)}>Send OTP</button>
            </>
            }
            {loginOtpOption && otpRequested&&(
              <form class="otp-Form" onSubmit={handleOtpFormSubmit}>
                <span class="mainHeading">Enter OTP</span>
                <p class="otpSubheading">We have sent a verification code to your mobile number</p>
                <div class="inputContainer">
                  <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input1" />
                  <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input2" />
                  <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input3" />
                  <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input4" />
                </div>
                <button class="verifyButton" type="submit">Verify</button>
                <button class="exitBtn">×</button>
                <p class="resendNote">
                  Didn't receive the code? <button class="resendBtn">Resend Code</button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
