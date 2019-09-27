import React, { Component } from 'react';

import { Form, Button, Col, Container } from 'react-bootstrap';

class MotorcycleForm extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridBrand">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control type="text" placeholder="Enter motorcycle brand" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridReference">
                            <Form.Label>Reference</Form.Label>
                            <Form.Control type="text" placeholder="Enter motorcycle reference" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridSubcategory">
                        <Form.Label>Subcategory</Form.Label>
                        <Form.Control type="text" placeholder="Enter motorcycle subcategory" />
                    </Form.Group>

                    <Form.Group controlId="formGridMileage">
                        <Form.Label>Mileage</Form.Label>
                        <Form.Control type="number" placeholder="Enter mileage in kilometers" />
                    </Form.Group>

                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default MotorcycleForm;