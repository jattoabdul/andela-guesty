import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AddGuestForm, AddTagNoForm, UpdateTimeoutForm } from '../FormContainer';
import './ModalContainer.scss';

const renderButton = (props) => {
    switch(props.actionName){
        case 'Add Guest': return <Button color="primary" onClick={props.addGuestAction}>Add Guest</Button>;
        case 'Add Tag No': return <Button color="primary" onClick={() => props.addTagAction(props.guest)}>Add Tag No</Button>;
        case 'Update Time Out': return <Button color="primary" onClick={() => props.updateTimeOut(props.guest)}>Update Time Out</Button>;
        default: return <Button color="primary" onClick={props.addGuestAction}>Add Guest</Button>;
    }
}

const renderForm = (props) => {
    switch(props.actionName){
        case 'Add Guest': return <AddGuestForm hostEmail={props.hostEmail} guestName={props.guestName} selectPurpose={props.selectPurpose} timeIn={props.timeIn} tagNo={props.tagNo} onChange={props.onChange} />;
        case 'Add Tag No': return <AddTagNoForm guest={props.guest} tagNo={props.tagNo} beep={props.beep} onChange={props.onChange} onCheckBox={props.onCheckBox} />;
        case 'Update Time Out': return <UpdateTimeoutForm guest={props.guest} timeOut={props.timeOut} tag_submitted={props.tag_submitted} onChange={props.onChange} onCheckBox={props.onCheckBox}/>;
        default: return <AddGuestForm hostEmail={props.hostEmail} guestName={props.guestName} selectPurpose={props.selectPurpose} timeIn={props.timeIn} tagNo={props.tagNo} onChange={props.onChange} />;
    }
}

const ModalContainer = props => {
    return (
        <div className="add-guest-modal">
            <Modal isOpen={props.isModalOpen} toggle={() => props.toggle('')}>
                <ModalHeader toggle={() => props.toggle('')}>
                    {props.actionName || "Andela Guesty Form"}
                </ModalHeader>
                <ModalBody>
                    <div className="action-form-container">
                        {renderForm(props)}
                    </div>
                </ModalBody>
                <ModalFooter>
                {renderButton(props)}{' '}
                <Button color="secondary" onClick={() => props.toggle('')}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalContainer;
