import axios from 'axios';

let user = JSON.parse(localStorage.getItem('user'));
const state = () => ({
    user: user ? user : null
})

const mutations = {
    setUser(state, payload) {
        let user = {
            info: {
                email: payload.email,
                name: payload.name,
            },
            weather: payload.weather
        }
        localStorage.setItem('user', JSON.stringify(user));
        state.user = user
    },
}

const actions = {
    async getUser({ commit }, payload) {
        const key = 'f3dfa3e1bb9643548fc165750232204';
        const q = 'auto:ip'

        const url = 'http://api.weatherapi.com/v1/current.json';

        axios.get(url, {
            params: {
                key: key,
                q: q,
                aqi: 'no'
            }
        })
        .then( response => {
            commit('setUser', {
                name: payload.name, 
                email: payload.email, 
                weather: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        })
    },
}

const getters = {
    user: (state) => {
        return state.user;
    }
}


export default {
    namespaced: true,
    state,
    mutations, 
    actions,
    getters
}