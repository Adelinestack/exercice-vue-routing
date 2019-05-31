<template>
  <div class="hello">
    <h2>Departments</h2>
    <div>
      <div v-for="({departmentId, displayName},id) in departments" :key="id">
        <router-link
          :to="{ name: 'department', params: { id: departmentId, name: displayName }}"
        >{{displayName}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getDepartments } from "../services/apiCalls";

export default {
  name: "Home",
  data: () => ({
    departments: []
  }),
  methods: {
    async fetchDepartments() {
      const departments = await getDepartments();
      this.departments = departments;
    }
  },

  mounted() {
    this.fetchDepartments();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
