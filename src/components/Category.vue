<template>
<b-row class="row-category">
    <div class="col-md-12 mt-5 mb-4">
        <titlee :strtitle="ttl"/>
    </div>
    <div class="col-md-3" v-for="(data, index) in datacategory" :key="index">
        <router-link
        :to="{ name: 'categoryfilter', params: { name: data.strCategory } }"
        style="text-decoration: none">
        <card
            :images="data.strCategoryThumb"
            :tagss="tgs"
            :title="data.strCategory"/>
        </router-link>
    </div>
</b-row>
</template>
<script>
import axios from 'axios';
import titlee from './Title.vue';
import card from './Card.vue';

export default {
  name: 'Category',
  data() {
    return {
      ttl: 'Categories',
      tgs: 'Category',
      datacategory: [],
    };
  },
  components: {
    titlee,
    card,
  },
  async created() {
    const BASEURI = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    axios.get(BASEURI).then((result) => {
      this.datacategory = result.data.categories;
    });
  },
};
</script>
<style>
.row-category {
    background-color: none;
    padding: 50px;
}
.category-text {
    text-align: center;
}
</style>
