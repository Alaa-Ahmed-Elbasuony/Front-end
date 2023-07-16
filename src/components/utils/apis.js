import axios from "axios";

export function getUser(id) {
  if (id > 0 && id <= 20) {
    return axios
      .get(`http://localhost:4000/users/${id}`)
      .then((res) => res.data);
  } else {
    return -1;
  }
}

export function getLimitedUsers(num) {
  return axios
    .get(`http://localhost:4000/users?_page=1&_limit=${num}`)
    .then((res) => res.data);
}

export function getCheckPaginated(page, limit) {
  return axios
    .get(`http://localhost:4000/prescriptions?_page=${page}&_limit=${limit}`)
    .then((res) => res.data);
}
export function getTransactionsPaginated(page, limit) {
  return axios
    .get(`http://localhost:4000/transactions?_page=${page}&_limit=${limit}`)
    .then((res) => res.data);
}

export function checkAdmin(data) {
  if (data?.isAdmin) return 1;
  else {
    return 0;
  }
}

export function getStatistics() {
  return axios.get("http://localhost:4000/statistics").then((res) => res.data);
}
