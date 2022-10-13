import Axios from "axios";

const HTTP = Axios.create({
    baseURL: process.env.VUE_APP_URL_API
})

export default HTTP;