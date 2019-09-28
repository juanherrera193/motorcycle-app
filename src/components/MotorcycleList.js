import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, FormLabel, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import { getMotorcyclesAction } from '../actions/motorcycleActions';

class MotorcycleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getMotorcycles: this.props.response.getMotorcycles.response
        };
    }

    componentDidMount() {
        this.props.dispatch(getMotorcyclesAction());
    }

    componentWillReceiveProps(nextProps) {

        if (this.props !== nextProps
            && !this.props.response.getMotorcycles.hasOwnProperty('response')
            && nextProps.response.getMotorcycles.hasOwnProperty('response')
            && nextProps.response.getMotorcycles.response !== undefined) {
            this.setState({ getMotorcycles: nextProps.response.getMotorcycles.response.response });
        }
    }

    render() {
        let motorcyclesResponse = this.state.getMotorcycles;
        console.log(motorcyclesResponse);
        return (
            <Container>
                {motorcyclesResponse !== undefined ?
                    motorcyclesResponse.map((motorcycle) =>
                        <div key={motorcycle.id}>
                            <Row className="justify-content-md-center" >
                                <Col sm={5}>
                                    <Card>
                                        <Card.Img variant="top" src={motorcycle.photoUrl} />
                                        <Card.Body>
                                            <Card.Title>{motorcycle.brand} {motorcycle.reference}</Card.Title>
                                            <Card.Text>
                                                {motorcycle.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem><FormLabel>Mileage</FormLabel>: {motorcycle.mileage} kms</ListGroupItem>
                                            <ListGroupItem><FormLabel>Subcategory</FormLabel>: {motorcycle.subcategory}</ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            </Row>
                            <hr />
                        </div>
                    )
                    : <div />}
            </Container>
        )
    }
}

const mapStateToProps = (response) => {
    console.log(response);
    return {
        response: response
    }
}

export default connect(mapStateToProps)(MotorcycleList);