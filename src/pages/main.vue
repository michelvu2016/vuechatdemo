<template>
    <DefaultLayout>
        <template v-slot:appheader>
            <AppHeader></AppHeader>
        </template>
        <template v-slot:page-intro>
            <div>Herbal Remedy Search</div>
        </template>
        <template v-slot:main>
            <div>
                <router-view></router-view>
            </div>
        </template>
        <template v-slot:footer>
            <div>Footer content</div>
        </template>

    </DefaultLayout>
</template>
<script>
import DefaultLayout from '../components/layouts/default/default.vue'
import AppHeader from '../pages/appHeader.vue'
export default {
    name: "Main",

    components: {
        DefaultLayout,
        AppHeader
    }

}
</script>
<style scoped>

</style>