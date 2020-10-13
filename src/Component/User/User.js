import React from 'react';
import './User.css'

const User = (props) => {
    const user=props.user;
    const name=user.name.first + " " + user.name.last
    const selary=Math.round(user.dob.age*10.75)
    const img=user.picture.large
    return (
        <div className="user">
            <img src={img} alt=""/>
            <h4>{name}</h4>
            <p>Age : {user.dob.age}</p>
            <p>selary : ${selary}</p>
            <button onClick={()=>props.clickHandelar(props.user)}>Add Friend</button>
        </div>
    );
};

export default User;