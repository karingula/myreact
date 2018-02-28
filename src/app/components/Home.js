import React from 'react';
import PropTypes from 'prop-types';
export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: "Changed Link"
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
    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }
    render() {
        return (
            <div>
                <p> In a new Component! </p>
                <hr/>
                <p>Project Name: {this.props.name}</p>
                <p>Project Age: {this.state.age}</p>
                <p>Status: {this.state.status} </p>
                <button onClick={() => this.onMakeOlder()} className="btn btn-success"> Make shiny older </button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <button onClick={() => this.onChangeLink()} className="btn btn-primary"> Change Header Link </button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func
};