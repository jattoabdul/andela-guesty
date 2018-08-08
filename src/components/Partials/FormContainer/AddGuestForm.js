import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const AddGuestForm = (props) => {
    return (
        <div className="form-container">
            <Form>
                <FormGroup>
                    <Label for="addHostEmail">Host Email</Label>
                    <Input type="email" name="hostEmail" id="addHostEmail"  placeholder="Andela email" value={props.hostEmail}
                    onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="addGuestName">Guest or Group Name</Label>
                    <Input type="text" name="guestName" id="addGuestName"  placeholder="Add your guest/group name" value={props.guestName}
                    onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="addGroupSize">Group Size</Label>
                    <Input type="text" name="groupSize" id="addGroupSize"  placeholder="Number of guest Expected" value={props.groupSize}
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
                    <Input type="text" name="timeIn" id="timeIn" placeholder="Guest's Time In" value={props.timeIn} onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="timeOut">Estimated Time Out</Label>
                    <Input type="text" name="timeOut" id="timeOut" placeholder="Guest's Estimated Time Out" value={props.timeOut} onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="tagNo">Tag No</Label>
                    <Input type="text" name="tagNo" id="tagNo" placeholder="Guest's ID Tag No" value={props.tagNo} onChange={props.onChange} />
                </FormGroup>
            </Form>
        </div>
    );
}

export default AddGuestForm;
