import axios from 'axios'
import config from '@/config'
const Api = axios.create({
    baseURL:config.api_base_url,
    timeout: 5000
})


export default Api