import axios from 'axios'
import store from "@/store/index.js";
const api = axios.create({
    baseURL:"http://143.244.152.204",
    timeout: 5000
})

const Api = {
    post: async (path, data, conf) => {
        let defaultConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Token': store.getters['user/getToken']
            }
        }
        if (conf == null) {
            conf = defaultConfig
        }
        return api.post(path, data, conf)
    },
    get: async (path, conf) => {
        let defaultConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Token': store.getters['user/getToken']
            }
        }
        if (conf == null) {
            conf = defaultConfig
        }
        return api.get(path,conf)
    }
}
export default Api