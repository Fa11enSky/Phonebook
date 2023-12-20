import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/operations';
import { Button, Td, Tr } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <Tr>
      <Td>{contact.name}</Td>
      <Td>{contact.phone}</Td>
      <Td textAlign='right'>
        <Button colorScheme='red' onClick={handleDelete}>
          <DeleteIcon color='inherit' />
        </Button>
      </Td>
    </Tr>
  );
};
export default ContactsItem;
