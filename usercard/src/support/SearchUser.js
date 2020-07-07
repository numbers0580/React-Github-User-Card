import React from 'react';

import UserList from './UserList';

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
            <div>
                <form onSubmit={this.submitSearch}>
                    <label>Search Username:&nbsp;</label>
                    <input type='text' name='loginName' value={this.state.loginName} onChange={this.updateField} />
                    <button>Go!</button>
                </form>
                <UserList theUser={this.props.passedUser} theFollowers={this.props.passedFollowers} />
            </div>
        );
    }
}

export default SearchUser;