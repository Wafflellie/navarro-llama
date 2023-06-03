<template> 

        
        <a-row style="display: flex;
                    row-gap: 0px;
                    align-content: flex-end;
                    align-items: flex-end;
                    margin-top: 50px;">
        
        <!-- FOR COPY PASTE      -->
            <a-col :span="12">    
        
                    <p class="f-500" style="color: #989898"> Give a greeting! </p>
        
                    <!-- INPUT COPY FIELD -->
                    <div class="input-wrapper-widget">
                        <input 
                            class="copy-field"
                            type="text" 
                            id="copy-input" 
                            value="samplegmail.com" />
                        
                        <button @click="copyToClipboard"
                            class="copy-button" >
                            <img src="../../../assets/images/clipboard-icon-svg.svg" alt="Icon"/>
                        </button>
        
                    </div>
        
                    <div class="skill-toggle-widget">
                        <p style="font-weight: 600; font-size: 18px;"> Possible skillset </p>
                        
                        <div style="border-top: 1px solid #e0e0e0;
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                    padding: 15px 0 0 0;">
                        </div>
        
                    <div class="scrollable">
                        <div class="toggle-div">

                            <div v-for="(skill, index) in skillSet" :key="index"
                                style="display: flex; justify-content: space-between; width: 100%; margin-bottom: 5px;">
                                <label class="switch-label" for="switch">
                                    {{skill.skill}}
                                </label>
<!-- @change handlefunction is added   -->

                                <a-switch :checked="skill.isActive" @change="handleChangeSkill(index)" />
                            </div>
                        </div>
  
                  
                    </div>
                        
                    </div>
        
                    
        
            </a-col>
        
        <!-- MODAL FOR UI UX -->
            <a-col :span="12">
                <div class="pop-out-widget"> 
                    <div style="background: linear-gradient(90deg, rgba(9,44,76,1) 0%, rgba(70,129,137,1) 100%);
                                height: 145px;
                                border-radius: 15px 15px 0px 0px;">
                    </div>
        
                    <div style="margin: 20px 20px 0px 20px; text-align: center;" >
                        
                        <p style="font-weight: 500; 
                                font-size: 18px;
                                line-height: normal;
                                font-weight: 500;
                                margin: 15px 0px 20px 0px;
                                ">Lorem ipsum dolor sit am et, consectetur adipi.
                        </p>
        
                        
                        <div style="border-top: 1px solid #e0e0e0;
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                    padding: 20px 0;">
                        
                            <div style="display: flex;">
        
                                <div class="card-avatar">
                                    <img src="../../../assets/images/llama-pink-img.png" alt="Avatar">
                                </div>
        
                                <div style="display: flex;
                                            flex-direction: column;
                                            align-items: flex-start;">
                                    <p class="name-text-card">Lorem Name</p>
                                    <p class="email-text-card">lorem@ellie.com</p>
                                </div>
        
                            </div>
        
                            <button class="blue-button small-button"> Visit </button>
        
                        </div>
        
                    </div>
                </div>
            </a-col>
        
        </a-row>

    <!-- NEXT ROW -->
        <a-row style="margin-top: 30px;">

    <!-- SOCIAL ICON MODAL -->
            <a-col :span="2.7" >
                <div class="social-icon-widget" > 
                <!-- linkedin -->
                    <a href="https://www.linkedin.com" target="_blank">
                        <img class="social-icon" src="../../../assets/social-icons/linkedin-icon.png" alt="Facebook Icon">
                    </a>
                <!-- behance -->
                    <a href="https://www.behance.com" target="_blank">
                        <img class="social-icon" src="../../../assets/social-icons/behance-icon.png" alt="Facebook Icon">
                    </a>
                <!-- dribbble -->
                    <a href="https://www.linkedin.com" target="_blank">
                        <img class="social-icon" src="../../../assets/social-icons/dribbble-icon.png" alt="Facebook Icon">
                    </a>
                 <!-- linkedin -->
                    <a href="https://www.linkedin.com" target="_blank">
                        <img class="social-icon" src="../../../assets/social-icons/artstation-icon.png" alt="Facebook Icon">
                    </a>

                </div> 
            </a-col>

    <!-- STEPPER AND RECEIPT WIDGET -->
            <a-col :span="18">

    <!-- STEPS WIDGET             -->
                <div class="stepper-widget">

                    <div id="app">
                        <div class="progress">
    <!-- steps div -->
                            <div style="display: flex; justify-content: space-between;">
                                <div class="step" v-for="(step, index) in steps" :class="getStepClasses(index)">
                                    
                                    <div class="step-div">
                                        <div class="number">{{ index + 1 }}</div>
                                    </div>

                                    <div class="step-text">
                                        {{ step.text }}
                                    </div>

                                    <div class="step-subtext">
                                        {{ step.description }}
                                    </div>

                                </div>
                            </div>

    <!-- line's div -->
                            <div style="position: absolute; display: flex; z-index: 1; top: 11px; width: 100%; justify-content: space-between; padding: 0px 75px 0px 45px;">
                                        
                                <div v-for="(step, index) in statusLine" :key="index">
                                    <div class="line" :class="step.status" 
                                            style="width: 95px; height: 4px; border-radius: 15px; margin-right: 0px;" >
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>


                    

                </div>

                
    <!-- RECEIPT WIDGET -->
                <div class="receipt-widget">
                    <a-row>
                        <a-col :span="9" style="padding: 20px;">
                            <p class="f-98"> Includes features </p>
                            <div style="display: flex;" v-for="skill in activeSkills" :key="skill.skill">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <p class="f-51" style="margin-left: 10px;"> {{ skill.skill }} </p>
                            </div>
                        </a-col>

                        <a-col :span="15" style="height: 200px; display: flex;">
