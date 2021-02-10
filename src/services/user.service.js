import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://tp-final-rija-back.herokuapp.com/api/';
//const API_URL = 'http://localhost:8080/api/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  getUsers() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }

  delete(username) {
    return axios.delete(API_URL + `user/${username}`, { headers: authHeader() });
  }

  get(username) {
    return axios.get(API_URL + `user/${username}`, { headers: authHeader() });
  }

  update(username, data) {
    return axios.put(API_URL + `user/${username}`,data , { headers: authHeader() });
  }

  deleteAll() {
    return axios.delete(API_URL + 'users', { headers: authHeader() });
  }

  findByUsername(username) {
    return axios.get(API_URL + `user/${username}`, { headers: authHeader() });
  }

}

export default new UserService();
