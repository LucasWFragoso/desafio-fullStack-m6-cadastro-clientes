import React from 'react';
import Modal from 'react-modal';
import CreateContactForm from './createContactForm';

interface CreateContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}
const CreateContactModal: React.FC<CreateContactModalProps> = ( {isOpen, onClose} ) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <CreateContactForm onClose={onClose}/>
    </Modal>
  );
};

export default CreateContactModal;