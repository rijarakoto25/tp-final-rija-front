<template>
  <div class="container">
    <header class="jumbotron bg-info">
      <h3>{{ content }}</h3>
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Chercher par pseudo"
                 v-model="username"/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
                    @click="searchUsername"
            >
              Chercher
            </button>
          </div>
        </div>
      </div>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllUsers">
        Tout supprimer
      </button>
      <div class="list row">
        <div class="col-md-4">
          <h4>Liste des utilisateurs</h4>
          <ul class="list-group">
            <li class="list-group-item"
                :class="{ active: index === currentIndex }"
                v-for="(user, index) in users"
                :key="index"
                @click="setActiveUser(user, index)"
            >
              {{ user.username }}
            </li>

          </ul>
        </div>
        <div class="col-md-6">
          <div v-if="currentUser" class="edit-form">
            <h4>Utilisateur à modifier</h4>
            <form>
              <div class="form-group">
                <label for="username">Pseudo</label>
                <input type="text" class="form-control" id="pseudo"
                       v-model="currentUser.username"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email"
                       v-model="currentUser.email"
                />
              </div>
              <div class="form-group">
                <label for="password">Mot de passe</label>
                <input type="text" class="form-control" id="password"
                       v-model="currentUser.password"
                />
              </div>
            </form>
            <button class="badge badge-danger mr-2" @click="deleteUser">
              supprimer
            </button>

            <button type="submit" class="badge badge-success"
                    @click="updateUser"
            >
              Modifier
            </button>
            <p>{{ message }}</p>
          </div>

        </div>
        <div class="col-md-6">
          <div v-if="currentUser">
            <h4>Utilisateur</h4>
            <div>
              <label><strong>Pseudo:</strong></label> {{ currentUser.username }}
            </div>
            <div>
              <label><strong>Email:</strong></label> {{ currentUser.email }}
            </div>
          </div>
          <div v-else>
            <br/>
            <p>Cliquer sur un utilisateur...</p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import UserService from '../services/user.service';

export default {
  name: 'Admin',
  data() {
    return {
      content: '',
      users: [],
      currentUser: null,
      currentIndex: -1,
      username: "",
      message: ''
    };
  },
  /* eslint-disable */
  methods: {
    retrieveUsers() {
      UserService.getUsers()
          .then(response => {
            this.users = response.data;
          })
          .catch(e => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    },

    setActiveUser(user, index) {
      this.currentUser = user;
      this.currentIndex = index;
    },

    removeAllUsers() {
      UserService.deleteAll()
          .then(response => {
            this.refreshList();
            console.log(response.data);

          })
          .catch(e => {
            console.log(e);
          });
    },

    searchUsername() {
      UserService.findByUsername(this.username)
          .then(response => {
            this.users = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    updateUser() {
      UserService.update(this.currentUser.username, this.currentUser)
          .then(response => {
            console.log(response.data);
            this.message = 'Profile mis à jour avec succès!';
          })
          .catch(e => {
            console.log(e);
          });
    },

    deleteUser() {
      UserService.delete(this.currentUser.username)
          .then(response => {
            console.log(response.data);
            this.$router.push({name: "users"});
          })
          .catch(e => {
            console.log(e);
          });
    }
  },

  mounted() {
    this.retrieveUsers();
    this.message = '';
    UserService.getAdminBoard().then(
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
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
