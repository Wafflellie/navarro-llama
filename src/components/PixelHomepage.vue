<script setup>
    // import WidgetsForUIUX from './sub_components/WidgetsForUIUX.vue'
    import NavigationMenu from './sub_components/NavigationMenu.vue'
    import LogoIcon from './sub_components/LogoIcon.vue'
    
    import firstUIWidget from './sub_components/UIUX/1-UIUXwidget.vue'

</script>

<template>

<NavigationMenu />
<div class="desktop-size"
   >
    <!-- MENU -->

    <div>
    
    <!-- CAROUSEL -->
    <!-- container for text content -->
        <div style="width: 100%;
                    display: flex;
                    row-gap: 2rem;
                    z-index: 5;
                    position: absolute;
                    margin-top: 15%;">
    
    
          <a-row style="width: 100%; padding: 0px 200px;">
    <!-- WIDGET'S COLUMN -->
              <a-col :span="14">col-12
                <firstUIWidget />
              </a-col>

    <!-- HEADLINE TEXT COLUMN--->
              <a-col :span="10"
                    style="padding-left: 30px;">
                
                <LogoIcon/>
    <!-- HEADLINE-->
                <h1 class="headlinetext mulish-white"
                    style="margin-bottom: 15px;"> 
                    From Pixels to Emotions</h1>
    <!-- SUBLINE-->
                <h4 class="sublinetext mulish-white"> 
                  Elevate Your Digital Products And Create Engaging Digital Products </h4>
    
    
                <button class="primary-button"> CUSTOM BUTTON </button>
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
    
      .mulish-white {
        font-family: 'Mulish';
        color: white;
        line-height: normal;
      }
      .headlinetext {
        font-size: 45px;
        font-weight: 800;
        color: #1d1d1d;
      }
    
      .sublinetext {
        font-size: 28px;
        font-weight: 500;
        color: #1d1d1d;

      }
    
    
      .primary-button
      {
        font-family: 'Mulish';
        margin-top: 30px;
        width: auto;
        height: 55px;
        padding: 0 25px;
        font-size: 17px;
        font-weight: 500;
        border-radius: 50px;
        border: none;
        color: white;
        background: linear-gradient(90deg, rgba(255,102,194,1) 0%, rgba(255,87,0,1) 100%, rgba(255,87,0,1) 150%);
      }
    
    
    
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