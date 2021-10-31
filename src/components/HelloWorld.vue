<template>
    <section class="wrapper">
        <form class='form'>
            <ui-textbox
                icon="person_add"
                :error="accountErrorMessage"
                help="4-20位英文小寫、數字。"
                label="帳號"
                placeholder="輸入帳號"
                required
                floatingLabel

                :invalid="isValidAccount===false"
                :value="accountText"
                @input='accountValidate'

                :maxlength="20"
                :minlength="4"
            ></ui-textbox>

            <ui-textbox
                icon="password"
                :error="passwordErrorMessage"
                help="6-12位英文小寫、數字。"
                label="密碼"
                placeholder="輸入密碼"
                required
                floatingLabel

                :invalid="isValidPassword===false"
                :value="passwordText"
                @input="passwordValidate"
                :maxlength="12"
                :minlength="6"
            ></ui-textbox>
<!-- 
            <ui-textbox
                icon="password"
                :error="passwordErrorMessage"
                help="6-12位英文小寫、數字。"
                label="密碼"
                placeholder="輸入密碼"
                required
                floatingLabel

                :invalid="invalidPassword"
                :value="textPassword"
                @input="passwordValidate"
                :maxlength="12"
            ></ui-textbox> -->

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


            <ui-button
                color="primary"
                @click.prevent='submit'
                >送出
            </ui-button>


            
        </form>


    </section>
</template>

<script>

import { mapState } from 'vuex'
import { mapActions } from 'vuex'


export default {
    data() {
        return {

            // accountText:'',
            // accountErrorMessage:'字數有誤，請輸入4-20位元',
            // isValidAccount: null,


            // textPassword:'',
            // passwordErrorMessage:'字數有誤，請輸入6-12位元',
            // invalidPassword: null,
           
            userName:'', 

            gender:'',
            genderOptions:['男','女','/'],

            emailAddress:'',

        };
    },

    methods:{
        ...mapActions([
        'setAccountText', 'setAccountValidate', 'setAccountErrorMessage',
        'setPasswordText','setPasswordtValidate','setPasswordErrorMessage']),

        submit(){
            if(this.isValidAccount !== true){
                this.setAccountValidate(false);
            }
            // if(this.isValidPassword !== true){
            //     this.$store.commit('SET_PASSWORD_VALIDATE',false);
            //     return
            // }
        
            alert('ok!');

        },

        accountValidate(newValue){

        this.$store.dispatch('setAccountText', newValue);

        // 驗證字數
        if(newValue.length < 4 || newValue.length > 20){
            this.setAccountValidate(false);
            this.setAccountErrorMessage('請輸入4-20位英文小寫或數字');
            return; 
        }

        // 驗證輸入內容
        let accountRegex = /^[a-z0-9]+$/;
        let contentValidate = accountRegex.test(newValue);

        if(contentValidate === false){
            this.$store.dispatch('setAccountValidate', false);
            this.$store.dispatch('setAccountErrorMessage', '內容有誤，僅可輸入英文小寫或數字');
            return;
        }

        this.$store.dispatch('setAccountValidate', true);

        },

        passwordValidate(newValue){
            this.setPasswordText(newValue);

            // 驗證位數
            if(this.passwordText.length < 6 || this.passwordText.length > 12){
                this.setPasswordErrorMessage('字數有誤，請輸入6-12位元');
                this.setPasswordtValidate(false);
                return
            }
            // 驗證輸入內容
            let isText = /^[a-z0-9]+$/;
            let contentValidate = isText.test(newValue);

            if(contentValidate === false){
                this.setPasswordtValidate(false);
                this.setPasswordErrorMessage('內容有誤，僅可輸入英文小寫或數字');
                return;
            }

            this.setPasswordtValidate(true);

        },
    },

    computed:{
        ...mapState(['accountContent','passwordContent']),

        // 帳號
        accountText(){
            return this.accountContent.accountText
        },
        accountErrorMessage(){
            return this.accountContent.accountErrorMessage
        },
        isValidAccount(){
            return this.accountContent.isValidAccount
        },
        // 密碼
        passwordText(){
            return this.passwordContent.passwordText
        },
        passwordErrorMessage(){
            return this.passwordContent.passwordErrorMessage
        },
        isValidPassword(){
            return this.passwordContent.isValidPassword
        }
    }

};
</script>


<style lang="scss">

.wrapper{
    width: 100%;
    height: 98vh;
    background: #eeeeee;
}
.form{
    width: 50vw;
    margin: auto;
}

</style>