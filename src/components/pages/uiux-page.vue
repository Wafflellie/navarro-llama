<script setup>
    import UIUXWidget from '../sub_components/UIUX/1-UIUXwidget.vue'
    import UIUXContent from '../sub_components/UIUX/2-WidgetBannerContent.vue'
    import UIUXProjects from '../sub_components/UIUX/3-Projects.vue'
</script>

<template>
        <div style="width: 100%;
                    display: flex;
                    row-gap: 2rem;
                    z-index: 5;
                    background: linear-gradient(180deg, rgba(231,238,252,1) 0%, rgba(255,255,255,1) 50%, rgba(231,238,252,1) 100%);
                    padding-top: 40px;">

    
    
          <a-row style="width: 100%; padding: 0px 150px 100px 150px;">
    <!-- WIDGET'S COLUMN -->
              <a-col :span="13">
                <UIUXWidget />              
              </a-col>


    <!-- HEADLINE TEXT COLUMN--->
              <a-col :span="11" style="align-self: center;">
                <UIUXContent/>
              </a-col>
          </a-row>
      </div>

      <UIUXProjects />
    
</template>

<style scoped>

</style>