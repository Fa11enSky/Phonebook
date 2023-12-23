import { Container, Text } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import LoginNav from 'components/LoginNav/LoginNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/auth/selectors';
import { useMediaQuery } from '@chakra-ui/react';

const Header = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const setFontsize = () => {
    return isLargerThan600?'6xl':'3xl'
  }
  
  return (
    <header
      style={{
        backgroundColor: '#3182ce',
      }}
    >
      <Container
        borderTopRadius="none"
        borderBottomRadius="lg"
        maxW="1000px"
        color="white"
      >
        <Flex alignItems="center">
          
            <Text fontSize={setFontsize()}>Phonebook</Text>
          
          <Spacer />
          {isLoggedIn ? <UserMenu size={ isLargerThan600} /> : <LoginNav />}
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
