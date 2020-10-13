import React from 'react';
import AddedFriend from '../AddedFriend/AddedFriend';

const Friend = (props) => {
    const friend=props.friend;
    
    const selary=friend.reduce((allcar,carr)=>Math.round(allcar+carr.dob.age*10.75) , 0)
    return (
        <div>
            <h4>This Is Frind</h4>
            <p>Added Friend : {friend.length}</p> 
            <p><small>Total selary : ${selary}</small></p>
            <h5>Added Friend's List</h5>
            {
                friend.map(friend=><AddedFriend friend={friend}></AddedFriend>)
            }
        </div>
    );
};

export default Friend;