import React from "react";
import PropTypes from 'prop-types';
export class Home extends React.Component {

    render() {
        console.log(this.props);
        let greetings="welcome"
        return (
            <div>
                <p> In a new Component! </p>
                <p>{greetings}</p>
                <p>Brand Name: {this.props.user.name}</p>
                <p>The car is categorized under:</p>
                <div> 
                    <ul> 
                        {this.props.user.category.map((feature, i) => <li key={i}>{feature}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};