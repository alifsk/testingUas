<template>
  <div>
    <div class="container-fluid">
      <app-logo />
      <Meals />
      <Area />
    </div>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue';
import Meals from '@/components/Meals.vue';
import Area from '@/components/Area.vue';

export default {
  name: 'Home',
  components: {
    AppLogo,
    Meals,
    Area,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
.container-fluid {
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: none;
  padding: none;
  background: #ECF0F1 ;
}
</style>
