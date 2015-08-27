/**
 * <%= ComponentName %> Component for tingle
 * @author <%= props.authorName %>
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

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

// http://facebook.github.io/react/docs/reusable-components.html
<%= ComponentName %>.propTypes = {
}

<%= ComponentName %>.displayName = '<%= ComponentName %>';

module.exports = <%= ComponentName %>;
