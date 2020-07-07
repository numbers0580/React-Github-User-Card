import React from 'react';

class SearchID extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <form>
                <label>Search ID #:&nbsp;</label>
                <input type='number' />
                <button>Go!</button>
            </form>
        );
    }
}

export default SearchID;