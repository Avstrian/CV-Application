import React, { Component } from "react";

class General extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="general-container">
                <h1 className="title"><input type='text' name="name" id="name" placeholder="Enter your names..."></input></h1>

                <form>
                    <div className="user-description">
                        <input type='text' name="profession" id="profession" placeholder="Enter your profession..."></input>
                        <textarea name="user-info" id="user-description" placeholder="Describe yourself..."></textarea>
                    </div>

                    <div className="user-contacts">
                        <input type='tel' name="number" id="number" placeholder="Your number..."></input>
                        <input type='text' name="email" id="email" placeholder="Your email..."></input>
                        <input type='text' name="adress" id="adress" placeholder="Your adress..."></input>
                        <input type='text' name="github" id="github" placeholder="Your github profile..."></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default General;