import React from "react";
import "./support.css";

function Footer() {
    return (
        <div className="footer">
            <p>© 2023 Placeholder1</p>
        </div>
    )
}

function Support() {
    return (
        <div className="support">
            <h1>Support Us</h1>
            <p>Our mission is to provide a platform for restaurants and food banks to connect and share resources. We want to help restaurants and food banks work together to reduce food waste and provide food to those in need. We are currently in the process of building our platform and are looking for restaurants and food banks to partner with. If you are interested in partnering with us, please <a href="mailto:placeholder@gmail.com">contact us.</a></p>
            <div className="card-wrapper">
                <div className="card">
                    <h2>Volunteer</h2>
                    <p>Volunteer with us to help us build our platform and connect restaurants and food banks.</p>
                </div>
                <div className="card">
                    <h2>Partner</h2>
                    <p>Partner with us to help us build our platform and connect restaurants and food banks.</p>
                </div>
                <div className="card">
                    <h2>Share</h2>
                    <p>Share our cause with your friends and family to help us build our platform.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Support;