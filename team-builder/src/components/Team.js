import React from "react";


function Team(props) {
    const {details} = props

    return (
        <div>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

export default Team;