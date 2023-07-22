<template>
    <section class="project-header">
        <div class="mini-header">
            <img src="../../../assets/images/brush-icon.png" alt="brush-icon">
            <span class="minisectionheader">
                Design Projects
            </span>
        </div>
        
        <h2 class="sectionheader">
            A wide range of projects crafted with passion and expertise.
        </h2>
    </section>

    <section>


        <div v-for="(project, index) in projects"> 
            <a-row type="flex" style="margin-bottom: 100px;">               


                <a-col :span="11">
                    <a-row type="flex" style="height: 100%;">
<!-- BUTTON COLUMN -->
                        <a-col :span="3">
                            <button style="width: 45px; 
                                           height: 100%; 
                                           display: flex; 
                                           align-items: center;" 
                                    :class="project.button_status"> <span style="writing-mode: vertical-lr; 
                                                                                 padding-left: 5px;
                                                                                 font-weight: 800;
                                                                                 letter-spacing: 10px;
                                                                                 font-size: 13px;"> 
                                                                                 {{ project.button_display }}
                                                                    </span>
                            </button>                            
                        </a-col>
<!-- CONTENT COLUMN -->
                        <a-col :span="21" style="padding-right: 60px; display: flex; flex-direction: column; justify-content: center;">
                            <p style="font-size: 16px; margin-bottom: 0px;">CREATED</p>
                            <p class="date-created"> {{ project.date_created }} </p>

                            <p style="font-size: 16px; margin-bottom: 0px; margin-top: 30px;">PROJECT</p>
                            <h2 style=" text-transform: uppercase; 
                                        font-size: 32px; 
                                        font-weight: 800;
                                        -webkit-background-clip: text;
                                        -webkit-text-fill-color: transparent;" 
                                :class="project.class_name"> 
                                {{ project.title }} 
                            </h2>
                            <p style="white-space: break-spaces;">{{ project.proj_description }}</p>
                        </a-col>
                    </a-row>
                </a-col>

<!-- IMAGE COLUMN -->
                <a-col :span="13">
                    <img :src="project.proj_path" alt="Project Image" style="width: 100%; height: auto; fit-content; height: auto;">
                    <!-- <img src="../UIUX/project-image/go-rice-project.png" alt=""> -->
                </a-col>
            </a-row>
        </div>



                
           


    </section>

</template>



<script>
    import '@/assets/main.css';

    import { defineComponent } from 'vue';

    export default defineComponent({
        setup() {

        },

        data() {
            return {
                projects: [
                    {   key: 'proj_1', 
                        date_created: 'DEC 2020', 
                        title: 'GO RICE PH', 
                        proj_description: 'My First e-commerce website: Designed in Figma and actively participated in development using Vue.js.\n\nOur Vue.js implementation seamlessly integrates dynamic functionalities, ensuring a smooth and intuitive user experience. From the customer-facing pages to the robust administrative features.', 
                        proj_path: '/navarro-llama/src/components/sub_components/UIUX/project-image/go-rice-project.png',

                        class_name: 'title-green', 
                        button_status: 'visit-btn', 
                        button_display: 'VISIT'
                    },
                    {   key: 'proj_2', 
                        date_created: 'JAN 2020', 
                        title: 'LEZGO APP', 
                        proj_description: 'My First e-commerce website: Designed in Figma and actively participated in development using Vue.js. Our Vue.js implementation seamlessly integrates dynamic functionalities, ensuring a smooth and intuitive user experience. From the customer-facing pages to the robust administrative features.', 
                        proj_path: '/navarro-llama/src/components/sub_components/UIUX/project-image/lezgo-project.png',

                        class_name: 'title-orange', 
                        button_status: 'cs-btn', 
                        button_display: 'COMING SOON'
                    },
                    {   key: 'proj_3', 
                        date_created: 'DEC 2020', 
                        title: 'PHONE ANSWERING AUSTRALIA', 
                        proj_description: 'My First e-commerce website: Designed in Figma and actively participated in development using Vue.js.\n\nOur Vue.js implementation seamlessly integrates dynamic functionalities, ensuring a smooth and intuitive user experience. From the customer-facing pages to the robust administrative features.', 
                        proj_path: '/navarro-llama/src/components/sub_components/UIUX/project-image/pas-project.png',

                        class_name: 'title-green', 
                        button_status: 'visit-btn', 
                        button_display: 'VISIT'
                    },
                    {   key: 'proj_4', 
                        date_created: 'JAN 2020', 
                        title: 'HEALTH MOBILE APP', 
                        proj_description: 'My First e-commerce website: Designed in Figma and actively participated in development using Vue.js. Our Vue.js implementation seamlessly integrates dynamic functionalities, ensuring a smooth and intuitive user experience. From the customer-facing pages to the robust administrative features.', 
                        proj_path: '/navarro-llama/src/components/sub_components/UIUX/project-image/go-rice-project.png',

                        class_name: 'title-blue', 
                        button_status: 'cs-btn', 
                        button_display: 'COMING SOON'
                    },
                ]
            };
        },

        computed: {

        },

        methods: {
            getImageStyle(imagePath) {
                return `background-image: url('${imagePath}')`
            }
        }
    });

</script>

<style>
    .image-container {
        height: 100%;
        width: 100%;
    }

    .minisectionheader {
        background-image: linear-gradient(64deg, #FA438B 0%, #F3994B 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .project-header {
        padding: 120px 0 100px 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        /* background: linear-gradient(180deg, rgb(214 223 245) 0,rgba(231,238,252,1) 50%, rgba(255,255,255,1) 100%); */
    }

    .mini-header {
        align-items: center;
        display: flex;
    }
    .mini-header img {
        margin-right: 5px;
        height: 20px;
        width: 20px;
    }

    .date-created { 
        font-size: 25px;
        font-weight: 900;
        color: #242424;
        margin-bottom: 0px;
    }

/* TITLE GRADIENT COLOR */
    .title-green {
        background: linear-gradient(90deg, rgba(52,94,0,1) 0%, rgba(198,217,145,1) 100%);
    }

    .title-blue {
        background: linear-gradient(90deg, #0063F8 0%, #00B2FF 100%);
    }

    .title-orange {
        background: linear-gradient(90deg, #ff7300 0%, rgb(255, 53, 17) 100%);
    }

/* PROJECTS BUTTON STATUS */
    .visit-btn {
        background-color: #242424;
        color: white; 
    }

    .cs-btn {
        background-color: white;
        color: #DEDEDE;
        border-style: none;
    }
</style>