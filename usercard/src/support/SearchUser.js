import React from 'react';

import UserList from './UserList';

const searchStyle = function() {
    return {
        div: {
            margin: '20px 0'
        },

        label: {
            color: 'red',
            fontWeight: 'bold'
        },

        input: {
            background: 'black',
            color: 'white',
            border: '1px solid red',
            borderRadius: '5px',
            margin: '5px'
        },

        btn: {
            color: '#00FF00',
            background: 'inherit',
            border: '2px solid teal',
            borderRadius: '5px'
        }
    };
};

class SearchUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginName: '',
        }
    }

    updateField = uEvt => {
        this.setState({loginName: uEvt.target.value});
    };

    submitSearch = evt => {
        evt.preventDefault();
        if(this.state.loginName.length > 0) {
            this.props.findName(this.state.loginName);
        }
        this.setState({loginName: ''});
    };

    render() {
        console.log('Passed User is: ', this.props.passedUser);
        console.log('Passed Followers are: ', this.props.passedFollowers);
        return (
            <div style={searchStyle().div}>
                <form onSubmit={this.submitSearch}>
                    <label style={searchStyle().label}>Search Username:</label>
                    <input type='text' style={searchStyle().input} name='loginName' value={this.state.loginName} onChange={this.updateField} />
                    <button style={searchStyle().btn}>Go!</button>
                </form>
                <UserList theUser={this.props.passedUser} theFollowers={this.props.passedFollowers} />
            </div>
        );
    }
}

export default SearchUser;