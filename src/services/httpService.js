import axios from "axios";

export default class HttpService {
  static apiEndPoint = "http://pb-api.herokuapp.com/bars";

  static async getBars() {
    const { data } = await axios.get(HttpService.apiEndPoint);
    return data;
  }
}
