<template>

  <a-menu   mode="horizontal" 
            style="align-items: center; padding-right: 50px; padding-top: 15px; background-color: #E7EEFC;"
           >

        <div style="width: 100%;">
            <a-menu-item style="margin-left: 50px;">
                <router-link to="/navarro-llama/" exact>
                    <LogoText />
                </router-link>
            </a-menu-item>
        </div>


        <a-menu-item key="uiux">
            <router-link to="/navarro-llama/uiux/" exact>
            <template #icon>
            </template>
            UX / UI Design & Development
            </router-link>   
        </a-menu-item>


        <a-menu-item key="a">
            <template #icon>
            </template>
            3D & Game Assets
        </a-menu-item>

        <a-menu-item key="b">
            <template #icon>
            </template>
            Marketing Related Design
        </a-menu-item>

    <!-- </div> -->
</a-menu>

</template>

<script setup>
        import LogoText from '../sub_components/LogoText.vue'
</script>

<style>


</style>