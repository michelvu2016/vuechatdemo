<template>
    <div class="chat-area">
        <div class="controls">
            <label for="chatname">
                Chat name:
                <input id="chatname" type="text" v-model="chatuser">
            </label>
            <button @click="addChatBox">Add Chat Box</button>
        </div>
        <div class="chatbox-stage">
            <ChatBox v-for="(boxid, index) in chatboxes" 
                    :key="index"
                    :id="boxid"
                    :customStyle="{
                        width: '40%',
                        color: 'blue'

                    }"
                    :friend="'Mike Vu'"

                    >

            </ChatBox>

        </div>
    </div>
</template>
<script>

import ChatBox from './chatbox.vue'
import {provide, ref, toRefs } from 'vue'

export default {
    components: {
        ChatBox
    },

 

    setup(props) {

        let chatboxid = 0;
        const chatboxes = ref([]);
        const chatboxboard = ref([])
        const chatuser = ref("")
        const observerRegister = (observer) => {
            console.log(">>>register chatboox");
            chatboxboard.value.push(observer);
        }
        const sendMessages = (message, index) => {
            console.log(">>>received message: "+message);
            setTimeout(() => {
                console.log(">>>>broadcast message:", message);
                broadcastMessage(message, index);
            }, 100)
        }
        const broadcastMessage = (message, fromindex) => {
            chatboxboard.value.forEach(observer => {
                console.log("broadcast to:", observer)
                observer(message, fromindex)
            });
        }
        
        const addChatBox = () => {
            if(chatboxes.value.indexOf(chatuser.value) === -1) {
                console.log(">>>>:", chatboxes.value.indexOf(chatuser.value))
                chatboxes.value.push(chatuser.value)
                console.log(">>>chatboxes: ", chatboxes.value);
            }
        }

        provide("register", observerRegister)
        provide("sendMessage", sendMessages)

        return {
            chatboxes,
            addChatBox,
            chatuser,
        }
        
    },
}
</script>

<style scoped>
    .controls {
        margin: 3px 0 0 6px;
    }
    .chatbox-stage {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 5px;
        flex-wrap: wrap;
        width: 100%;
        border: 1px red solid;
        box-sizing: border-box;

    }
    .chat-area {
        border: 2px green solid
    }
</style>
