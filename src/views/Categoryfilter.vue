<template>
  <div class="container-fluid">
    <FilterKategori />
  </div>
</template>

<script>
// @ is an alias to /src
import FilterKategori from '@/components/Categoryfilter.vue';

export default {
  components: {
    FilterKategori,
  },
};
</script>
<style scoped>
.container-fluid{
  background: #ECF0F1 ;
}
</style>
