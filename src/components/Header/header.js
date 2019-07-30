import React from "react";
import "./header.css";

const Header = props => (
    <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
            <h1 className="display-4">Clicky Game: Pokemon Edition</h1>
            <ul>
                <li id="cur-sco">Current Score: {props.score}</li>

                <li id="top-sco">Top Score: {props.topScore}</li>
            </ul>
        </div>
    </div>
);

export default Header;