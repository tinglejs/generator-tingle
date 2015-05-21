import React from 'react';

class Name extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div><%= name %> component</div>
        );
    }
}

Name.defaultProps = {
}

export {Name};