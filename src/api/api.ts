import axios from 'axios'

export const api = axios.create({
	baseURL: `http://1251.local`,
	headers: {'Content-Type': 'multipart/form-data'}
})

api.interceptors.request.use(config => {
	config.headers = {...config.headers, "EWP-API-Token": localStorage.getItem('accessToken')}
	return config;
}, function (error) {
	return Promise.reject(error);
});