import React, { useState } from "react";
import "../signup/signup.css";
import {  signInWithEmailAndPassword  } from 'firebase/auth';
import { auth} from '../firebase';
 
const Login = () => {

  const [data, SetData] = useState({
    email:"",
    password: "",
  });

  const [err,seterr]=useState("");

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    SetData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
     
      try {
        await signInWithEmailAndPassword(auth, data.email, data.password).then(()=>{
          console.log("LoginSuccessful");
        });

      } catch (err) {
        seterr("Either email or password not found!!");
        console.log("error");
      }
 
  };

    return (
      <section id="signup">
        <div style={{height:'10vh'}}></div>
        <div className="signup-card">
              <div className="card-heading">Login</div>
              <div className="card-body">
                <div className="signup-error">{err}</div>
                <form>
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
                </form>
              <div className="card-footer">
                <button
                  className="signup-button"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
        </div>
        </div>
      </section>
    );
};

export default Login;
