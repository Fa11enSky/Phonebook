import { Container } from '@chakra-ui/react';
import { AddContactModal } from 'components/AddContactModal/AddContactModal';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'store/selectors';

export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
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
    </>
  );
};

export default Contacts;
