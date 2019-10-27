import React from "react";
import "./style.css";

function Header(props) {
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row p-3">
                    <div className="col-3 text-center">
                        <a href="/"><img alt="Stranger Things" id="STlogo" src="./imgs/logo.png" className="img-fluid"></img></a>
                    </div>
                    <div className="col-6 p-3 gameTitle">
                        <h1 className="text-center mt-3">Stranger Things Memory Game</h1>
                        <h6 className="description text-center mt-3">Click on an image to earn points, but don't click on any more than once!</h6>
                    </div>
                    <div className="col-3 p-4 scores">
                        <div className="currentScore row text-center">
                            <div className="col">
                                Current Score: {props.currentScore}
                            </div>
                        </div>
                        <div className="topScore row text-center">
                            <div className="col">
                                Top Score: {props.topScore}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row message text-center">
                    <div className="col">
                        <h3 className="m-0">{props.message}</h3>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;