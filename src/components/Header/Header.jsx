import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { LockIcon, AddIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { FaRegUser } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Container
        borderTopRadius="none"
        borderBottomRadius="lg"
        maxW="1000px"
        color="white"
        bg="blue.600"
      >
        {/* Тут прописані інлайнові колбеки навігації */}
        <Flex alignItems="center">
          <Text fontSize="6xl">Phonebook</Text>
          <Spacer />
          <ButtonGroup gap="2">
            <Button
              onClick={() => {
                navigate('/login');
              }}
              leftIcon={<LockIcon />}
            >
              {' '}
              Sing Up
            </Button>
            <Button
              onClick={() => {
                navigate('/register');
              }}
              colorScheme="red"
              leftIcon={<AddIcon />}
            >
              Sing In
            </Button>
          </ButtonGroup>
          <Box>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <FaRegUser />
              </MenuButton>
              <MenuList bg="white" marginLeft="100px">
                <MenuItem icon={<IoIosLogOut />} color="red">
                  Log out
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
