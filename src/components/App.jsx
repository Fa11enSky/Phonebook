import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { selectIsLoading } from 'store/selectors';
import { useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import { ChakraProvider, Container } from '@chakra-ui/react';
import Header from './Header/Header';
import { AddContactModal } from './AddContactModal/AddContactModal';
const App = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <ChakraProvider>
      <div>
        <Header />

        <Container maxW="1000px">
          <AddContactModal />
        </Container>
        <h2
          style={{
            fontSize: '40px',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          Contacts
        </h2>
        <Filter />
        {isLoading && <Loader />}
        <ContactList />
      </div>
    </ChakraProvider>
  );
};
export default App;
