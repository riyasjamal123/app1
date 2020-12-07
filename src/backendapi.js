import Axios from 'axios'
const host = {
  
    localhost: "//18.221.20.186:8080/"
}
export default Axios.create({
    baseURL:host.localhost
})
