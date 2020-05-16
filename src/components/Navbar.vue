<template>
    <div>
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand href="#"><img src="@/assets/nav.png"/></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/">Home</b-nav-item>
                <b-nav-item href="/about">About</b-nav-item>
                <b-nav-item href="/ingredient">Ingredient</b-nav-item>
                <b-nav-item href="/search">Search Foods</b-nav-item>
                <b-nav-item href="/ref">Reference</b-nav-item>
                <template v-if="user.loggedIn">
                    <b-nav-item href="/favourites">Favourites</b-nav-item>
                    <b-nav-item @click.prevent="logout">Logout</b-nav-item>
                </template>
                <template v-else>
                    <b-nav-item href="/login">Login</b-nav-item>
                </template>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import firebase from 'firebase';

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: 'user',
    }),
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace({
          name: 'Login',
        });
      });
    },
  },
};
</script>
<style scoped>
.navbar {
    background-color: #000000;
    padding: 15px;
}
.img-fluid{
  padding: 5px;
  align-content: center;
}
</style>
