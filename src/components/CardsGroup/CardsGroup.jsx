import React from 'react';
import "./CardsGroup.css";
import {Card, CardGroup} from "react-bootstrap";

const CardsGroup = () => {

    const animate = "animate__animated animate__fadeIn";
    const img = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22242%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20242%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1870a70f536%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A12pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1870a70f536%22%3E%3Crect%20width%3D%22242%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2289.3671875%22%20y%3D%2285.7%22%3E242x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

    return (
        <div className={"CardsGroup"}>
            <CardGroup>
                {
                    [1,2,3].map(elem => (
                        <Card key={elem} className={animate + ` animate__delay-${elem}s`}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    ))
                }
            </CardGroup>
        </div>
    );
};

export default CardsGroup;
