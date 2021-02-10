<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-info">
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" size="2x"/>
          </router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">
            Admin-utilisateur
          </router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Public</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">Privé</router-link>
        </li>
      </div>

      <div>
        <H2 class="text-warning text-center">RiRiNet.com</H2>
      </div>
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt"/>
            Se connecter
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus"/>
            S'enregister
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user"/>
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item ">
          <a class="nav-link text-danger" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt"/>
            Déconnexion
          </a>
        </li>
      </div>
    </nav>
    <div class="row">
      <div class="col-sm-1">
        <img src="../public/logo.png" class="align-middle">
      </div>
      <div class="col-sm-6">
        <iframe seamless width="750" height="336" frameborder="20"
                src="https://www.infoclimat.fr/public-api/mixed/iframeSLIDE?_ll=48.85341,2.3488&_inc=WyJQYXJpcyIsIjQyIiwiMjk4ODUwNyIsIkZSIl0=&_auth=ARsAF1QqXX8FKFFmUiQDKlI6VGEIfgEmAHwCYQ1oUSwIYwdmD28GYF8xB3pUe1dhAi9SMQw3BDQFblAoD31RMAFrAGxUP106BWpRNFJ9AyhSfFQ1CCgBJgBrAmMNflEwCG8HZQ9yBmFfOAd7VGZXZgI1Ui0MLAQ9BWBQNg9gUToBagBsVDVdPQVoUSxSfQMxUmFUNgg1AWsAawJsDTVRNAhiBzUPPwYwXzgHe1RhV2UCMVIyDDAEPAVvUD8PfVEtARsAF1QqXX8FKFFmUiQDKlI0VGoIYw%3D%3D&_c=a5eb949246986ca38be9d85a2c68eaf9"></iframe>
      </div>
      <div class="col">
        <div class="container">
          <router-view/>
        </div>
      </div>
    </div>
  </div>


</template>

<script>


export default {
  name: 'App',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
  },
};
</script>
