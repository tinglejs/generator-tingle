/**
 * <%= ComponentName %> Component for tingle
 * @author <%= props.authorName %>
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
var classnames = require('classnames');

class <%= ComponentName %> extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var t = this;
        return <div ref="root" className={classnames('t<%= ComponentName %>', {
            [t.props.className]: !!t.props.className
        })}>
            <%= ComponentName %> component for tingle
        </div>;
    }
}

<%= ComponentName %>.defaultProps = {
}

// http://facebook.github.io/react/docs/reusable-components.html
<%= ComponentName %>.propTypes = {
    className: React.PropTypes.string
}

<%= ComponentName %>.displayName = '<%= ComponentName %>';

module.exports = <%= ComponentName %>;
