<template>
    <div class="chatbox" :style="customStyle">
        
        <div ref="messaging">User: {{id}}</div>
  
        <div>
            <div class="message-board">
                {{allmessages}}
            </div>
        </div>    
         <h4>Something in your mind?</h4>
        <textarea v-model="message" 
            class="messageentry"
            @keyup.enter="sendMessage"
            >

        </textarea>
    <div>
        <button @click="sendMessage">Send</button>
    </div>


    </div>
</template>
<script>
import { ref, onMounted, inject } from 'vue'


export default {

   props: {
        id: String,
        friend: String,
        customStyle: {
            type: Object,
            required: true
        }
    },

    setup(props) {
 
        

        const register = inject("register", (observer) => {});
        const sendMessageToController = inject('sendMessage')
        const messaging = ref(null);
        const message = ref("");
        const allmessages = ref("");
        const id = ref(null)
        const customStyle = ref({})
        

        const messageToBoard = (message, fromIndex) => {
                console.log(">>message from controller:", message)
                if(allmessages.value.length)
                {
                    allmessages.value += "\n";
                }
                allmessages.value += `<b>${fromIndex}</b>: ${message}`;
            } 

        const sendMessage = () => {
            messageToBoard(message.value, "me")
            setTimeout(() => sendMessageToController(message.value, props.id), 100 )
            
            setTimeout(() => {message.value = ""},100)
        }
        


         onMounted(() => {
        // the DOM element will be assigned to the ref after initial render
            register(messageToBoard)
            //Check the props
            id.value = props.id
            console.log("props:", props);
            customStyle.value = props.customStyle
            console.log("custom style:", customStyle.value);

      })

        return {
            messaging,
            message,
            sendMessage,
            allmessages,
            id,
            customStyle,

            
        }
    },
}
</script>

<style scoped>
    div, textarea, h4 {
        margin: 0;
    }

    .chatbox {
        padding: 5px;
        border: 1px blue solid;
        border-style: inset;
        width: 100%;
        box-sizing: border-box;
        
    }
    .messageentry {
        width: 100%;
        height: 2rem;
        max-width: 100%;
        max-height: 2rem;
         box-sizing: border-box;
        
        background-color:aliceblue;
        color: blue;
        padding: 6px;
    }

    .messageboard {
        width: 100%;
        height: 100px;
        overflow: scrolly;

        max-width: 100%;
        box-sizing: border-box;
        background-color:aliceblue;
        color: blue;
        padding: 6px;
    }
</style>
