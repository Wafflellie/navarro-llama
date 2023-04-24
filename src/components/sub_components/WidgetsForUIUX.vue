<template> 


<a-row>

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
                    <img src="../../assets/images/clipboard-icon-svg.svg" alt="Icon"/>
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
                    <label class="switch-label" for="switch">
                        Skill name 
                    </label>
                    <a-switch v-model:checked="checked1" />
                </div>

                <div class="toggle-div">
                    <label class="switch-label" for="switch">
                        Skill name 
                    </label>
                    <a-switch v-model:checked="checked1" />
                </div>

                <div class="toggle-div">
                    <label class="switch-label" for="switch">
                        Skill name 
                    </label>
                    <a-switch v-model:checked="checked1" />
                </div>

                <div class="toggle-div">
                    <label class="switch-label" for="switch">
                        Skill name 
                    </label>
                    <a-switch v-model:checked="checked1" />
                </div>

                <div class="toggle-div">
                    <label class="switch-label" for="switch">
                        Skill name 
                    </label>
                    <a-switch v-model:checked="checked1" />
                </div>

                <div class="toggle-div">
                    <label class="switch-label" for="switch">
                        Skill name 
                    </label>
                    <a-switch v-model:checked="checked1" />
                </div>
            </div>
                
            </div>

            

    </a-col>

<!-- MODAL FOR UI UX -->
    <a-col :span="12">
        <div class="pop-out-widget"> 
            <div style="background: linear-gradient(90deg, rgba(102,204,255,1) 0%, rgba(0,255,83,1) 100%); 
                        height: 175px;
                        border-radius: 15px 15px 0px 0px;">
            </div>

            <div style="margin: 20px; text-align: center;" >
                
                <p style="font-weight: 500; 
                        font-size: 18px;
                        line-height: normal;">Lorem ipsum dolor sit am et, consectetur adipi.
                </p>

                
                <div style="border-top: 1px solid #e0e0e0;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding: 15px 0;">
                
                    <div style="display: flex;">

                        <div class="card-avatar">
                            <img src="../../assets/images/llama-pink-img.png" alt="Avatar">
                        </div>

                        <div style="display: flex;
                                    flex-direction: column;
                                    align-items: flex-start;">
                            <p class="name-text-card">Lorem Name</p>
                            <p class="email-text-card">lorem@ellie.com</p>
                        </div>

                    </div>

                    <button class=" blue-button small-button"> Visit </button>

                </div>

            </div>
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
                }
    
            }

        });

</script>




<style>

@import url('https://fonts.googleapis.com/css2?family=Handlee&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

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
        height: 150px; /* set a fixed height for the div */
        overflow: auto; /* enable scrolling */
        }

        .toggle-div {
        display: flex; 
        align-items: center; 
        justify-content: space-between;
        margin-bottom: 15px;
        margin-right: 15px;
        }

        .skill-toggle-widget {
        background-color: white;
        border-radius: 20px;

        height: auto;
        width: auto;
        margin: 0 30px 30px 0;
        padding: 20px;
        }

        .switch-label {
            font-family: 'Inter';
            font-weight: 500;
            font-size: 15px;
            color: #989898;
        }


/* FOR COPY PASTE */
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