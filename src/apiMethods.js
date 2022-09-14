import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  getData: (callback) => {
    // essa funcao traz o conteudo que vir da url /task
    axios.get("/tasks").then((response) => {
      //o get esta responsavel por trazer isso, esse conteudo vem no parametro response
      callback(response.data);
    });
  },
  createData: (task, callback) => {
    axios.post("/tasks", task).then((response) => {
      callback(response.data);
    });
  },
  deleteData: (taskId) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/tasks/${taskId}`)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  },
  updateData: (taskId, callback, task) => {
    axios.put(`/tasks/${taskId}`, task).then((response) => {
      callback(response.data);
    });
  },
};
