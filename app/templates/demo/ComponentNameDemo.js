/**
 * <%= ComponentName %> Component Demo for tingle
 * @author <%- props.authorName %>
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

const <%= ComponentName %> = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return <div>
            <<%= ComponentName %>/>
        </div>
    }
};

module.exports = Demo;
