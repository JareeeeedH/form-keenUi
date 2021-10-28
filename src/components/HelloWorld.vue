<template>
    <section class="page page--ui-textbox">

        <form action='/' method="post" onsubmit="return validate()">


            <ui-textbox
                icon="person_add"
                autocomplete="off"
                error="4 - 20碼"
                help="4 - 20碼"
                label="帳號"
                placeholder="輸入帳號"
                required

                :invalid="textAcTouched && textAc.length === 0"
                @touch="textAcTouched = true"

                v-model="textAc"

                enforce-maxlength
                :maxlength="20"

            ></ui-textbox>

            <ui-textbox
                icon="password"
                autocomplete="off"
                error="6 - 12碼"
                help="6 - 12碼"
                label="密碼"
                placeholder="輸入密碼"
                required

                :invalid="textPwTouched && textPw.length === 0"
                @touch="textPwTouched = true"

                v-model="textPw"

                enforce-maxlength
                :maxlength="12"
            ></ui-textbox>

            <ui-textbox
                error="名稱必填，不可空白與特殊符號。"
                help="輸入名稱，不可空白與特殊符號。"
                icon="person"
                label="Username"
                placeholder="輸入名稱"
                required

                :maxlength="16"
                :invalid="userName.length > 16"

                v-model="userName"
            ></ui-textbox>

            <ui-select
                icon="favorite"
                label="性別"
                placeholder="請選擇性別"
                v-model="gender"

                :options="genderOptions"
            ></ui-select>

             <ui-textbox
                help="If you have multiple email addresses, enter the one you use the most"
                icon="mail"
                label="Email address"
                placeholder="Enter your email address"
                type="email"
                v-model="emailAddress"
            ></ui-textbox>

            <!-- <button type="submit"> submit!</button> -->



            <ui-button
                color="primary"
                @click="submit"
                >送出
            </ui-button>

            
        </form>


    </section>
</template>

<script>

export default {
    data() {
        return {

            textAc:'',
            textAcTouched: false,

            textPw:'',
            textPwTouched: false,
           
            userName:'', 

            gender:'',
            genderOptions:['男','女','/'],

            emailAddress:'',

        };
    },

    methods:{
        submit(){
            console.log('btn')
        },

        validate(){
            alert('t');
            return false
        }
    },

};
</script>
