import React, { Component } from "react";
import Header from "../Header";
import Card from "../Characters";
import characters from "../../characters.json";
import "./style.css";

let currentScore = 0;
let topScore = 0;
let message = "Click on any character to start!";

class Game extends Component {
    state = {
        characters,
        currentScore,
        topScore,
        message
    };

    // Shuffle chracters each time 
    componentDidMount = () => {
        characters.sort((a, b) => {
            return 0.5 - Math.random();
        });
        this.setState({ characters });
    }

    // Handle Character Clicks
    handleClicked = id => {
        // Filter to get an array of unclicked
        const unclicked = this.state.characters.filter(character => character.clicked === false);
        // Filter to check if the current click is in the unclicked
        const charClicked = unclicked.filter(character => character.id === id);

        // If it's been clicked
        if (charClicked.length === 0) {
            currentScore = 0;
            message = "You guessed incorrectly! Try Again!";

            // rest all character to unclicked
            for (let i = 0; i < characters.length; i++) {
                characters[i].clicked = false;
            }

            // reshuffle
            characters.sort((a, b) => {
                return 0.5 - Math.random();
            });

            this.setState({
                characters,
                currentScore,
                message
            });
        }
        // if not been clicked
        else {
            charClicked[0].clicked = true;
            // if guessed all of them
            if (this.state.currentScore === 12) {
                currentScore = 0;
                topScore = 0;
                message = "You got all of them! Great Job!";
                this.setState({ topScore });

                // reset all characters' click to false
                for (let i = 0; i < characters.length; i++) {
                    characters[i].clicked = false;
                }
            } else {
                currentScore = currentScore + 1;
                message = "You gussed correctly!";

                if (currentScore > topScore) {
                    topScore = currentScore;
                    this.setState({ topScore });
                }
            }

            // reshuffle
            characters.sort((a, b) => {
                return 0.5 - Math.random();
            });

            this.setState({
                characters,
                currentScore,
                message
            });
        }
    }

    render() {
        return (
            <div>
                <Header currentScore={this.state.currentScore} topScore={this.state.topScore} message={this.state.message} />
                <div className="container-fluid p-0">
                    <div className="row mainGame p-4">
                        {/* <div className="col-12"> */}
                            {this.state.characters.map(character => (
                                <Card
                                    handleClicked={this.handleClicked}
                                    id={character.id}
                                    key={`STchar-${character.id}`}
                                    name={character.name}
                                    image={character.image}
                                />
                            ))}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;