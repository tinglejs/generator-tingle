/**
 * <%= ComponentName %> Component Demo for tingle
 * @author <%= props.authorName %>
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

var classnames = require('classnames');

var <%= ComponentName %> = require('../src');

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
