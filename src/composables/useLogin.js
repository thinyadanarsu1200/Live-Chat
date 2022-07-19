const { ref } = require('vue');
import { auth } from '../firebase/config';
let error = ref(null);

const signIn = async (email, password) => {
  try {
    const res = await auth.signInWithEmailAndPassword(email, password);

    //control errors that firebase can't handle
    if (!res) {
      throw new Error("Sorry you can't log in");
    }
    return res;
  } catch (err) {
    error.value = err.message;
  }
};

const useLogin = () => {
  return {
    error,
    signIn,
  };
};

export default useLogin;
