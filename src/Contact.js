import React from 'react'
class Contact extends React.Component {
    render(){
    return ( 
        <div className="contact" id="contact">
            <h1>Want to talk?</h1>
            <div className="name-field">
                <label htmlFor="name-input">Enter Name</label><br/>
                <input type="text" placeholder="Enter your name" id="name-input"/>
            </div>
            <div className="email-field">
                <label htmlFor="email-input">Enter Email</label><br/>
                <input type="text" placeholder="Enter your email address" id="email-input"/>
            </div>
        </div>
     );
    }
}
 
export default Contact;