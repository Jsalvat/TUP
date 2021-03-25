import { auth } from '../firebase';
import dispatch from 'react-redux';

export const registerUserApi = async (
  email: string,
  password: string,
  name: string
): Promise<any> => {
  return await auth
    .createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user?.updateProfile({
        displayName: name,
        photoURL: '',
      });
    });
};
