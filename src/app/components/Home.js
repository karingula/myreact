import React from 'react';
import PropTypes from 'prop-types';
export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };
        setTimeout(() =>{
            this.setState({
                status:1
            });
        },3000);
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }
    render() {
        let greetings="welcome"
        return (
            <div>
                <p> In a new Component! </p>
                <p>{greetings}</p>
                <hr/>
                <p>Project Name: {this.props.name}</p>
                <p>Project Age: {this.state.age}</p>
                <p>Status: {this.state.status} </p>
                <button onClick={() => this.onMakeOlder()} className="btn btn-success"> Make shiny older </button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number
};