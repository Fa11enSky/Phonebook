import { AddIcon } from '@chakra-ui/icons';

const {
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Modal,
  ModalBody,
  Box,
} = require('@chakra-ui/react');
const { default: ContactForm } = require('components/ContactForm/ContactForm');

export function AddContactModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mt={15}>
      <Button
        display="block"
        ml="auto"
        leftIcon={<AddIcon />}
        colorScheme="blue"
        onClick={onOpen}
      >
        Add Contact
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContactForm close={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
