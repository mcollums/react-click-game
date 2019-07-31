import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import GameCard from "./GameCard";
import GameCol from "./GameCol";
import Header from "./Header";
import pokemon from "../pokemon.json"

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

class GameContainer extends Component {
    state = {
        pokemon,
        score: 0,
        wins: 0,
        losses: 0,
        clicked: [],
        message: ""
    };

    //method that shuffles tiles
    //method that handles click
        //if pokemon is not in the clicked array...
            //add it to the click array
            //increase score by one
        //if pokemon is in the clicked array...
            //increase losses by one
            //score resets
    //

    handleClick(id) {
        console.log(id);
    }

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
                                    handleClick={this.handleClick}
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