import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const AddGuestForm = (props) => {
    return (
        <div className="form-container">
            <Form>
                <FormGroup>
                    <Label for="addHostEmail">Host Email</Label>
                    <Input type="email" name="hostEmail" id="addHostEmail"  placeholder="Add your andela email" value={props.hostEmail}
                    onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="addGuestName">Guest Name</Label>
                    <Input type="text" name="guestName" id="addGuestName"  placeholder="Add your guest name" value={props.guestName}
                    onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="visitPurpose">Visit Purpose</Label>
                    <Input type="select" name="selectPurpose" id="visitPurpose"     value={props.selectPurpose} onChange={props.onChange} >
                        <option value="personal">personal</option>
                        <option value="official">official</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="timeIn">Time In</Label>
                    <Input type="text" name="timeIn" id="timeIn" placeholder="Visitor's Time In" value={props.timeIn} onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="tagNo">Tag No</Label>
                    <Input type="text" name="tagNo" id="tagNo" placeholder="Visitor's ID Tag No" value={props.tagNo} onChange={props.onChange} />
                </FormGroup>
            </Form>
        </div>
    );
}

export default AddGuestForm;
