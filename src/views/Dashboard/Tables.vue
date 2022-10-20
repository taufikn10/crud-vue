<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <authors-table />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <projects-table />
      </div>
    </div>
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
        <tr v-for="user in data" :key="data.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AuthorsTable from "@/components/example/AuthorsTable.vue";
import ProjectsTable from "@/components/example/ProjectsTable.vue";
import axios from "axios";

export default {
  name: "tables",
  components: {
    AuthorsTable,
    ProjectsTable,
  },
  data() {
    return {
      data: [],
      stats: {
        titleColor: "opacity-7 text-white",
        descColor: "text-white",
        trip: {
          title: "Today's Trip",
          desc: "145 KM",
          classIcon: "text-dark ni ni-money-coins",
        },
        health: {
          title: "Battery Health",
          desc: "99 %",
          classIcon: "text-dark ni ni-controller ",
        },
        speed: {
          title: "Average Speed",
          desc: "56 Km/h",
          classIcon: "text-dark ni ni-delivery-fast",
        },
        volume: {
          title: "Music Volume",
          desc: "15/100",
          classIcon: "text-dark ni ni-note-03",
        },
      },
    };
  },
  methods: {
    getUser() {
      const hostname = "https://jsonplaceholder.typicode.com";
      const headers = {
        "Content-Type": "Application/json",
      };
      axios.get(`${hostname}/users`, { headers }).then((res) => {
        this.data = res.data;
      });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>
