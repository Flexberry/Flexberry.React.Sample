import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

export function GetData(url: string) {
  return axios.get(url).then((res) => {
    return res;
  });
}

export function PutData(url: string) {
  var asd = 100;
}

export function PostData(url: string) {

}

export function DeleteData(url: string) {

}
