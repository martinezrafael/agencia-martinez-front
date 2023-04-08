import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://agencia-api.onrender.com/works",
    });
  }

  getWorks = async () => {
    try {
      const { data } = await this.api.get("/");
      return data;
    } catch (error) {
      throw error.response;
    }
  };
}

export default new Api();
