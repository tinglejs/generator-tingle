/**
* <%= ComponentName %> Component Demo for tingle
* @author <%- props.authorName %>
*
* Copyright 2014-2016, Tingle Team.
* All rights reserved.
*/

const classnames = require('classnames');
// const Context = require('tingle-context');

const <%= ComponentName %> = require('../../src');

// build之后, 测试一下下面一行, 把上面一行注释掉
//const <%= ComponentName %> = require('../../dist');

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return <<%= ComponentName %>/>
  }
};

module.exports = Demo;
