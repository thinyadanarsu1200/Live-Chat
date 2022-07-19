import { auth } from '../firebase/config';

const {ref} = require('vue');

const error = ref(null);

const logout = async() => {
    try{
        await auth.signOut();
        console.log("you have signed out finally");
    }catch(err){
        error.value = err.message;
    }
}
const useLogout = () => {
  return {
    error,
    logout
  };
};

export default useLogout;