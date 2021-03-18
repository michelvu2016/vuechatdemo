<template>
    <div>
        <div>Welcome to Natural Remedy Search</div>
        <div>
            <h3>Please enter your personal information</h3>
            <form>
                <div class="form-group">
                    <label>
                        Full Name:
                        <input type="text" 
                        name="fullname" v-model="fullname" 
                        v-on:input="setFullname"
                        class="form-control"
                        >

                    </label>
                </div>
                <div class="form-group">
                    <label>
                        US Veteran:
                        <input type="checkbox" 
                        v-model="usveteran" 
                        true-value="yes" 
                        false-value="no"
                        class="form-control">
                    </label>

                </div>

                    <div class="form-group gender">
                        <h4>Gender</h4>
                        <label>
                            <input type="radio" 
                            name="gender"
                            v-model="gender" 
                            v-bind:value="male" 
                            class="form-control">
                            Male:
                        </label>
                        <label>
                            <input type="radio" 
                            name="gender"
                            v-model="gender" 
                            v-bind:value="female" 
                            class="form-control">
                            Female:
                        </label>
                        <label>
                            <input type="radio" 
                            name="gender"
                            v-model="gender" 
                            v-bind:value="trans_female" 
                            class="form-control">
                            Transgendered Female:
                        </label>
                        <label>
                            <input type="radio" 
                            name="gender"
                            v-model="gender" 
                            v-bind:value="trans_male" 
                            class="form-control">
                            Transgendered Male:
                        </label>

                

                </div>

                <div class="form-group terms">
                    <div class="form-group">
                        <label for="accept">Accept</label>
                        <input type="radio" id="accept" value="accept" v-model="terms">

                    </div>
                    <div class="form-group">
                        <label for="reject">Reject</label>
                        <input type="radio" id="accept" value="reject" v-model="terms">

                    </div>

                </div>

  

                <div class="controls">
                    <button type="button"  @click="reset">Reset</button>
                </div>
            </form>
        </div>


        <div>
            Your information:
            <ul>
                <li>Name: {{curFullName}}</li>
                <li>US Veteran: {{usveteran}}</li>
                <li>Gender: {{gender}}</li>
                <li>Terms &amp; Condition: {{terms}}</li>


            </ul>
        </div>
    </div>

</template>
<script>

export default {
    components: {
        
    },
    name: 'home',
    data() {
        return {
            fullname: "",
            usveteran: "no",
            gender: "",
            male: "male",
            female: "female",
            trans_female: "Transgendered female",
            trans_male: "transgendered male",
            terms: "reject",
 
           

        }
    },
    methods: {
        setFullname(e) {
            this.fullname = e.target.value;
        },
        reset() {
            this.fullname = "";
        }
    },
    computed: {
        curFullName() {
            return this.fullname;
        },

    },
    watch: {

    }


}
</script>

<style scoped>
    .gender {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 10px;

    }
    .form-group {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

    }
    .gender h4 {
        margin: 0;

    }
    .terms {
        flex-direction: row;
    }
    .terms .form-group {
        flex-direction: row;
    }
</style>
