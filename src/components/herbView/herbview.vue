<template>
    
    <div class="herbview">
        <h5>{{herb.name}}</h5>
        <p>{{herb.description}}</p>
    </div>
</template>
<script>
export default {
    props: ['herb']
}
</script>
<style scoped>

</style>