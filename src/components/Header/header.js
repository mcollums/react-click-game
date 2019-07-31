import React from "react";
import "./Header.css";

const Header = props => (
    <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
            <h1 className="display-4">Clicky Game: Pokemon Edition</h1>
            <div className="row justify-content-center">
                <div className="col-6">
                    <h4 id="cur-sco">Current Score: {props.score}</h4>
                </div>
                <div className="col-6">
                    <h4 id="cur-sco">Top Score: {props.topScore}</h4>
                </div>
            </div>
        </div>
    </div>
);

export default Header;