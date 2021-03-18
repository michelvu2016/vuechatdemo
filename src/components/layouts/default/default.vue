<template>
    <div class="container">

        <header class="header">
            <div class="header-container">
                <div class="app-header">
                    <slot name="appheader"></slot>

                </div>

            </div>
        </header>
        <nav class="sidebar">
            <div>
                <ul>
                    <li>Camomile</li>
                    <li>Dandelion</li>
                    <li>Ginger</li>
                    
                </ul>
            </div>
        </nav>
        <main class="main">
            <div>
                <slot name="page-intro"></slot>
            </div>
            <div>
                <slot name="main"></slot>
            </div>
        </main>
        <footer class="footer">
            <slot name="footer">
            </slot>
            <div class="copyright">
                &copy;Copyright Michel Vu 2021-2022
            </div>
        </footer>
    </div>
</template>
<script>

export default {
    name: "DefaultLayout"
}
</script>
<style scoped>
    .container {
        padding: 0;
        margin: 0;
        width: 65%;
        height: 100%;
        margin: 10px auto;
        background-color: antiquewhite;
        padding: 10px;
        display: grid;
        grid-template-rows: 15% auto 10%;
        grid-template-columns: repeat(12, 1fr);
        justify-content: start;
        justify-items: start;
        gap: 5px;
    }
    .header {
        background-image: url('../../../assets/crazybanner.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        grid-column-start: 1;
        grid-column-end: 13;
        grid-row-start: 1;
        grid-row-end: 2;
        
        width: 100%
    }
    .app-header {
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 6;
        grid-column-end: 13;
        border: 1px red solid;


    }
    .header-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 9px;
        border: 1px blue solid;
        box-sizing: border-box;
        display: grid;
        grid-template: 80% auto / repeat(12, 1fr);

    }
    .sidebar {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 2;
    }
    .main {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 3;
        grid-column-end: 13;

    }
    .footer {
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 3;
        grid-column-end: 13;

    }
    .copyright {
        font-size: 11pt;
        font-weight: 200;
        color: rgba(9, 20, 16, 0.849);
        position: absolute;
        top: calc(100vh - 10px);
    }

</style>