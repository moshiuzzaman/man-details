import React, { useEffect, useState } from 'react';
import users from '../../../fakeData/users';
import './Main.css'
import User from '../../User/User';
import Friend from '../../Friend/Friend';

const Main = () => {
    // api/?results=20
    const [user, setUser]=useState([])
    const [friend, setFriend]=useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=20')
        .then(res=>res.json())
        .then(data=>setUser(data['results']))
    },[])

    const clickHandelar=(props)=>{
        const newFriend=[...friend, props]
        setFriend(newFriend)
        
    }

    
    return (
        <div className="main">
           <div className="users">
              {
                  user.map(user=><User clickHandelar={clickHandelar} user={user}></User>)
              }
           </div>
           <div className="addSec">
               <Friend friend={friend}></Friend>
           </div>
        </div>
    );
};

export default Main;