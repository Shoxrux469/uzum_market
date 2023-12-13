import axios from "axios";
let base_url = "http://localhost:8080";

export async function getData(path) {
  try {
    const res = await axios.get(base_url + path);

    return res;
  } catch (e) {
    console.log(e);
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
