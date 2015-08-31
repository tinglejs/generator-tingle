/**
 * <%= ComponentName %> Component Demo for tingle
 * @author <%= props.authorName %>
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
require('tingle-context');
window.FaskClick && FastClick.attach(document.body);
var Demo = require('./<%= ComponentName %>Demo');
React.render(<Demo/>, document.getElementById('TingleDemo'));