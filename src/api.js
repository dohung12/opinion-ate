import axios from 'axios'

const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/49mFIdtKfIzAsR0jYcxbEpP22b2p13pR',
})
const api = {
  loadRestaurants() {
    return client.get('/restaurants').then((response) => response.data)
  },
}

export default api
