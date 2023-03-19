import axios from "axios";

const instance=axios.create({
    baseURL:'http://127.0.0.1:5001/e-commerce-site-f664b/us-central1/api'//here we need the url of the api(form the cloud function)
})

export default instance;