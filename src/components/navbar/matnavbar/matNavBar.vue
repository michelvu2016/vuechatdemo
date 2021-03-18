
<template>
    <nav>
        <ul class="menuBar">
            <li>
                <router-link to="/home">Home Page</router-link>
            </li>
            <li>
                
                <router-link to="/chat">Cbat Page</router-link>
            </li>
            <li>
                
                <router-link to="/herb">Herb Page</router-link>
            </li>
            <li>
                <router-link to="/treatment">Treatment Page</router-link>
                
            </li>

        </ul>
    </nav>
                
</template>
<script>
//import {router-link} from 'vue-router'

export default {
    name: 'AppNavBar',
    //components: {routerLink}
    
}
</script>

<style scoped>
    .menuBar {
        margin:0;
        padding:0;
        width: 100%;
        height: 2rem;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
        
    }

    .menuBar li {
       margin-right: 10px;  
    }


</style>