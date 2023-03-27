import React, { useState } from "react";
import "./signup.css";
// import axios from "axios";
import { useEffect } from "react";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
 
const DonationForm = () => {
//   const [verified, setVerified] = useState(false);

//   const handleChange = (e) => {
//     SetData({ ...data, type: e.target.value });
//   };

  const [data, SetData] = useState({
    name:"",
    email: "",
    mobile: "",
    password: "",
    location: ""
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    SetData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });

    //   e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
  };

  useEffect(() => {
    //   axios
    //     .get(`https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`)
    //     .then(() => {
    //       setVerified(true);
    //       console.log("verified");
    //     })
    //     .catch(() => {
    //       alert("Id token is invalid please login again");
    //     });

  }, []);

    return (
      <div>
        <div className="page-wrapper bg-dark p-t-100 p-b-50">
          <div
            className="wrapper wrapper--w900"
            style={{ marginBottom: "200px" }}
          >
            <div className="card card-6">
              <div className="card-heading">
                <h2 className="title">Sign Up</h2>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-row">
                    <div className="name">Full name</div>
                    <div className="value">
                      <input
                        className="input--style-6"
                        type="text"
                        name="Harry Styles"
                        onChange={handleInputs}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Mobile No.</div>
                    <div className="value">
                      <div className="input-group">
                        <input
                          className="input--style-6"
                          type="1"
                          name="mobile"
                          placeholder="9999999999"
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Email</div>
                    <div className="value">
                      <div className="input-group">
                        <input
                          className="input--style-6"
                          type="text"
                          name="email"
                          placeholder="name@example.com"
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Password</div>
                    <div className="value">
                      <div className="input-group">
                        <input
                          className="input--style-6"
                          type="text"
                          name="password"
                          placeholder=""
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                  </form>
              <div className="card-footer">
                <button
                  className="btn btn--radius-2 btn--blue-2 bb"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Start Fundraiser
                </button>
              </div>
            </div>
            </div>
        </div>
      </div>
      </div>
    );
};

export default DonationForm;
