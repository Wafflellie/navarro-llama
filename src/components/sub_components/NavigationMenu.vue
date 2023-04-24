<script>
    import '@/assets/main.css';
    export default {
  name: "NavigationMenu",
};

</script>

<template> 
  
  <div class="navigation">
    <nav>
      <ul>
        <div>
          <li><router-link to="/">LOGOTEXT</router-link></li>
          <li><router-link to="/about">Contact me</router-link></li>
        </div>
        <div>
          <li><router-link to="/about">UI UX Development</router-link></li>
          <li><router-link to="/about">3D & Game Assets</router-link></li>
          <li><router-link to="/about">Marketing Materials</router-link></li>
        </div>
      </ul>
    </nav>
  </div>

</template>



<style>

@import url('https://fonts.googleapis.com/css2?family=Handlee&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
.navigation {
  position: absolute;
  z-index: 100;

  background-color: #fff;
  color: #242424;
  margin-top: 1rem;
  width: 80%;

  margin: 15px auto;
  padding: 15px 10px;
  border-radius: 20px;

  left: 50%;
  transform: translate(-50%, 0);
}

.navigation ul {
  list-style: none;
  display: flex;
    justify-content: space-between;
  margin: 0;
  padding: 0;
}

.navigation ul li {
  display: inline-block;
  padding: 10px;
  font-family: 'Mulish';
  font-size: 18px;
  color: #242424;
  padding: 10px 20px;
  margin: 0 5px;
  transition: background-color 0.3s ease;
  border-radius: 15px;

}

.navigation li:hover {
    background-color: #c7c7c742;
}


/* <a-menu mode="horizontal"
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
      </a-menu> */
</style>


