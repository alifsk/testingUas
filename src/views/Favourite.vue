<template>
  <div class="container-fluid">
    <favy />
  </div>
</template>

<script>
// @ is an alias to /src
import Favy from '@/components/Favourite.vue';

export default {
  name: 'Favourite',
  components: {
    Favy,
  },
};
</script>

<style scoped>
.container-fluid{
  background: #ECF0F1 ;
}
</style>
