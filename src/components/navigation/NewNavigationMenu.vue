<script setup>
    import LogoText from './LogoText.vue';
</script>

<template> 

    <nav>
        <ul style="margin-bottom: 0px;">
            <div style="position: absolute; position: absolute; top: 50%; transform: translate(127%, -45%);">
                <LogoText />
            </div>

            <div class="menu-category">
              <!-- ACTIVE BUTTON -->
                <li class="div-active-menu" v-for="active in activeMenu" :key="active.text">
                    <button class="active-menu" href=""> {{ active.text }}</button>
                    <div style="height: 2px; width: 80px; background-color: #FB8B8A;"> </div>
                </li>
                
              <!-- INACTIVE BUTTONS -->
                <li v-for="inactive in inactiveMenu" :key="inactive.text">
                    <button class="inactive-menu" href="" @click="setActive(inactive)"> {{ inactive.text }}</button>
                </li>
            </div>

        </ul>
    </nav>


  </template>


    <script>
    import '@/assets/main.css';
    import { defineComponent, reactive, toRefs } from 'vue';


    export default defineComponent({
    setup() {

    },

    data() {
        return {
            menuItem: [
                        { text: 'UX / UI DEVELOPMENT', isActive: false, routerLink: '' },
                        { text: '3D & GAME DESIGN', isActive: true, routerLink: '' },
                        { text: 'MARKETING MATERIALS', isActive: false, routerLink: '' }
                        ]
                };
            },

        computed: {
            activeMenu() {
            return this.menuItem.filter(menuitem => menuitem.isActive);
            },

            inactiveMenu() {
            return this.menuItem.filter(menuitem => !menuitem.isActive);   
            }


        },

        mounted() {
        },


        methods: {
            setActive(index) {
            this.menuItem.forEach(item => {
                item.isActive = item === index;
                });
            }
        }

        });
    </script>


  <style>

    nav {
        border-bottom: 1px solid #00000011;
        background-color: #E7EEFC;    }

    .menu-category {
        justify-content: center;
        display: flex;
        gap: 200px;
    }

    li {
        list-style: none; 
        font-size: 16px;
    }


/* THE ACTIVE TAB */

.div-active-menu {
    position: absolute;
    opacity: 0;
    animation-name: fade-in;
    animation-duration: 0.6s;
    animation-delay: 0.2s; /* Adjust the delay time as per your requirement */
    animation-fill-mode: forwards;

    text-align: -webkit-center;

}

@keyframes fade-in {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.active-menu {
  /* CSS styles for menu item with position 2 */
  /* Adjust the class name based on your desired styling */
    font-size: 18px;
    font-weight: 700;
    font-family: 'Inter';
    color: #F16C28;
    background: none;
    border: none;

    padding: 20px 30px 0px 30px;

}

.inactive-menu {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Inter';
    background: none;
    border: none;
    width: 285px;
    color: #242424;
    padding: 22px 30px;


    transition: ease 0.6s;


}

.inactive-menu:hover { 
  color: #FA438B;
  font-weight: 500;
}

  </style>