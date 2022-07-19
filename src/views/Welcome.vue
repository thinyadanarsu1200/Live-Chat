<template>
  <div class="container welcome">
    <transition name="slide" mode="out-in">
      <div v-if="showLogin">
        <Login @enterChatRoom="enterChatRoom"></Login>
        <p>
          Not a member?
          <span @click="showLogin = !showLogin">Create account</span>
        </p>
      </div>
      <div v-else>
        <SignUp @enterChatRoom="enterChatRoom"></SignUp>
        <p>
          Already a member? <span @click="showLogin = !showLogin">Login</span>
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { useRouter } from 'vue-router';
export default {
  components: {
    Login,
    SignUp,
  },
  setup() {
    let showLogin = ref(true);
    const router = useRouter();
    const enterChatRoom = () => {
      router.push({ name: 'Chatroom' });
    };
    return { showLogin, enterChatRoom };
  },
};
</script>
<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
/* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}

/* Animation */
.slide-enter-from {
  transform: translateX(100px);
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.4s ease-out;
}

.slide-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

.slide-leave-active {
  transition: all 0.4s ease-in;
}
</style>
