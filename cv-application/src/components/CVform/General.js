import React from "react";

const General = (props) => {
    const { name, userDescription, number, email, adress, github } = props.attributes;


    return (
        <div className="form-container">
            <h1>Fill out the form to create your CV</h1>
            <input type='text' name="name" id="name" placeholder="Enter your names..." defaultValue={name}></input>

            <form>
                <input name="user-info" id="userDescription" placeholder="Describe yourself..." defaultValue={userDescription}></input>
                <input type='tel' name="number" id="number" placeholder="Your number..." defaultValue={number}></input>
                <input type='text' name="email" id="email" placeholder="Your email..." defaultValue={email}></input>
                <input type='text' name="adress" id="adress" placeholder="Your adress..." defaultValue={adress}></input>
                <input type='text' name="github" id="github" placeholder="Your github profile..." defaultValue={github}></input>
            </form>
        </div>
    )
}

export default General;