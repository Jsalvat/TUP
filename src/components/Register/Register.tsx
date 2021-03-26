import React, { useState } from 'react';
import { AppDispatch, AppState } from '../../store/store';
import {
  Input,
  Text,
  InputRightElement,
  Button,
  InputGroup,
  Box,
  Stack,
  FormLabel,
  FormControl,
  FormHelperText,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import styles from './register.module.scss';
import userAuthSlice from '../../store/userAuth/userAuthSlice';
import { isJSDocDeprecatedTag } from 'typescript';

interface RegisterProps {
  loading: boolean;
  registerUser: (user: RegisterUserProps) => void;
}

interface RegisterUserProps {
  email: undefined | string;
  password: undefined | string;
}

const UnconnectedRegister: React.FC<RegisterProps> = ({
  loading,
  registerUser,
}) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [user, setUser] = useState<RegisterUserProps>({
    email: undefined,
    password: undefined,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const { value } = event.target;
    console.log(type);
    type === 'email'
      ? setUser((prevState) => ({
          ...prevState,
          email: value,
        }))
      : setUser((prevState) => ({
          ...prevState,
          password: value,
        }));
  };

  return (
    <div className={styles.registerContainer}>
      <Box
        maxW="xl"
        w="400px"
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        borderColor="teal"
      >
        <Text fontWeight="bold" fontSize="24px" color="teal" mb={2}>
          Regístrate
        </Text>
        <Text fontSize="14px" as="sup" color="teal">
          Esta es el primero y último cuestionario que os hacemos
        </Text>
        <Stack spacing={4} pt={4}>
          <FormControl id="username">
            <FormLabel>Nombre de Usuario</FormLabel>
            <Input
              placeholder="Nombre de Usuario"
              name="username"
              size="md"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, 'username')
              }
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Email"
              size="md"
              name="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, 'email')
              }
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Contraseña</FormLabel>
            <InputGroup size="md">
              <Input
                placeholder="Contraseña"
                type={show ? 'text' : 'password'}
                size="md"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e, 'password')
                }
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShow(!show)}
                  isDisabled={!user.password}
                >
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Repetir Contraseña</FormLabel>
            <InputGroup size="md">
              <Input
                placeholder="Repetir Contraseña"
                type={show2 ? 'text' : 'password'}
                size="md"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e, 'repassword')
                }
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShow(!show)}
                  isDisabled={!user.password}
                >
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Stack>
        <Button
          isFullWidth
          mt={6}
          colorScheme="teal"
          onClick={() => registerUser(user)}
          isLoading={loading}
        >
          Regístrate
        </Button>
      </Box>
    </div>
  );
};

const Register = connect(
  (state: AppState) => ({
    loading: state.userAuth.loading,
  }),
  (dispatch: AppDispatch) => ({
    registerUser: (user: RegisterUserProps) =>
      dispatch(userAuthSlice.actions.register(user)),
  })
)(UnconnectedRegister);

export default Register;
