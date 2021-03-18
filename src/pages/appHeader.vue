<template>
    <div class="navbar">
        <div class="banner-text">
            <p>A story of struggle for survival</p>
        </div>
        <div class="menu-bar">
            <AppNavBar>
            </AppNavBar>

        </div>

    </div>
</template>
<script>
import AppNavBar from '../components/navbar/matnavbar/matNavBar.vue'
export default {
    name: 'AppHeader',
    components: {
        AppNavBar
    }

    
}
</script>
<style scoped>
    .navbar {
        background-color: transparent;
        display: grid;
        grid-template: auto 20% / repeat(6, 1fr);
    }
    .banner-text {
        color: black;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1.2em;
        grid-column-start: 1;
        grid-column-end: 7;
        grid-row-start: 1;
        grid-row-end: 2;

    }
    .menu-bar {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 7;
        justify-content: end;
        align-items: flex-end;


    }
</style>