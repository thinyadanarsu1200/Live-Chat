import { auth } from '../firebase/config';
import { ref } from 'vue';

const error = ref(null);

let createAccount = async (email, password, displayName) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);

    //if customer's network is not good very well and server jump,we throw error
    //because firebase can't handle these error
    if (!res) {
      throw new Error('Sorry cannot be created account.Check your network');
    }

    res.user.updateProfile({
      displayName: displayName,
    });
    return res;
  } catch (err) {
    error.value = err.message;
  }
};

//when use this function and we can also use above variable(error) and function(createAccount)
let useSignup = () => {
  return { error, createAccount };
};

export default useSignup;
