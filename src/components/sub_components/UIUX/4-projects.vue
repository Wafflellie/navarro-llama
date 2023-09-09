<script>
    import { defineComponent } from 'vue';

    import ArrowBtnGreen from '../../button/arrow-btn-green.vue';
    import ArrowBtnOrange from '../../button/arrow-btn-orange.vue';
    import ArrowBtnBlue from '../../button/arrow-btn-blue.vue';

    export default defineComponent({
    setup() { },
    data() {
        return {
            MyProjects: [
                {
                    key: 'p_1',
                    title: 'GO RICE PH',
                    description: 'My First e-commerce website: Designed in Figma and actively participated in development using Vue.js. Our Vue.js implementation seamlessly integrates dynamic functionalities, ensuring a smooth and intuitive user experience. From the customer-facing pages to the robust administrative features',
                    imagepath: '/navarro-llama/src/assets/images/ui_ux/go-rice-proj.png',
                    date_created: 'DEC 2020',
                    tags: ' '
                },
                {
                    key: 'p_2',
                    title: 'LEZGO APP',
                    description: 'My First e-commerce website: Designed in Figma and actively participated in development using Vue.js. Our Vue.js implementation seamlessly integrates dynamic functionalities, ensuring a smooth and intuitive user experience. From the customer-facing pages to the robust administrative features',
                    imagepath: '/navarro-llama/src/assets/images/ui_ux/lezgo-app-proj.png',
                    date_created: 'JAN 2021',
                    tags: ' '
                },
                {
                    key: 'p_3',
                    title: 'PHONE ANSWERING AUSTRALIA',
                    description: 'My First e-commerce website: Designed in Figma and actively participated in development using Vue.js. Our Vue.js implementation seamlessly integrates dynamic functionalities, ensuring a smooth and intuitive user experience. From the customer-facing pages to the robust administrative features',
                    imagepath: '/navarro-llama/src/assets/images/ui_ux/answering-proj.png',
                    date_created: 'DEC 2020',
                    tags: ' '
                },
                {
                    key: 'p_4',
                    title: 'PHONE ANSWERING AUSTRALIA',
                    description: 'My First e-commerce website: Designed in Figma and actively participated in development using Vue.js. Our Vue.js implementation seamlessly integrates dynamic functionalities, ensuring a smooth and intuitive user experience. From the customer-facing pages to the robust administrative features',
                    imagepath: '/navarro-llama/src/assets/images/ui_ux/lezgo-app-proj.png',
                    date_created: 'DEC 2020',
                    tags: ' '
                }
            ]
        };
    },
    computed: {},
    methods: {},
    components: { ArrowBtnGreen, ArrowBtnOrange, ArrowBtnBlue }
});
</script>


<template> 
    <div style="height: auto; 
              background-color: #F7F9FE;
              box-shadow: inset 0 10px 30px rgba(0, 0, 0, 0.1);">
    
        <div class="web-container">

<!-- PROJECT 1 -->
            <a-row justify="start" style="margin-bottom: 200px;">
                <a-col style="display: flex; margin-top: 40px;" :xd="0" :sm="0" :md="11" :lg="11" :xl="11">
                    <div class="line-bar"></div>
                    <div class>

                        <div class="flex">
                            <div class="tags-div">
                                <p class="tags-txt">WEB DESIGN</p>
                            </div>
                            <div class="tags-div">
                                <p class="tags-txt">BRANDING</p>
                            </div>
                        </div>
                        
                        <h2 class="f-masking title-green">{{ MyProjects[0].title }}</h2>
                        <p class="content-98">{{ MyProjects[0].description }}</p>
                        <div class="t-margin-30">
                            <ArrowBtnGreen />
                        </div>
                    </div>
                </a-col>

                <a-col :xd="0" :sm="0" :md="13" :lg="13" :xl="13"> 
                    <img class="image-project" :src="MyProjects[0].imagepath" alt="Project Image">
                </a-col>
            </a-row>
            
<!-- PROJECT 2 -->
            <a-row justify="end" style="margin-bottom: 200px;">

                <a-col :xd="0" :sm="0" :md="13" :lg="13" :xl="13"> 
                    <img class="image-project" :src="MyProjects[1].imagepath" alt="Project Image">
                </a-col>

                <a-col style="display: flex; margin-top: 40px;" :xd="0" :sm="0" :md="11" :lg="11" :xl="11">
                    <div class="line-bar"></div>
                    <div >
                        
                        <div class="flex">
                            <div class="tags-div">
                                <p class="tags-txt">CONCEPT APP</p>
                            </div>
                            <div class="tags-div">
                                <p class="tags-txt">UX CASE STUDY</p>
                            </div>
                        </div>

                        <h2 class="f-masking title-orange">{{ MyProjects[1].title }}</h2>
                        <p class="content-98"> {{ MyProjects[1].description }}</p>
                        <div class="t-margin-30">
                            <ArrowBtnOrange />
                        </div>
                    </div>
                </a-col>
            </a-row>

<!-- PROJECT 3 -->
            <a-row justify="start" style="margin-bottom: 200px;">

                <a-col style="display: flex; margin-top: 40px;" :xd="0" :sm="0" :md="11" :lg="11" :xl="11">
                    <div class="line-bar"></div>
                    <div >

                        <div class="flex">
                            <div class="tags-div">
                                <p class="tags-txt">WEB DESIGN</p>
                            </div>
                            <div class="tags-div">
                                <p class="tags-txt">BRANDING</p>
                            </div>
                            <div class="tags-div">
                                <p class="tags-txt">GRAPHIC DESIGN</p>
                            </div>
                        </div>

                        <h2 class="f-masking title-blue">{{MyProjects[2].title}}</h2>
                        <p class="content-98">{{ MyProjects[2].description }}</p>
                        <div class="t-margin-30">
                            <div class="t-margin-30">
                            <ArrowBtnBlue />
                        </div>
                        </div>
                    </div>
                </a-col>

                <a-col :xd="0" :sm="0" :md="13" :lg="13" :xl="13"> 
                    <img class="image-project" :src="MyProjects[2].imagepath" alt="Project Image">
                </a-col>
            </a-row>
            
<!-- PROJECT 4 -->
            <a-row justify="end">

            <a-col :xd="0" :sm="0" :md="13" :lg="13" :xl="13"> 
                <img class="image-project" :src="MyProjects[3].imagepath" alt="Project Image">
            </a-col>

            <a-col style="display: flex; margin-top: 40px;" :xd="0" :sm="0" :md="11" :lg="11" :xl="11">
                <div class="line-bar"></div>
                <div >

                    <div class="flex">
                            <div class="tags-div">
                                <p class="tags-txt">CONCEPT APP</p>
                            </div>
                            <div class="tags-div">
                                <p class="tags-txt">BRANDING</p>
                            </div>
                        </div>

                    <h2 class="f-masking title-orange">{{ MyProjects[3].title }}</h2>
                    <p class="content-98"> {{ MyProjects[3].description }}</p>
                </div>
            </a-col>
            </a-row>

            <ArrowBtnOrange />
            <ArrowBtnBlue />



        </div>

    </div>

</template>


<style>

.tags-div {
    background-color: black;
    height: 25px;
    width: fit-content;
    border-radius: 50px;
    padding: 0px 10px;
    margin-bottom: 10px;
    margin-right: 10px;

    display: flex;
    align-items: center;
}

.tags-txt {
    font-size: 11px;
    color: white;
    font-weight: 300;
    margin: 0;
}

.image-project {
    width: 100%; 
    height: auto; 
}


</style>