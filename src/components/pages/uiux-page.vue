<script setup>
    import UIUXWidget from '../sub_components/UIUX/1-uiuxwidget.vue'
    import UIUXContent from '../sub_components/UIUX/2-widgetbannercontent.vue'
    import UIUXProject from '../sub_components/UIUX/4-projects.vue'
    import ContactMe from '../sub_components/contact-me-section.vue'
</script>

<template>
        <div style="width: 100%;
                    display: flex;
                    row-gap: 2rem;
                    z-index: 5;
                    background: white;
                    padding-top: 30px;">

    
          <a-row style="width: 100%; padding: 0px 120px 100px 150px;">
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

      <div style="height: 10px; 
                  background: linear-gradient(90deg, #ffae67 0%, #ff5700 150%); 
                  display: flex;
                  justify-content: center;
                  align-items: center;">
      </div>
      <UIUXProject />

      <!-- LINE SEPERATOR -->
      <div style="height: 5px;   background: linear-gradient(90deg, #FF8D29 0%, #FFA75A 100%); ;"></div>

      <ContactMe />

    
</template>

<style scoped>

</style>