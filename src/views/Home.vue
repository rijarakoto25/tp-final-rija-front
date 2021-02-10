<template>
  <div class="container">
    <header class="jumbotron">
    </header>
    <div class="form-group col">
      <div class="card mt-3">
        <div class="card-body">
          <div class="card-title">
            <h4>Discussion</h4>
            <hr>
          </div>
          <div class="card-body">
          </div>
          <div class="card-body">
            <div class="messages" v-for="(msg, index) in messages" :key="index">
              <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from '../services/user.service';

export default {
  name: 'Accueil',
  data() {
    return {
      content: '',
      temp: 0,
      format: 'C',
      time: new Date(),
      phase: 'fa-adjust'
    };
  },

  mounted() {
    UserService.getPublicContent().then(
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
