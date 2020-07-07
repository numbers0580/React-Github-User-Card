import React from 'react';

const OneCard = props => {
    console.log('The singular follower received is: ', props.person);
    console.log('The singular login is: ', props.person.login);
    return (
        <div>
            <h3>{props.person.login}</h3>
            <img src={props.person.avatar_url} />
        </div>
    );
};

export default OneCard;