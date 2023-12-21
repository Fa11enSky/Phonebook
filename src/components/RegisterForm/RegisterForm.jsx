import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/', { replace: true });
    }
  return (
    <Container pt={30}>
      <form>
        <Box
          padding="15px"
          maxWidth={500}
          border="2px solid #3b3b3b4e"
          borderRadius="12"
        >
          <Text fontSize="3xl" fontWeight={500}>
            Create account
          </Text>
          <FormControl isRequired>
            <FormLabel fontSize={24}>Your name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={24}>Your email</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl mb={15} isRequired>
            <FormLabel fontSize={24}>Your password</FormLabel>
            <Input type="password" />
          </FormControl>
          <ButtonGroup gap={15}>
            <Button colorScheme="green">Register</Button>
            <Button colorScheme="blue" onClick={handleNavigate}>Back</Button>
          </ButtonGroup>
        </Box>
      </form>
    </Container>
  );
};
