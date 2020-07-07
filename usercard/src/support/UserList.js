import React from 'react';
import OneCard from './OneCard';

const UserList = props => {
    console.log('Received user in UserList: ', props.theUser);
    console.log('Received followers in UserList: ', props.theFollowers);
    return (
        <div>
            <div>
                <h2>User: {props.theUser.login}</h2>
                <p>Name: {props.theUser.name !== null ? props.theUser.name : 'Unknown'}</p>
                <p>Location: {props.theUser.location !== null ? props.theUser.location : 'Unknown'}</p>
                <p>Bio: {props.theUser.bio !== null ? props.theUser.bio : 'N/A'}</p>
            </div>
            <div>
                <h2>Followers: {props.theFollowers.length > 0 ? props.theFollowers.length : 'You have 0 friends'}</h2>
                {props.theFollowers.map(disciple => (
                    <OneCard key={disciple.id} person={disciple} />
                ))}
            </div>
        </div>
    );
};

export default UserList;