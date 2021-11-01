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

            <ui-textbox
                icon="password"
                :error="confirmPasswordContent.cconfirmErrorMessage"
                :invalid="isValidConfirmPassword===false"
                help="再次輸入密碼"
                label="密碼確認"
                placeholder="再次輸入密碼"
                required
                floatingLabel

                :value="confirmPassword"
                @input="confirmPasswordValidate"

            ></ui-textbox>

            <ui-textbox
                error="必填，不可數字、空白與特殊符號。"
                help="輸入姓名，不可數字、空白與特殊符號。"
                icon="person"
                label="姓名"
                placeholder="輸入姓名"
                required
                floatingLabel

                :invalid="isValidName===false"
                :value='userName'
                @input='nameValidate'
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
            gender:'',
            genderOptions:['男','女','/'],
            emailAddress:'',
        };
    },

    methods:{
        ...mapActions([
        'setAccountText', 'setAccountValidate', 'setAccountErrorMessage',
        'setPasswordText','setPasswordtValidate','setPasswordErrorMessage',
        'setConfirmPassword','setConfirmPasswordValidate', 
        'setUserName','setNameValidate']),

        submit(){
            if(this.isValidAccount !== true){
                this.setAccountValidate(false);
            }
            if(this.isValidPassword !== true){
                this.setPasswordtValidate(false)
            }

            if(this.passwordText !== this.confirmPassword){
                this.setConfirmPasswordValidate(false);
            }
            else{
                this.setConfirmPasswordValidate(true);
            }
        
            // alert('ok!');

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
                this.setAccountValidate(false);
                this.setAccountErrorMessage('內容有誤，僅可輸入英文小寫或數字');
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

        confirmPasswordValidate(newValue){
            this.setConfirmPassword(newValue)
        },

        nameValidate(newValue){
            this.setUserName(newValue);

            let isName = /^[\u4E00-\u9FA5A-Za-z]+$/g;
            let contentValidate = isName.test(newValue);

            if(contentValidate === false){
                this.setNameValidate(false)
                return;
            }

            this.setNameValidate(true)

        },
    },

    computed:{
        ...mapState(['accountContent','passwordContent','confirmPasswordContent','nameContent']),

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
        },
        // 密碼確認
        confirmPassword(){
            return this.confirmPasswordContent.confirmText
        },
        isValidConfirmPassword(){
            return this.confirmPasswordContent.isValidConfirm
        },

        // 名稱
        userName(){
            return this.nameContent.name;
        },
        isValidName(){
            return this.nameContent.isValidName;
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