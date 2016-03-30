/**
 * <%= ComponentName %> Component for tingle
 * @author <%- props.authorName %>
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
const classnames = require('classnames');

// http://facebook.github.io/react/docs/reusable-components.html
const <%= ComponentName %> = React.createClass({
  getDefaultProps() {
    return {
      className: ''
    }
  },

  propTypes: {
    className: React.PropTypes.string
  },

  render() {
    return <div ref='root' className={classnames('t<%= ComponentName %>', {
        [this.props.className]: !!this.props.className
    })}>
        <%= ComponentName %> Component for Tingle!
    </div>;
  }
})

export default <%= ComponentName %>
