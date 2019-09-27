import React, { Component } from 'react';

import { Container, Row, Col, FormLabel, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class MotorcycleList extends Component {
    render() {
        return (
            <Container>

                <Row className="justify-content-md-center">
                    <Col sm={5}>
                        <Card >
                            <Card.Img variant="top" src="https://d2ukjpq35mtkrr.cloudfront.net/FotosVO/biz/BIG_jpg_mPAVP7.jpg" />
                            <Card.Body>
                                <Card.Title>Kawasaki Versys 650</Card.Title>
                                <Card.Text>
                                In excellent condition, it only has 5.000 kms, it is sold with saddlebags
                            </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><FormLabel>Mileage</FormLabel>: 5000 kms</ListGroupItem>
                                <ListGroupItem><FormLabel>Subcategory</FormLabel>: Touring</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
                <hr />
                
            </Container>

        )
    }
}

export default MotorcycleList;