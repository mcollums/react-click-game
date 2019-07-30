import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import Header from "./Header";

class GameContainer extends Component {
    state = {

    };

    render() {
        return (
            <div>
            <Header/>
            <Container fluid="-fluid">
                <Row>

                </Row>
            </Container>
            </div>
        )
    }
}

export default GameContainer