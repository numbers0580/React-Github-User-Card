import React from 'react';
import OneCard from './OneCard';

const UserList = props => {
    console.log('Received user in UserList: ', props.theUser);
    console.log('Received followers in UserList: ', props.theFollowers);

    const mainCard = function() {
        return {
            container: {
                width: '100%',
                margin: '2% 0',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            outer: {
                width: '600px',
                background: 'teal',
                border: '4px solid silver',
                borderRadius: '50px',
                display: 'flex',
                flexDirection: 'column',
            },
            top: {
                display: 'flex',
                justifyContent: 'space-between'

            },
            bottom: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                padding: '20px 40px'
            },
            left: {
                width: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            username: {
                fontSize: '2.5rem'
            },
            image: {
                height: '150px',
                width: '150px',
                border: '4px solid gold',
                borderRadius: '30px',
                margin: '10px'
            },
            p1: {
                fontWeight: 'bold'
            },
            p2: {
                color: 'red'
            },
            extramargin: {
                marginTop: '20px'
            }
        };
    };

    return (
        <div style={mainCard().container}>
            <div style={mainCard().outer}>
                <div style={mainCard().top}>
                    <div style={mainCard().left}>
                        <h2 style={mainCard().username}>{props.theUser.login}</h2>
                    </div>
                    <img src={props.theUser.avatar_url} style={mainCard().image} />
                </div>
                <div style={mainCard().bottom}>
                    <p style={mainCard().p1}>Name: {props.theUser.name !== null ? props.theUser.name : 'Unknown'}</p>
                    <p style={mainCard().p2}>Location: {props.theUser.location !== null ? props.theUser.location : 'Unknown'}</p>
                    <p style={mainCard().p2}>Bio: {props.theUser.bio !== null ? props.theUser.bio : 'N/A'}</p>
                </div>
            </div>
            <div style={mainCard().extramargin}>
                <h2>Followers: {props.theFollowers.length > 0 ? props.theFollowers.length : 'You have 0 friends'}</h2>
                {props.theFollowers.map(disciple => (
                    <OneCard key={disciple.id} person={disciple} />
                ))}
            </div>
        </div>
    );
};

export default UserList;