<template>
    <section class="page page--ui-textbox">


        <form>

            <ui-textbox
                icon="person_add"
                :error="accountErrorMessage"
                help="4-20位英文小寫、數字。"
                label="帳號"
                placeholder="輸入帳號"
                required
                floatingLabel

                :invalid="invalidAccount"
                :value="textAc"
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

                :invalid="invalidPassword"
                :value="textPassword"
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


export default {
    data() {
        return {

            textAc:'',
            accountErrorMessage:'字數有誤，請輸入4-20位元',
            invalidAccount: null,


            textPassword:'',
            passwordErrorMessage:'字數有誤，請輸入6-12位元',
            invalidPassword: null,
           
            userName:'', 

            gender:'',
            genderOptions:['男','女','/'],

            emailAddress:'',

        };
    },

    methods:{
        submit(){
            if(this.invalidAccount !== false || this.invalidPassword!== false){
                this.invalidAccount = true;
                this.invalidPassword = true;
                return
            }
            

            alert('ok!')
        },

        accountValidate(newValue){

        this.textAc = newValue;

        // 驗證字數
        if(newValue.length < 4 || newValue.length > 20){
            this.accountErrorMessage = '請輸入4-20位英文小寫或數字'
            this.invalidAccount = true;
            return;
        }

        // 驗證輸入內容
        var isText = /^[a-z0-9]+$/;
        let contentValidate = isText.test(newValue);

        if(contentValidate){
            this.invalidAccount = false;
            return;
        }

        this.accountErrorMessage = '內容有誤，僅可輸入英文小寫或數字'
        this.invalidAccount = true;


        },

        passwordValidate(newValue){
            this.textPassword = newValue

            // 驗證位數
            if(this.textPassword.length < 6 || this.textPassword.length > 12){
                this.passwordErrorMessage = '字數有誤，請輸入6-12位元',
                this.invalidPassword = true;
                return
            }
            // 驗證輸入內容
            var isText = /^[a-z0-9]+$/;
            let contentValidate = isText.test(newValue);

            if(contentValidate){
                this.invalidPassword = false;
                return;
            }

            this.invalidPassword = true;
            this.passwordErrorMessage = '內容有誤，僅可輸入英文小寫或數字'

        },
    },

};
</script>
