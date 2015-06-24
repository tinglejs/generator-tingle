// TODO: move the two lines below to tingle-context
require("fastclick").attach(document.body);
React.initializeTouchEvents(true);


var <%= ComponentName %> = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <<%= ComponentName %>/>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));