<!-- broken line svg-->
                        <svg width="1" height="100%" viewBox="0 0 1 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="2.18557e-08" x2="0.49999" y2="220" stroke="#E0E0E0" stroke-dasharray="7 7"/>
                        </svg>
                        
                        <div style="padding: 30px; width: 100%;">
                            <h3> Order confirmation </h3>
                            <a-row class="f-98 f-200" style="margin-bottom: 5px;">
                                <a-col :span="9"> <span>Product</span> </a-col>
                                <a-col :span="7"> <span>Quantity</span> </a-col>
                                <a-col :span="8"> <span>Amount</span> </a-col>
                            </a-row>
                            <hr>

                            <a-row class="f-24 f-500" style="margin-top: 5px;">
                                <a-col :span="9"> <p style="font-weight: 500;">LAGN Services</p> </a-col>
                                <a-col :span="7">
                                    <div style="display: flex;">
                                        <button @click="decrementNumField">-</button>
                                        <input type="number" v-model="numberInput"
                                               style="width: 35px;
                                                      display: flex;
                                                      text-align: center;">
                                        <button @click="incrementNumField">+</button>
                                    </div>
                                </a-col>
                                <a-col :span="8"> <p style="font-weight: 700;">$ 1,234.00</p> </a-col>
                            </a-row>


                        </div>

                        </a-col>
                    </a-row>
                </div>
            </a-col>
        </a-row>
    
    </template>
    


    <script>
        import '@/assets/main.css';
        import { defineComponent, reactive, toRefs } from 'vue';

    
        export default defineComponent({
            setup() {
                const state = reactive({
                checked1: true,
                checked2: false,
                });
                    return { ...toRefs(state) };
                },
// DATA
            data() {
                return {

                    numberInput: 1,

                    //step progress data
                    steps: [
                        { text: 'Step 1', status: 'completed', description: 'Visit Llama’s website' },
                        { text: 'Step 2', status: 'cancelled', description: 'Contact the designer' },
                        { text: 'Step 3', status: 'in-progress', description: 'Explore skill pages' },
                        { text: 'Done!', status: 'todo', description: 'All good!' }
                           ],

                    skillSet: [
                        { skill: 'UI UX Design', isActive: true },
                        { skill: '3D & Game Asset Design', isActive: true },
                        { skill: 'Google Banner Ads', isActive: false },
                        { skill: 'Graphic Design', isActive: false },
                        { skill: 'Branding Design', isActive: false },
                        { skill: 'Web and Mobile Design', isActive: true },

                        ]                    
                };
            },

// COMPUTED IS FOR DISPLAY PURPOSES
            computed: {
                statusLine() {
                    return this.steps.slice(0, 3);
                },

                activeSkills() {
                     return this.skillSet.filter(skill => skill.isActive);
                }
            },
            


            methods: {

                copyToClipboard() {
                    //Get textfield
                    var copyText = document.getElementById('copy-input');
                    //Select the textfield
                    copyText.select();
                    
                    //Copy the text inside the text field
                    navigator.clipboard.writeText(copyText.value);
        
                    //alert
                    // alert("Copied!");
                    },

                //FOR STEP PROGRESS    
                getStepClasses(index) {
                    const step = this.steps[index];
                    return {
                        'completed': step.status === 'completed',
                        'in-progress': step.status === 'in-progress',
                        'todo': step.status === 'todo',
                        'cancelled': step.status === 'cancelled'
                    };
                },

                handleChangeSkill(index) {
                // Update isActive for the skill at the specified index
                this.skillSet[index].isActive = !this.skillSet[index].isActive;
                },

                incrementNumField() {
                //add value to the number input field    
                    this.numberInput++;
                },

                decrementNumField() {
                //minus value to the number input field
                    this.numberInput--;
                }

        
                }
    
            });
    

    </script>
    
    
    <style>
    
    @import url('https://fonts.googleapis.com/css2?family=Handlee&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');


    /* UP AND DOWN BUTTON REMOVABLE INPUT NUM FIELD */
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0;  }

