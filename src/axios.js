import Axios from "axios";

const instance=Axios.create({
  baseURL:"https://api.covid19api.com/"
});

export default instance;