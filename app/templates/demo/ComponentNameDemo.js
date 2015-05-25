
var <%= ComponentName %> = require('../src');

// TODO: move the line to tingle-env
React.initializeTouchEvents(true);

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