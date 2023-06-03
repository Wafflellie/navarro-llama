<script setup>
    // import WidgetsForUIUX from './sub_components/WidgetsForUIUX.vue'
    import NavigationMenu from './sub_components/NewNavigationMenu.vue'

    import UIUXWidget from './sub_components/UIUX/1-UIUXwidget.vue'
    import UIUXContent from './sub_components/UIUX/2-WidgetBannerContent.vue'
</script>

<template>

<div class="desktop-size">
    <!-- MENU -->
    <nav style="position: sticky; top: 0; z-index: 100;">
      <NavigationMenu />
    </nav>

    <div>
    <!-- CAROUSEL -->
    <!-- container for text content -->
        <div style="width: 100%;
                    display: flex;
                    row-gap: 2rem;
                    z-index: 5;
                    position: absolute;">

    
    
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
        <div class="stack-top"
             >
    
        </div>
    
        <div></div>
        <a-carousel autoplay style="z-index: -1;">
          <div>
            <h1 style="font-size: 45px; color: white;"></h1>
          </div>
          <!-- <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div> -->
        </a-carousel>
      </div>

</div>
</template>



<style scoped>
    
    /* Font new */
      @import url('https://fonts.googleapis.com/css2?family=Handlee&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    
    
      /* homepage banner */
    

    
    

    
    
    
      .stack-top {
        position: absolute;
      }
    
    /* For demo */
      .ant-carousel :deep(.slick-slide) {
        /* margin-top: 100px; */
        text-align: center;
        height: 700px;
        line-height: 160px;
        background: #E7EEFC;
        overflow: hidden;
        height: 100vh;
      }
    
      .ant-carousel :deep(.slick-slide h3) {
        color: #fff;
      }
    </style>
