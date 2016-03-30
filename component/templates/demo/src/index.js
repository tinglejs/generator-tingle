/**
 * <%= ComponentName %> Component Demo for tingle
 * @author <%- props.authorName %>
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
require('tingle-context');
window.FastClick && FastClick.attach(document.body);
var Demo = require('./<%= ComponentName %>Demo');
ReactDOM.render(<Demo/>, document.getElementById('TingleDemo'));
