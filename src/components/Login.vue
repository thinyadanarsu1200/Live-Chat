<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <div class="error" v-if="error">{{ error }}</div>
      <button>Login</button>
    </form>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import useLogin from '../composables/useLogin';
export default {
  setup(props, context) {
    const email = ref('');
    const password = ref('');
    const { error, signIn } = useLogin();

    const login = async () => {
      const res = await signIn(email.value, password.value);
      if (res) {
        context.emit('enterChatRoom');
      }
    };

    return { email, password, login, error };
  },
};
</script>
<style></style>
