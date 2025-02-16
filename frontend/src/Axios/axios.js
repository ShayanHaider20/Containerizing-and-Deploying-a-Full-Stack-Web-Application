import axios from "axios"
const instance = axios.create({
    baseURL:"https://devopssat.azurewebsites.net/api"
})
export default instance