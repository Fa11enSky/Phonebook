import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operations';
import { selectUser } from 'store/auth/selectors';
import { useSelector } from 'react-redux';
const UserMenu = () => {
  const user=useSelector(selectUser)
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <Box display="flex" alignItems="center" gap={10}>
      <Text fontWeight='500'  fontSize="3xl">
        Hello {user.name}
      </Text>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          <FaRegUser />
        </MenuButton>
        <MenuList bg="white">
          <MenuItem
            onClick={handleClick}
            as={Button}
            icon={<IoIosLogOut />}
            color="red"
          >
            Log out
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default UserMenu;
