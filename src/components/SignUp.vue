<template>
  <div class="sign-up">
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
      <input type="text" placeholder="Display Name" v-model="displayName" />
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import useSignup from '../composables/useSignup';

export default {
  setup(props, context) {
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    let { error, createAccount } = useSignup();

    const signUp = async () => {
      const res = await createAccount(
        email.value,
        password.value,
        displayName.value
      );
      if (res) {
        context.emit('enterChatRoom');
      }
    };
    return {
      displayName,
      email,
      password,
      signUp,
      error,
    };
  },
};
</script>

<style></style>
