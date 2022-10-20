<script>
import axios from "axios";
export default {
  name: "HomeView",
  data: () => ({
    dataTodo: [],
  }),
  methods: {
    getUser() {
      const hostname = import.meta.env.VITE_BASE_API_URL;
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJAZ21haWwuY29tIiwibiI6InVzZXIgYyIsInJpIjoyLCJyIjoiVXNlciIsImlhdCI6MTY2NjI3MDI3MSwiZXhwIjoxNjY2Mjg4MjcxfQ.rDsTM9a_3tPNmwrKMFsUpS_-BPztPJYQDFA59pGjGHU";

      const header = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "Application/json",
      };
      console.log(header);

      axios.get(`${hostname}/api/todo`, { header }).then((res) => {
        console.log(res.dataTodo);
      });
    },
  },

  mounted() {
    this.getUser();
  },
};
</script>

<template>
  <p class="">id</p>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">Nama</th>
        <th scope="col">status</th>
        <th scope="col">create At</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="(dataTodo, index) in dataTodo">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ dataTodo.name }}</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
</template>
