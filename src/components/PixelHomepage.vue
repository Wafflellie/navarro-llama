<script setup>
    import WidgetsForUIUX from './sub_components/WidgetsForUIUX.vue'
</script>

<template>

<div class="desktop-size">
    <!-- MENU -->
    <a-menu mode="horizontal"
            style="display: flex;
                padding: 12px;
                font-size: 16px;
                justify-content: space-between;
           ">
    
            <!--right aligned-->
            <div style="display:flex">
              <a-menu-item key="mail" >
                <template #icon> <mail-outlined /> </template>
                  Homepage
              </a-menu-item>
    
              <a-menu-item key="contact" >
                <template #icon> <mail-outlined /> </template>
                  Contact Page
              </a-menu-item>
            </div>
    
    
            <!-- left aligned -->
            <div style="display:flex">
              <a-menu-item key="none" disabled>
                <template #icon>
                    <appstore-outlined />
                  </template>
                  UI UX Development
                  
                </a-menu-item>
    
                <a-menu-item key="mail" >
                  <template #icon> <mail-outlined /> </template>
                  3D & Development
                </a-menu-item>
    
                <a-sub-menu key="sub1">
                  <template #title>
                    Marketing Graphic Materials
                  </template>
                  <a-menu-item-group title="Item 1"
                        >
                    <a-menu-item key="setting:1">Option 1</a-menu-item>
                    <a-menu-item key="setting:2">Option 2</a-menu-item>
                  </a-menu-item-group>
                  <a-menu-item-group title="Item 2">
                    <a-menu-item key="setting:3">Option 3</a-menu-item>
                    <a-menu-item key="setting:4">Option 4</a-menu-item>
                  </a-menu-item-group>
                </a-sub-menu>
    
    
                <a-menu-item key="alipay">
                  <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
                    Ant Design
                  </a>
                </a-menu-item>
            </div>
      </a-menu>

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
    
              <a-col :span="14">col-12
                <WidgetsForUIUX />
              </a-col>
              <a-col :span="10"
                    style="padding-left: 30px;">
                
                <a-avatar :size="55" style="margin-bottom: 20px;">U</a-avatar>
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
      }
    
      .sublinetext {
        font-size: 35px;
        font-weight: 500;
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
        background: #364d79;
        overflow: hidden;
        height: 100vh;
      }
    
      .ant-carousel :deep(.slick-slide h3) {
        color: #fff;
      }
    </style>