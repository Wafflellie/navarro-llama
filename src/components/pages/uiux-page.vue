<script setup>
    import UIUXWidget from '../sub_components/UIUX/1-UIUXwidget.vue'
    import UIUXContent from '../sub_components/UIUX/2-WidgetBannerContent.vue'
</script>

<template>
        <div style="width: 100%;
                    display: flex;
                    row-gap: 2rem;
                    z-index: 5;
                    position: absolute;
                    background-color: #E7EEFC;
                    padding-bottom: 200px;">

    
    
          <a-row style="width: 100%; padding: 0px 200px;">
    <!-- WIDGET'S COLUMN -->
              <a-col :span="13">
                <UIUXWidget />              
              </a-col>


    <!-- HEADLINE TEXT COLUMN--->
              <a-col :span="11" style="padding-left: 30px; align-self: center;">
                <UIUXContent/>
              </a-col>
          </a-row>
      </div>
    
</template>

<style scoped>

</style>