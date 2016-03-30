/**
 * <%= ComponentName %> Component for tingle
 * @author <%- props.authorName %>
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
const classnames = require('classnames');

// 如果需要则打开
//const Context = require('tingle-context');

class <%= ComponentName %> extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let t = this;
        return <div ref='root' className={classnames('t<%= ComponentName %>', {
            [t.props.className]: !!t.props.className
        })}>
            <%= ComponentName %> Component for Tingle!
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
