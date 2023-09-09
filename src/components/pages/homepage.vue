<script setup>
  import LogoIcon from '../sub_components/LogoIcon.vue'
  import ContactMe from '../sub_components/contact-me-section.vue'
</script>

<template>
  <div class="hm-div">

<!-- UPPER PART HOMEPAGE SECTION -->

    <LogoIcon style="width: 100px; height: auto;"/>
    <h1 class="hm-headline">Shaping creations into engaging digital adventure.</h1>
    <h3 class="hm-supportline">Craft digital ideas with Llama <span class="ellie-line">Ellie</span> Navarro.</h3>

    <div style="display: flex; margin-top: 30px;">
      <button class="yellow-button-home" style="margin-right: 15px;"> Explore Works </button>
      <button class="no-line-button" style="margin-left: 15px;"> Contact Me </button>
    </div>
  </div>

  <div style="height: 10px; 
                  background: linear-gradient(90deg, #759AFF 0%, #FF5C9A 60%, #F8C027 120%); 
                  display: flex;
                  justify-content: center;
                  align-items: center;">
  </div>
  <!-- SKILLSET SECTION -->

  <div style="height: auto; 
              /* background-color: #F7F9FE; */
              /* box-shadow: inset 0 10px 30px rgba(0, 0, 0, 0.1); */
              ">
    
    <div class="web-container">
      <p class="minisectionheader">WHAT CAN I DO?</p>
      <h2 class="sectionheader">Here are the services that I can provide</h2>

      <a-row style="margin-top: 50px;" :gutter="30">

          <a-col class="skill-col" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
            <div class="skill-div"
                 style="background-image: url('/navarro-llama/src/assets/images/00-for-ui-ux.png');">
              <p class="items-listed-text">UI UX Design</p>
            </div>
          </a-col>

          <a-col class="skill-col" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
            <div class="skill-div"
                 style="background-image: url('/navarro-llama/src/assets/images/00-for-branding.png');">
              <p class="items-listed-text">Graphic Design</p>
            </div>
          </a-col>

          <a-col class="skill-col" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
            <div class="skill-div"
                 style="background-image: url('/navarro-llama/src/assets/images/00-for-marketing.png');">
              <p class="items-listed-text">Creative Marketing</p>
            </div>
          </a-col>

          <a-col class="skill-col" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
            <div class="skill-div"
                 style="background-image: url('/navarro-llama/src/assets/images/00-for-3d-game.png');">
              <p class="items-listed-text"
                  >3D & Game Assets</p>
            </div>
          </a-col>
      </a-row>
    </div>
  </div>
  
   <ContactMe />

</template>
 



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Handlee&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');



nav {
  background-color: #759aff00;
}
.hm-div {
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  /* box-shadow: 0 10px 30px rgb(0 0 0 / 15%) */
  /* background: linear-gradient(180deg, #e7eefc 0%, #ffffff 50%, #e7eefc 100%); */
  
}

.hm-headline {
  font-family: 'Inter';
  font-weight: 900;
  font-size: 55px;

  background-image: linear-gradient(64deg, #759aff 10%, #ff5c9a 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  width: 900px;
  line-height: initial;
}

.hm-supportline {
  font-family: 'Inter';
  font-weight: 600;
  color: #a8a8a8;
  font-size: 25px;
  margin-bottom: 40px;
}

.ellie-line {
  font-family: 'DM Sans';
  font-weight: 900;
  font-size: 25px;

  background: linear-gradient(90deg, rgba(250,67,139,1) 0%, rgba(248,192,39,1) 120%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skill-col {
  display: flex;
  flex-direction: column;
}  
.skill-div {
  display: flex;
  align-items: end;
  width: auto;
  height: 360px;
  width: auto;
  background-size: contain; /* Adjust to your preference */
  background-repeat: no-repeat;
  background-color: #e9efff;
  border-radius: 20px;

  cursor: pointer;
  transition: background-color 0.3s ease;
} 

.items-listed-text {
  font-family: 'Inter';
  font-size: 24px;
  font-weight: 800;
  text-align: left;
  margin: 20px 20px;
  background-image: linear-gradient(64deg, #FF6518 10%, #FF8D29 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; }


  /* hover state */
.skill-div:hover {
  background-color: #FFC03E;
  box-shadow: 0px 0px 30px 0px rgb(43 45 135 / 20%);}

</style>
