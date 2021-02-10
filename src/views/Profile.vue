<template>
<div class="col-md-11">
    <header class="jumbotron bg-info">
      <h3>Profil :
        <strong>{{ currentUser.username }}</strong>
      </h3>
      <div>
        {{currentUser.picture}}
      </div>
      <v2-table :data="list">
        <v2-table-column label="Utilisateur" prop="username"></v2-table-column>
        <v2-table-column label="id" prop="id"></v2-table-column>
        <v2-table-column label="token" prop="token"></v2-table-column>
        <v2-table-column label="email" prop="mail"></v2-table-column>
      </v2-table>
      <div>
        <hr>
        <h2>Messagerie</h2>
        <form class="contact-form" @submit.prevent="sendEmail">
          <label>Name</label>
          <input
              type="text"
              v-model="name"
              name="name"
              placeholder="Nom"
          >
          <label>Email</label>
          <input
              type="email"
              v-model="email"
              name="email"
              placeholder="Email"
          >
          <label>Message</label>
          <textarea
              name="message"
              v-model="message"
              cols="30" rows="5"
              placeholder="Message">
          </textarea>
          <input type="submit" value="Envoyer">
        </form>
      </div>
    </header>

</div>

</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Profile',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      list: [{
        username: this.$store.state.auth.user.username,
        id: this.$store.state.auth.user.id,
        token: this.$store.state.auth.user.accessToken,
        mail: this.$store.state.auth.user.email,
        authorities: this.$store.state.auth.user.roles,
        picture: this.$store.state.auth.user.picture,
      }]
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },

  },
  mounted() {
    this.currentUser.id = 'YOUR_USER_ID';
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  /* eslint-disable */
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
            'YOUR_USER_ID', {
              name: this.name,
              email: this.email,
              message: this.message
            })

      } catch(error) {
        console.log({error})
      }
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
};
</script>
<style scoped>
* {box-sizing: border-box;}
.jumbotron {
  width: 100%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
