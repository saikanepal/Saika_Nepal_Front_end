import axios from "axios";

class HTTP_REQUEST {
  constructor(url) {
    if (!HTTP_REQUEST.instance) {
      /* http://locahost:port */
      this.url = url;
      HTTP_REQUEST.instance = this;
    }
    return HTTP_REQUEST.instance;
  }

  generateConfigData = (
    contenttype = "application/json",
    authorization = "EMPTY"
  ) => {
    const config_Data = {
      "Content-Type": contenttype,
      Authorization: authorization,
    };
    return config_Data;
  };

  post = async (url, payload = null, config_Data = null) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.post(this.url + url, payload, {
          headers: config_Data,
        });
        return resolve(data);
      } catch (error) {
        return reject(error);
      }
    });
  };
  put = async (url, payload = null, config_Data = null) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.put(this.url + url, payload, {
          headers: config_Data,
        });
        return resolve(data);
      } catch (error) {
        return reject(error);
      }
    });
  };
  patch = async (url, payload = null, config_Data = null) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.put(this.url + url, payload, {
          headers: config_Data,
        });
        return resolve(data);
      } catch (error) {
        return reject(error);
      }
    });
  };
  get = async (url, config_Data = null) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(this.url + url, {
          headers: config_Data,
        });
        return resolve(data);
      } catch (error) {
        return reject(error);
      }
    });
  };
  delete = async (url, config_Data = null) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.delete(this.url + url, {
          headers: config_Data,
        });
        return resolve(data);
      } catch (error) {
        return reject(error);
      }
    });
  };
}
// put the server ip and port number here or localhost xyz.com -> ipaddr
const request = new HTTP_REQUEST(process.env.REACT_APP_BACKEND_URL);
export default request;
