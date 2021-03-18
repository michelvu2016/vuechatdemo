<template>
    <Main>
    </Main>  
</template>

<script>
import Main from './pages/main.vue';
import {newHerb} from './models/herb.js';

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
export default {
  components: {
     Main,

  },

  data() {
    return {
      herbData : [] 
    }
  },
  methods: {
     loadData (data) {
       this.herbData = [...data]
     }
  },

  created () {
    const data = [
       newHerb('Camomile', "Excelent tonic for enhancing appetite and assisting week stomach"),
       newHerb('Spearmint', 'Excelent remedy for colic, gas in the stomach and bowels, nausea and vomitting'),
       newHerb('Spearmint', 'Excelent remedy for colic, gas in the stomach and bowels, nausea and vomitting'),
       newHerb('Spearmint', 'Excelent remedy for colic, gas in the stomach and bowels, nausea and vomitting'),
       newHerb('Spearmint', 'Excelent remedy for colic, gas in the stomach and bowels, nausea and vomitting'),
       newHerb('Spearmint', 'Excelent remedy for colic, gas in the stomach and bowels, nausea and vomitting'),
       newHerb('Spearmint', 'Excelent remedy for colic, gas in the stomach and bowels, nausea and vomitting'),
       newHerb('Spearmint', 'Excelent remedy for colic, gas in the stomach and bowels, nausea and vomitting'),
    ]
    this.loadData(data);  
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  height: 100vh;
  display: block;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1rem;
  font-weight: 100;
  background-color: aliceblue;
}

.container {
  width: 65%;
  height: 100%;
  margin: 10px auto;
  background-color: antiquewhite;
  padding: 10px;
}

.herb-box-view {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}

.data-slot {
  width: 30%;
  border: 1px solid red;
  padding: 8px;
  margin-left:5px;
  margin-top: 5px;  
}




</style>