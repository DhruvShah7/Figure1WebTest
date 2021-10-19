import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectFeed } from '../features/feed';


const getRemoteData = async () => {
    return axios.get('/demoFeed')
        .then(({ data }) => {
            return data;
        })
        .catch((error) => {
            console.log('error');
            console.error(error);
        })
};

const ListMain = () => {
    const [feedItemsState, setFeedItemsState] = useState([]);

    const history = useHistory();
    const dispatch = useDispatch();
    
    useEffect(() => {
        getRemoteData().then(data => setFeedItemsState(data.feedItems || []));
    }, []);

    return (
        <Container className="mt-3" fluid>
            <Row className="mb-2 border-bottom">
                <Col className="text-center">
                    <h3>Feeds</h3>
                </Col>
            </Row>
            {feedItemsState.map((feed, i) => (
                <Row
                    key={i}
                    id="feedRow"
                    className="mb-2 border-bottom"
                    onClick={() => {
                        dispatch(selectFeed(feed));
                        history.push("/individualFeed");
                    }}
                >
                    <Col xs={12} sm={2} className="mt-3 mb-3">
                        <img src={feed.profileImageUrl} alt="" className="rounded-top"/>
                    </Col>
                    <Col xs={12} sm={10} className="mt-3 mb-3">
                        <strong>{feed.title}</strong><br/>
                        <em className="text-muted">{feed.username}</em>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

export default ListMain;
