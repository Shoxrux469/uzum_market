import axios from "axios";

let base_url = "http://localhost:8465";

export async function getData(path) {
  try {
    const res = await axios.get(base_url + path);

    return res;
  } catch (e) {
    console.log(e);
    if (e.response) {
      // The request was made, but the server responded with an error
      console.error("Server responded with a non-2xx status", e.response.data);
    } else if (e.request) {
      // The request was made, but no response was received
      console.error("No response received", e.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the request", e.message);
    }
  }
}
export async function postData(path, body) {
  try {
    const res = await axios.post(base_url + path, body);

    return res;
  } catch (e) {
    console.log(e.response.data);
  }
}
export async function deleteData(path) {
  try {
    const res = await axios.delete(base_url + path);

    return res;
  } catch (e) {
    console.log(e);
  }
}
export async function editData(path, body) {
  try {
    const res = await axios.patch(base_url + path, body);

    return res;
  } catch (e) {
    console.log(e.response.data);
    return null;
  }
}
