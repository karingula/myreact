import React from "react";
import PropTypes from 'prop-types';
export class Home extends React.Component {
    constructor(props) {
        super();
        this.age = props.age;
    }
    onMakeOlder() {
        this.age+=3;
        console.log(this.age)
    }
    render() {
        let greetings="welcome"
        return (
            <div>
                <p> In a new Component! </p>
                <p>{greetings}</p>
                <hr/>
                <p>Project Name: {this.props.name}</p>
                <p>Project Age: {this.props.age}</p>
                <button onClick={() => this.onMakeOlder()} className="btn btn-success"> Make shiny older </button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};