import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import GameCard from "./GameCard";
import GameCol from "./GameCol";
import Header from "./Header";
import pokemon from "../pokemon.json"

class GameContainer extends Component {
    state = {
        pokemon
    };

    render() {
        return (
            <div>
                <Header />
                <Container fluid="-fluid">
                    <Row>
                        <Col size="10" id="titleCol">
                            <h3 className="text-center">Don't click the same card twice and you win!</h3>
                        </Col>
                    </Row>
                    <Row>
                        <GameCol size="10">
                            {this.state.pokemon.map(pokemon => (
                                <GameCard
                                    key={pokemon.id}
                                    id={pokemon.id}
                                    name={pokemon.name}
                                    image={pokemon.image}
                                />
                            ))}
                        </GameCol>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default GameContainer