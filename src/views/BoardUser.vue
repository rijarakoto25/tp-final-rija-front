<template>
  <div class="container">
    <header class="jumbotron bg-info">
      <h3>{{content}}</h3>
          <Chat />
    </header>
  </div>
</template>
<script>
import UserService from '../services/user.service';
import Chat from '../views/Chat';

export default {
  name: 'User',
  components: {
    Chat
  },
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getUserBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },

};

</script>
