<template>
  <div class="container-fluid">
    <FilterArea />
  </div>
</template>

<script>
// @ is an alias to /src
import FilterArea from '@/components/Areafilter.vue';

export default {
  components: {
    FilterArea,
  },
};
</script>
<style scoped>
.container-fluid{
  background: #ECF0F1 ;
}
</style>
