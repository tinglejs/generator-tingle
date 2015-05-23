import React from 'react';

class <%= ComponentName %> extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div><%= name %> component</div>
        );
    }
}

<%= ComponentName %>.defaultProps = {
}

export {<%= ComponentName %>};