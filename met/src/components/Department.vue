<template>
  <div class="hello">
    <h2>{{name}} Department</h2>
    <div>
      <ul>
        <li v-for="(artObject) in artObjectsToShow" :key="artObject">
          <ArtObject :id="artObject"/>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-for="page in nbPages" :key="page">
          <span @click="pageChange(page)">{{page}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ArtObject from "./ArtObject";
import { getObjectsByDepartment } from "../services/apiCalls";

export default {
  name: "Department",
  data: () => ({
    artObjects: [],
    artObjectsToShow: [],
    page: 0,
    start: 0,
    end: 100,
    nbPages: 1,
    pagination: 100
  }),
  props: {
    id: Number,
    name: String
  },

  components: {
    ArtObject
  },
  methods: {
    async fetchObjects() {
      const { objectIDs, total } = await getObjectsByDepartment(this.id);
      this.artObjects = objectIDs;
      this.artObjectsToShow = this.artObjects.slice(this.start, this.end);
      this.nbPages = Math.ceil(total / this.pagination);
    },

    pageChange(page) {
      this.page = page;
      this.start = page + this.pagination * page + 1;
      this.end = this.start + this.pagination - 1;
      this.artObjectsToShow = this.artObjects.slice(this.start, this.end);
    }
  },

  created() {
    this.fetchObjects();
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
