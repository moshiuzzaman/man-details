import React from 'react';
import "./AddedFriend.css"

const AddedFriend = (props) => {
    const user=props.friend;
    const name=user.name.first + " " + user.name.last
    const selary=Math.round(user.dob.age*10.75)
    const img=user.picture.large
    return (
        <div className="af">
            <img src={img} alt=""/>
            <h4>{name}</h4>
            <p>Age : {user.dob.age}</p>
            <p>selary : ${selary}</p>
            
        </div>
    );
};

export default AddedFriend;