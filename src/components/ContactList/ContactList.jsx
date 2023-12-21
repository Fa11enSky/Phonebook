import ContactsItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'store/selectors';
import { fetchContacts } from 'store/operations';
import { useEffect } from 'react';
import {
  Container,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filterValue = useSelector(selectFilter);
  const createRenderListContact = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };
  return (
    <Container maxW="1000">
      <TableContainer>
        <Table>
          <Thead>
            <Tr bg="#c0d4e0">
              <Th>Name</Th>
              <Th>number</Th>
              <Th textAlign="right">options</Th>
            </Tr>
          </Thead>
          <Tbody>
            {createRenderListContact().map(el => {
              return <ContactsItem key={el.id} contact={el} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default ContactList;
