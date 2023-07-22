<script setup>
  import LogoIcon from '../sub_components/LogoIcon.vue'
</script>

<template>
  <div class="hm-div">

    <LogoIcon style="width: 100px; height: auto;"/>
    <h1 class="hm-headline">Shaping creations into engaging digital adventure.</h1>
    <h3 class="hm-supportline">Craft digital ideas with Llama <span class="ellie-line">Ellie</span> Navarro.</h3>

    <div style="display: flex; margin-top: 30px;">
      <button class="pink-button-home" style="margin-right: 15px;"> Explore Works </button>
      <button class="no-line-button" style="margin-left: 15px;"> Contact Me </button>
    </div>


  </div>
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
  background: linear-gradient(180deg, rgba(231,238,252,1) 0%, rgba(255,255,255,1) 50%, rgba(231,238,252,1) 100%);
  
}

.hm-headline {
  font-family: 'Mulish';
  font-weight: 900;
  font-size: 60px;

  background-image: linear-gradient(64deg, #759aff 10%, #ff5c9a 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  width: 900px;
  line-height: initial;
}

.hm-supportline {
  font-family: 'Mulish';
  font-weight: 700;
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


/* DESIGN CARD CLASS */
.hm-design-p {
  border: 1.5px solid #4d4d4d36;
  width: 100%;
  height: auto;
  border-radius: 20px;
  padding: 15px 25px;
}

.num-p {
  font-family: 'DM Sans';
  font-size: 60px;
  font-weight: 700;
  color: #2424241e;
}

</style>
