import React from 'react';
import { render } from 'react-dom';
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        };
    }
    onGreet() {
        alert("Hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted

        });
    }
    render(){
        let homecmp = "";
        if (this.state.homeMounted) {
            homecmp = (<Home 
            name={"Shiny"}
            initialAge={25}
            greet={this.onGreet}
            changeLink={this.onChangeLinkName.bind(this)}
            initialLinkName={this.state.homeLink}
            />);
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homecmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-warning">(Un)Mount Home component </button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));