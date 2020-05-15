<template>
<b-row class="row-ref">
    <b-col class="col-md-12 mt-5 mb-4">
        <h1 class="reference-title">References</h1>
        <links :linkref="link1"/>
        <br/>
        <links :linkref="link2"/>
    </b-col>
</b-row>
</template>
<script>
import Links from './Links.vue';

export default {
  name: 'Reference',
  data() {
    return {
      link1: 'https://scotch.io/tutorials/build-a-progressive-web-application-with-nuxtjs',
      link2: 'https://www.themealdb.com/api.php',
    };
  },
  components: {
    Links,
  },
};
</script>
<style>
.row-ref {
    padding: 50px;
}
.reference-title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 400;
    font-size: 30px;
    color: #35495e;
    letter-spacing: 1px;
}
</style>
