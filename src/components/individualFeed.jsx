import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


const IndividualFeed = () => {
    const selectedFeed = useSelector(state => state.selectedFeed.value);
    const history = useHistory();

    return (
        <Container fluid className="mt-3 mb-3">
            <Row>
                <Col xs={12} className="mt-3 mb-3">
                    <img src={selectedFeed.imageUrl} alt="" className="rounded-top" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="mb-3">
                    <strong>{selectedFeed.title}</strong><br />
                    <p>{selectedFeed.caption}</p>
                    <em className="text-muted">{selectedFeed.username}</em>
                </Col>
            </Row>
            <hr />
            <Button
                onClick={() => history.push("/")}
            >
                Back
            </Button>
        </Container>
    );
};
export default IndividualFeed;
