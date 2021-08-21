import axios from 'axios'

const axiosClient = axios.create({
    baseURL : 'https://merntask-server-alex.herokuapp.com/'
})

export default axiosClient