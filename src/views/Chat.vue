<template>
  <div class="row">
    <div class="form-group col mr-auto">
      <div class="card mt-3">
        <div class="card-body">
          <div class="card-title">
            <h3>Chat</h3>
            <hr>
          </div>
          <div class="card-body">
            <form @submit.prevent="sendMessage">
              <div class="form-group">
                <label>Pseudo:
                  <input type="text" v-model="user" class="form-control">
                </label>
              </div>
              <div class="form-group">
                <label>Message:
                  <textarea type="text" v-model="message" class="form-control"></textarea>
                </label>
              </div>
              <button type="submit" class="btn btn-primary">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
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
import io from 'socket.io-client';

export default {
  data() {
    return {
      user: '',
      message: '',
      messages: [],
      socket: io('localhost:8080')
    }
  },

  methods: {
    sendMessage(e) {
      e.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        user: this.user,
        message: this.message,
      });
      this.message = ''
    }
  },

  mounted() {
    this.socket.on('MESSAGE', (data) => {
      this.messages = [...this.messages, data];

    });
  }
}
</script>
