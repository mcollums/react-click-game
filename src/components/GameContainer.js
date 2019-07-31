import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import GameCard from "./GameCard";
import Header from "./Header";
import "../pokemon.json"

class GameContainer extends Component {
    state = {

    };

    renderPokemon() {

        // <GameCard></GameCard> 
    }


    
    render() {
        return (
            <div>
            <Header/>
            <Container fluid="-fluid">
                <Row>
                    <Col size="10" id="titleCol">
                        <h3 className="text-center">Don't click the same card twice and you win!</h3>
                    </Col>
                    <Col size="10"> 
                       
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default GameContainer