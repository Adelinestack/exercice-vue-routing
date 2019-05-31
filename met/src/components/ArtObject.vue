<template>
  <div>
    <h3>{{artObject.title}}</h3>
    <div>
      <img :src="artObject.primaryImageSmall" width="100" height="auto">
    </div>
  </div>
</template>

<script>
import { getObject } from "../services/apiCalls";

export default {
  name: "ArtObject",
  data: () => ({
    artObject: {}
  }),
  props: {
    id: Number
  },
  methods: {
    async fetchObject() {
      const artObject = await getObject(this.id);
      this.artObject = artObject;
    }
  },

  created() {
    this.fetchObject();
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