/* RECEIPT WIDGET */
    .receipt-widget {

        margin-top: 30px;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 0px 10px 0 rgba(0,0,0,0.1);
    }

/* STEPPER WIDGET */
    .stepper-widget {
        border-radius: 15px;
        background-color: white;
        box-shadow: 0 0px 10px 0 rgba(0,0,0,0.1);
        padding: 25px;
    }

    .step-div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 30px;
    }

    .progress {
    position: relative;
    justify-content: space-between;
    }

    .step {
    position: relative;
    /* width: 90%; */
    }

/* step line */
    /* .step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -30%;
    width: 100%;
    height: 2px;
    background-color: #fa0000;
    transform: translateY(-50%);
    } */

    .number {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    background-color: #ccc;
    color: #fff;
    font-size: 16px;
    }

    .step-text {
    margin-top: 10px;
    font-size: 13px;
    font-weight: 500;
    font-family: 'Inter';
    color: #828282;
    }

    .step-subtext {
        font-family: 'Inter';
        font-size: 11px;
        color: #C6C6C6;
    }
/* STEP COLOR */
    .step.completed .number {
    background-color: #27AE61;
    }

    .step.in-progress .number {
    background-color: #2F80EC;
    }

    .step.todo .number {
    background-color: #D9D9D9;
    }

    .step.cancelled .number {
    background-color: #EB5757;
    }
/* LINE COLOR */
    .line.completed {
    background-color: #27AE61;
    }

    .line.in-progress {
    background-color: #2F80EC;
    }

    .line.todo {
    background-color: #D9D9D9;
    }

    .line.cancelled {
    background-color: #EB5757;
    }


/* SOCIAL ICONS WIDGET     */
    .social-icon-widget {
        display: inline-grid;
        border-radius: 15px;
        background-color: white;
        height: auto;
        width: auto;
        padding: 15px 15px;
        margin-right: 20px;
    }

    .social-icon  {
        background-color: #E8E8E9;
        height: auto;
        padding: 10px;
        border-radius: 10px;
        margin: 8px 0px
    }

    .social-icon:hover {
        background-color: #d3d3d3;
    }



/* SKILL TOGGLE WIDGET */
    
    /* track style */
    ::-webkit-scrollbar-track {
    background-color: #eeeeee;
    }
    
    /* handle style */
    ::-webkit-scrollbar-thumb {
      background: #dadada;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #c0c0c0;
    }
    
    
            .scrollable {
            height: 110px; /* set a fixed height for the div */
            overflow: auto; /* enable scrolling */
            }
    
            .toggle-div {
            display: flex; 
            flex-direction: column;
            align-items: flex-start; 
            /* margin-bottom: 15px; */
            margin-right: 15px;
            }
    
            .skill-toggle-widget {
            background-color: white;
            border-radius: 20px;
    
            height: auto;
            width: auto;
            margin: 0 30px 0px 0;
            padding: 20px;
            }
    
            .switch-label {
                font-family: 'Inter';
                font-weight: 500;
                font-size: 15px;
                color: #989898;
            }
    
    
/* FOR COPY PASTE WIDGET */
            .input-wrapper-widget {
            position: relative;
            display: flex;
            justify-content: flex-end;
            width: auto;
            margin: 0 30px 30px 0;
            }
    
            .copy-field {
                height: 50px;
                width: 100%;
                background: #d9d9d956;;
                border-radius: 10px;;
                border-style: solid;
                border-color: #d9d9d9;
                font-size: 14px;
                padding-left: 15px;
            }
    
            .copy-button {
            position: absolute;
            align-self: center;
            margin-right: 10px;
            background-color: white;
    
                border-style: none;
                width: 30px;
                height: 30px;
                display: flex;
                border-radius: 5px;
                justify-content: center;
                align-items: center;
    
                transition: box-shadow 0.3s ease-in-out;
            }
    
            .copy-button:hover {
                box-shadow: 0 8px 10px 0 rgba(0,0,0,0.1);
            }
    
/* CSS FOR POP UP MODAL */
    
    .pop-out-widget {
        height: auto;
        width: 300px;
        background-color: white;
        border-radius: 20px;
        font-family: 'Mulish';
        box-shadow: 0 0px 10px 0 rgba(0,0,0,0.1);

    }
    
    .card-avatar {
        border: 3px solid #d9d9d9;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
    
    }
    
    .card-avatar img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .name-text-card {
        font-size: 13px;
        font-weight: 500;
        color: #828282;
        margin: 0;
    
    }
    
    .email-text-card {
        font-size: 11px;
        font-weight: 500;
        color: #bdbdbd;
        margin: 0;
    }
    
    
    /* CSS FOR TOGGLE WIDGET */
    
    </style>