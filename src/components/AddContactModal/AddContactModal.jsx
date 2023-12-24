
const {
  
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Modal,
  ModalBody,
  
} = require('@chakra-ui/react');
const { default: ContactForm } = require('components/ContactForm/ContactForm');

export function AddContactModal({isOpen,onClose}) {
  return (
    
      <Modal   isOpen={isOpen} onClose={onClose}>
        <ModalOverlay  />
        <ModalContent >
          <ModalHeader>Add Contact</ModalHeader>
          
          <ModalBody><ModalCloseButton />
            <ContactForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    
  );
}
