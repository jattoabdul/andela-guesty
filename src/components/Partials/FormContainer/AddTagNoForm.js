import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const AddTagNoForm = props => {
    return (
        <div className="form-container">
            <Form>
                <FormGroup>
                    <Label for="addGuestName">Guest Name</Label>
                    <Input type="text" name="guestName" id="addGuestName"  placeholder="Add your guest name" value={props.guest.guest_name} disabled />
                </FormGroup>
                <FormGroup>
                    <Label for="tagNo">Tag No</Label>
                    <Input type="text" name="tag_no" id="tagNo" placeholder="Visitor's ID Tag No" value={props.tagNo} placeholder={props.guest.tag_no} onChange={props.onChange}/>
                </FormGroup>
                <FormGroup check>
                    <Label for="beep" check>
                        <Input type="checkbox" name="beep" id="beep" value={props.beep} onChange={props.onCheckBox} />{' '}
                        Beep
                    </Label>
                </FormGroup>
            </Form>
        </div>
    );
}

export default AddTagNoForm;
