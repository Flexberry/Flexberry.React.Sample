import axios from "axios";

export function GetData(url: string) {
  return axios.get(url).then((res) => {
    return res;
  });
}

export function PostData(url: string, data: object) {
  return axios.post(url, data).then((res) => {
    return res;
  });
}

export function PutData(url: string, data: object) {
  return axios.put(url, data).then((res) => {
    return res;
  });
}

export function DeleteData(url: string) {
  return axios.delete(url).then((res) => {
    return res;
  });
}
