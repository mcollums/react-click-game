import React from "react";
import "./Header.css";

const style = {
    headerContainer: {
        maxWidth: "1521px",
        boxSizing: "border-box"
    },
    headerRow: {
        // paddingTop: "20px",
        // height: "100%",
        display: "flex",
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        // padding: "20px",
        // justifyContent: "space-around",
        // alignContent: "flex-start",
        // overflow: "auto"
    }
}

const Header = props => (
    // <div className="jumbotron jumbotron-fluid text-center h-auto">
    //     <div style={style.headerContainer} className="container h-auto">
    //         <div style={style.headerRow} className="row">
    //             <div className="col-4">
    //                 <h1 className="text-left">Clicky Game: Pokemon Edition</h1>
    //             </div>
    //             <div style={style} className="col-8">
    //                 <h4 id="score">Current Score: {props.score}</h4>
    //                 <h4 id="wins">Wins: {props.wins}</h4>
    //                 |
    //                 <h4 id="wins">Losses: {props.losses}</h4>
    //             </div>
    //             {/* <div className="col-6">
    //                 <h4 id="wins">Top Score: {props.wins}</h4>
    //             </div> */}
    //         </div>
    //     </div>
    // </div>

    <nav className="navbar navbar-light bg-light h-auto">
        <div className="row w-100">
            <div className="col-4">
                <h1 className="navbar-brand">Clicky Game: Pokemon Edition</h1>
            </div>
            <div className="col-6 float-right">
                <h4 id="score"> Current Score: {props.score}  Wins: {props.wins} | Losses: {props.losses} </h4>
            </div>
        </div>
    </nav>
);

export default Header;