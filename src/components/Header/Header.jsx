import { Container, Text } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import LoginNav from 'components/LoginNav/LoginNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/auth/selectors';
const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header style={{ backgroundColor: '#3182ce' }}>
      <Container
        borderTopRadius="none"
        borderBottomRadius="lg"
        maxW="1000px"
        color="white"
      >
        <Flex alignItems="center">
          <Text fontSize="6xl">Phonebook</Text>
          <Spacer />
          {isLoggedIn ? <UserMenu /> : <LoginNav />}
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
