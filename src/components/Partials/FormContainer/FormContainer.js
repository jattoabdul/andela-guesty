import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './FormContainer.scss';


const FormContainer = props => {
    return (
        <div className="form-container">
            <Form>
                <FormGroup>
                    <Label for={props.hostNameId}>Host Name</Label>
                    <Input type="text" name="hostName" id={props.hostNameId} placeholder="Add your name" />
                </FormGroup>
                <FormGroup>
                    <Label for={props.guestNameId}>Guest Name</Label>
                    <Input type="text" name="guestName" id={props.guestNameId} placeholder="Add your guest name" />
                </FormGroup>
            </Form>
        </div>
    );
}

export default FormContainer;
