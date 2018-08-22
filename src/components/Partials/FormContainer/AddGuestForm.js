import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './Forms.scss';

const AddGuestForm = (props) => {
    return (
        <div className="form-container">
            <Form className="add-guest-form" inline>
                <FormGroup>
                    <Label for="addGuestName" hidden>Guest or Group Name</Label>
                    <Input type="text" name="guestName" id="addGuestName"  placeholder="Guest or Group Name" value={props.guestName}
                    onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="addGroupSize" hidden>Group Size</Label>
                    <Input type="text" name="groupSize" id="addGroupSize"  placeholder="Group Size" value={props.groupSize}
                    onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="timeIn" hidden>Time In</Label>
                    <Input type="text" name="timeIn" id="timeIn" placeholder="Time In" value={props.timeIn} onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="timeOut" hidden>Estimated Time Out</Label>
                    <Input type="text" name="timeOut" id="timeOut" placeholder="Estimated Time Out" value={props.timeOut} onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="addHostEmail" hidden>Host Email</Label>
                    <Input type="email" name="hostEmail" id="addHostEmail"  placeholder="Host's Andela Email" value={props.hostEmail}
                    onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="visitPurpose" hidden>Location</Label>
                    <Input type="select" name="location" id="location"     value={props.location} onChange={props.handleOnSelectCity} >
                        <option value="lagos">Lagos</option>
                        <option value="new-york">New York</option>
                        <option value="san-francisco">San Francisco</option>
                        <option value="nairobi">Nairobi</option>
                        <option value="kampala">Kampala</option>
                        <option value="kigali">Kigali</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="visitPurpose" hidden>Visit Purpose</Label>
                    <Input type="select" name="selectPurpose" id="visitPurpose"     value={props.selectPurpose} onChange={props.onChange} >
                        <option value="personal">personal</option>
                        <option value="official">official</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="tagNo" hidden>Tag No</Label>
                    <Input type="text" name="tagNo" id="tagNo" placeholder="Guest's ID Tag No" value={props.tagNo} onChange={props.onChange} />
                </FormGroup>
            </Form>
        </div>
    );
}

export default AddGuestForm;
