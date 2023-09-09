<template>
  <div class="web-container-0">
    <a-row>

      <a-col style="display: flex; justify-content: end;" :xs="2" :sm="4" :md="6" :lg="12" :xl="12">
            <img style="width: 50%; margin-right: 100px;"

                 src="../../assets/images/00-the-llama.png" alt="">
      </a-col>
      
      <a-col style="display: flex; align-items: center;" :xs="20" :sm="16" :md="12" :lg="12" :xl="12">
        <div style="display: flex;
                    flex-direction: column;">

          <p class="minisectionheader">THINKING OF CONTACTING ME?</p>
          <h2 class="sectionheader">I'm just one click away... <br>Just hit the button to contact me.</h2>
          
          <button class="flex align-center yellow-button t-margin-30"> 
            <span style="margin-right: 15px;">Send me a message</span> 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg> 
          </button>

        </div>
      </a-col>


    </a-row>
  </div>
</template>

<script>
</script>

<style>


.items-listed-text {
  font-family: 'Inter';
  font-size: 24px;
  font-weight: 800;
  text-align: left;
  margin: 20px 20px;
  background-image: linear-gradient(64deg, #FF6518 10%, #FF8D29 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; }


</style>