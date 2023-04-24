import axios from 'axios';
import moment from "moment";

let authorized = JSON.parse(localStorage.getItem('authorized'));
const state = () => ({
    locations: [],
    currentWeather: [],
    weatherHistory: [],
    weatherForecast: [],
    loading: false,
    alerts: [],
    selectedWeatherHistory: null,
    searchResult: null,
    selectedIndex: 0,
    authorized: authorized ? authorized : false
})

const mutations = {
    setLocation(state, payload) {
        state.locations.push(payload)
    },

    setCurrentWeather(state, payload) {
        state.currentWeather.push(payload)
    },

    setWeatherHistory(state, payload) {
        state.weatherHistory.push(payload)
    },

    setweatherForecast(state, payload) {
        state.weatherForecast.push(payload)
    },

    setLoading(state, payload) {
        state.loading = payload
    },
    setAlert(state, payload) {
        payload.length > 0 &&
            payload.forEach(alert => {
                state.alerts.push(alert)
            })
    },

    setSelectedWeatherHistory(state, payload) {
        state.selectedWeatherHistory = payload
    },

    setSelectedIndex(state, payload) {
        state.selectedIndex = payload
    },

    setSearchResult(state, payload) {
        state.searchResult = payload
    },
    modifyWeatherHistory(state, payload) {
        state.weatherHistory[state.selectedIndex] = payload
    }
}

const actions = {
    async getWeather({ commit, dispatch }, payload) {
        const key = 'f3dfa3e1bb9643548fc165750232204';
        const q = `${payload.latitude},${payload.longitude}`
        let dt = new Date();
        let days = 3;

        commit('setLoading', true);

        commit('setLocation', payload);
        await dispatch('getCurrentWeather', { key, q });
        await dispatch('getWeatherHistory', { key, q, dt });
        await dispatch('getWeatherForecast', { key, q, days });

        commit('setLoading', false);
    },

    async getCurrentWeather({ commit }, payload) {
        const url = 'https://api.weatherapi.com/v1/current.json';

        axios.get(url, {
            params: {
                key: payload.key,
                q: payload.q,
                aqi: 'yes'
            }
        })
        .then( response => {
            commit('setCurrentWeather', response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    },

    async search({ commit }, payload) {
        const url = 'https://api.weatherapi.com/v1/search.json';

        axios.get(url, {
            params: {
                key: 'f3dfa3e1bb9643548fc165750232204',
                q: payload.search
            }
        })
        .then( response => {
            const url = 'https://api.weatherapi.com/v1/current.json';
            axios.get(url, {
                params: {
                    key: 'f3dfa3e1bb9643548fc165750232204',
                    q: response.data[0].name
                }
            })
            .then( response => {
                commit('setSearchResult', response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    },

    async getWeatherHistory({ commit }, payload) {
        const url = 'https://api.weatherapi.com/v1/history.json';

        axios.get(url, {
            params: {
                key: payload.key,
                q: payload.q,
                dt: payload.dt
            }
        })
        .then( response => {
            payload.filter ? commit('modifyWeatherHistory', response.data) : commit('setWeatherHistory', response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    },

    async getWeatherForecast({ commit }, payload) {
        const url = 'https://api.weatherapi.com/v1/forecast.json';

        axios.get(url, {
            params: {
                key: payload.key,
                q: payload.q,
                days: payload.days,
                aqi: 'no',
                alerts: 'yes'
            }
        })
        .then( response => {
            commit('setweatherForecast', response.data)
            commit('setAlert', response.data.alerts.alert)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

const getters = {
    alerts: (state) => {
        return state.alerts;
    },
    currentWeather: (state) => {
        state.currentWeather.length > 0
          ? localStorage.setItem("authorized", JSON.stringify(true))
          : localStorage.setItem("authorized", JSON.stringify(false));
        return state.currentWeather;
    },
    weatherHistory: (state) => {
        return state.weatherHistory;
    },
    selectedWeatherHistory: (state) => {
        let chartData = {
            labelsX: [],
            labelsY: []
        }

        if (state.weatherHistory[state.selectedIndex]){
            state.weatherHistory[0].forecast.forecastday[0].hour.forEach(item => {
                chartData.labelsX.push(moment(item.time).format('H:mm'));
                chartData.labelsY.push(item.temp_c);
            });
        }

        let datasetCollection = {
            labels: chartData.labelsX,
            datasets: [
              {
                label: "Temp (°C)",
                backgroundColor: "#f87979",
                data: chartData.labelsY,
                tension: 0.5,
              }
            ],
          }
        return datasetCollection;
    },
    searchResult: (state) => {
        return state.searchResult;
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions, 
    getters
}