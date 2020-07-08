import React from 'react';

const OneCard = props => {
    console.log('The singular follower received is: ', props.person);
    console.log('The singular login is: ', props.person.login);

    const cardStyle = function() {
        return {
            subContainer: {
                width: '400px',
                background: 'silver',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderRadius: '20px',
                boxShadow: '-10px -10px 10px #C0C0C080',
                margin: '16px 0'
            },
            subImage: {
                height: '100px',
                width: '100px'
            },
            subData: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px'
            },
            text: {
                color: 'red'
            }
        };
    };

    return (
        <div style={cardStyle().subContainer}>
            <img src={props.person.avatar_url} style={cardStyle().subImage} />
            <div style={cardStyle().subData}>
                <h3 style={cardStyle().text}>{props.person.login}</h3>
                <p style={cardStyle().text}>ID: {props.person.id}</p>
            </div> 
        </div>
    );
};

export default OneCard;