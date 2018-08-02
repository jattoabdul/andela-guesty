import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const UpdateTimeoutForm = props => {
    return (
        <div className="form-container">
            <Form>
                <FormGroup>
                    <Label for="addGuestName">Guest Name</Label>
                    <Input type="text" name="guestName" id="addGuestName"  placeholder="Add your guest name" value={props.guestName} disabled />
                </FormGroup>
                <FormGroup>
                    <Label for="timeIn">Time In</Label>
                    <Input type="text" name="timeIn" id="timeIn" placeholder="Visitor's Time In" value={props.timeIn} disabled />
                </FormGroup>
                <FormGroup>
                    <Label for="timeOut">Time Out</Label>
                    <Input type="text" name="time_out" id="timeOut" value={props.timeOut} placeholder={props.guest.time_out.format_24} onChange={props.onChange} />
                </FormGroup>
                <FormGroup check>
                    <Label for="tag_submitted" check>
                        <Input type="checkbox" name="tag_submitted" id="tag_submitted" value={props.tag_submitted} onChange={props.onCheckBox} />{' '}
                        Submit Tag
                    </Label>
                </FormGroup>
            </Form>
        </div>
    );
}

export default UpdateTimeoutForm;
