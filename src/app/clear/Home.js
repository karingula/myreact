import React from 'react';
import PropTypes from 'prop-types';
export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() =>{
            this.setState({
                status:1
            });
        },3000);
        console.log("Inside Constructor");
    }
    componentWillMount() {
        console.log("Component will Mount...");
    }
    componentDidMount() {
        console.log("Component did mount");
    }
    componentWillReceiveProps(nextProps) {
        console.log("component will receive props", nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component update", nextProps, nextState);
        // if (nextState.status == 1) {
        //     return false;
        // }
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }
    componentWillUnmount() {
        console.log("Component will unmount");
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }
    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }
    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
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
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)} />
                <button onClick={() => this.onChangeLink()} className="btn btn-primary"> Change Header Link </button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};