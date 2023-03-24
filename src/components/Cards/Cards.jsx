import React from 'react';
import {Card} from "react-bootstrap";
import "./Cards.css";

const Cards = () => {

    const data = [
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
    ]

    const animate = "animate__animated animate__fadeInUp";

    return (
        <div className={"Cards"}>
            {
                data.map((variant,index) => (
                    <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        className={animate + ` animate__delay-${index}s`}
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>{variant} Card Title {index}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
        </div>
    );
};

export default Cards;
