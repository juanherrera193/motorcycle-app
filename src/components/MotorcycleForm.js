import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { Form, Button, Col, Container } from 'react-bootstrap';

import { saveMotorcycleAction } from '../actions/motorcycleActions';

class MotorcycleForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getMotorcycles: this.props.response.getMotorcycles.response
        };
    }

    manageData = (data) => {
        console.log(data);
        var motorcycle = {
            brand: data.brand,
            reference: data.reference,
            mileage: data.mileage,
            subcategory: data.subcategory,
            photoUrl: data.photoUrl,
            description: data.description
        }
        this.props.dispatch(saveMotorcycleAction(motorcycle));
        this.props.dispatch(reset('motorcycleForm'));
    }

    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <Container>
                <form onSubmit={handleSubmit(data => this.manageData(data))}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridBrand">
                            <Form.Label>Brand</Form.Label>
                            <Field className="form-control" name="brand" component="input" type="text" placeholder="Enter motorcycle brand" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridReference">
                            <Form.Label>Reference</Form.Label>
                            <Field className="form-control" name="reference" component="input" type="text" placeholder="Enter motorcycle reference" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridSubcategory">
                        <Form.Label>Subcategory</Form.Label>
                        <Field className="form-control" name="subcategory" component="input" type="text" placeholder="Enter motorcycle subcategory" />
                    </Form.Group>

                    <Form.Group controlId="formGridMileage">
                        <Form.Label>Mileage</Form.Label>
                        <Field className="form-control" name="mileage" component="input" type="number" placeholder="Enter mileage in kilometers" />
                    </Form.Group>

                    <Form.Group controlId="formGridPhotoUrl">
                        <Form.Label>Photo url</Form.Label>
                        <Field className="form-control" name="photoUrl" component="input" type="text" placeholder="Enter motorcycle photo url" />
                    </Form.Group>

                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Field className="form-control" name="description" component="textarea" rows="3" />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={submitting}>
                        Save
                    </Button>
                </form>
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

MotorcycleForm = connect(mapStateToProps)(MotorcycleForm);

export default reduxForm({ form: 'motorcycleForm' })(MotorcycleForm)