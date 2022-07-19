import { auth } from '../firebase/config';

const {ref} = require('vue');

const user = ref(auth.currentUser);

//firing up when user login or logout or signUp or have connected with firebase
auth.onAuthStateChanged((_user) => {
    user.value = _user;
})

const getUser = () =>{
    return {
        user,
    }
}

export default getUser;