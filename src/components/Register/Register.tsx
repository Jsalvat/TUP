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
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" p={4}>
        <Text fontSize="24px" color="teal" mb={4}>
          Identifícate
        </Text>
        <Stack spacing={4}>
          <Input
            placeholder="Email Usuario"
            size="md"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, 'email')
            }
          />
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
        </Stack>
        <Button
          isFullWidth
          mt={6}
          colorScheme="teal"
          onClick={() => registerUser(user)}
          isLoading={loading}
        >
          Login
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
