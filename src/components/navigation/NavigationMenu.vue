

<template> 

<nav>
  <div style="margin-left: 30px;">
    <router-link to="/navarro-llama/" exact>
      <LogoText />
    </router-link>
  </div>

  <ul class="menu">

      <router-link to="/navarro-llama/uiux/" exact>
        <li><a href="#">UI / UX Design & Development </a></li>
      </router-link>
      

      <li><a href="#">3D & Game Assets</a></li>
      <li><a href="#">Marketing Related Design</a></li>
  </ul>
  </nav>

</template>


<script setup>
        import LogoText from '../sub_components/LogoText.vue'
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Handlee&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

nav {
  margin-top: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100vw;
}



.menu li {
  display: inline-block;
  margin-right: 10px;
}

.menu li a {
  text-decoration: none;
  color: #7d7d7d;
  padding: 15px;
  font-family: 'Mulish';
  font-weight: 500;
  font-size: 16px;
}

.menu li a:hover {
  color: #ff5c9a;
  /* background-color: #e0e0e0; */
background: linear-gradient(64deg, #759aff1f 10%, #ff5c9b17 80%);
  border-radius: 10px;
}

</style>


