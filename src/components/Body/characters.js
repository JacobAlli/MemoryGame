import React from "react";
import "./characters.css";

const CharacterCard = props => (
        <button onClick={() => props.handleOnchange(props.id)}>
                <div className="cards">
                        <div className="img-container">
                                <img id={props.id} src={props.image} />
                        </div>
                </div>
        </button>
);

export default CharacterCard;
