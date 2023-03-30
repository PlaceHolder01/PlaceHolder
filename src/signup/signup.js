import React, { useState } from "react";
import "./signup.css";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {doc,setDoc} from "firebase/firestore";
import { auth,db } from '../firebase';
 
const SignUp = () => {

  const [data, SetData] = useState({
    name:"",
    email:"",
    mobile: "",
    password: "",
    repassword:""
  });

  const [err,seterr]=useState("");

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    SetData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    let location;
    navigator.geolocation.getCurrentPosition((position)=>{
      location={
        lat:position.coords.latitude,
        long:position.coords.longitude
      }
      });

      if(data.name.length===0)
      {
        seterr("Name is missing");
        return;
      }

      if(data.email.length===0 || data.email.search("@")===-1)
      {
        seterr("Enter a valid Email");
        return;
      }
      if(data.mobile.length < 10)
      {
        seterr("Enter a valid phone number");
        return;
      }

      if(data.password.length<6)
      {
        seterr("Password length should be greater than 6");
        return;
      }
      if(data.password!==data.repassword)
      {
        seterr("Passwords are not matching");
        return;
      }
     
      await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            // const usercollection=collection(db, "users");
            setDoc(doc(db,"users",user.uid), {     
              name: data.name,
              email: data.email,
              location: location,
              mobile:data.mobile
              }).then(() => { 
              // Data saved successfully!
              console.log('data submitted');  
              navigator('/login');
        
            }).catch((error) => {
              seterr("Email already Registered");
            });
        })
        .catch((error) => {
            console.log(error);
        });
 
  };

    return (
      <section id="signup">
        <div style={{height:'10vh'}}></div>
        <div className="signup-card">
              <div className="card-heading">Sign Up</div>
              <div className="card-body">
                <div className="signup-error">{err}</div>
                <form>
                  <div className="form-row">
                    <div className="signup-row-title">Full name</div>
                    <div className="signup-value">
                      <input
                        className="signup-input"
                        type="text"
                        name="name"
                        onChange={handleInputs}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="signup-row-title">Mobile No.</div>
                    <div className="signup-value">
                        <input
                          className="signup-input"
                          type="1"
                          name="mobile"
                          placeholder="9999999999"
                          onChange={handleInputs}
                        />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="signup-row-title">Email</div>
                    <div className="signup-value">
                        <input
                          className="signup-input"
                          type="text"
                          name="email"
                          placeholder="name@example.com"
                          onChange={handleInputs}
                        />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="signup-row-title">Password</div>
                    <div className="signup-value">
                        <input
                          className="signup-input"
                          type="password"
                          name="password"
                          onChange={handleInputs}
                        />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="signup-row-title">Retype-Password</div>
                    <div className="signup-value">
                        <input
                          className="signup-input"
                          type="password"
                          name="repassword"
                          onChange={handleInputs}
                        />
                    </div>
                  </div>
                </form>
              <div className="card-footer">
                <button
                  className="signup-button"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
        </div>
        </div>
      </section>
    );
};

export default SignUp;
