import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalContainer.scss';


const ModalContainer = props => {
    return (
        <div className="add-guest-modal">
            <Modal isOpen={props.isModalOpen} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>{props.isAdd ? 'Add' : 'Edit'} Guest Entry</ModalHeader>
                <ModalBody>
                    {props.children}
                </ModalBody>
                <ModalFooter>
                { props.isAdd ?
                    <Button color="primary" onClick={props.addAction}>Add</Button> : <Button color="primary" onClick={props.editAction}>Edit</Button>   
                }{' '}
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalContainer;
