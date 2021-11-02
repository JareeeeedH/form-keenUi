<template>
  <section class="wrapper">
    <form class="form">
      <ui-textbox
        icon="person_add"
        help="4-20位英文小寫、數字。"
        label="帳號"
        placeholder="輸入帳號"
        required
        floatingLabel
        :error="accountContent.accountErrorMessage"
        :invalid="accountContent.isValidAccount === false"
        :value="accountContent.accountText"
        @input="accountValidate"
        :maxlength="20"
        :minlength="4"
      ></ui-textbox>

      <ui-textbox
        icon="password"
        help="6-12位英文小寫、數字。"
        label="密碼"
        placeholder="輸入密碼"
        required
        floatingLabel
        type="password"
        :error="passwordContent.passwordErrorMessage"
        :invalid="passwordContent.isValidPassword === false"
        :value="passwordContent.passwordText"
        @input="passwordValidate"
        :maxlength="12"
        :minlength="6"
      ></ui-textbox>

      <ui-textbox
        icon="password"
        help="再次輸入密碼"
        label="密碼確認"
        placeholder="再次輸入密碼"
        required
        floatingLabel
        type="password"
        :error="confirmPasswordContent.confirmErrorMessage"
        :invalid="confirmPasswordContent.isValidConfirm === false"
        :value="confirmPasswordContent.confirmText"
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
        :invalid="nameContent.isValidName === false"
        :value="nameContent.name"
        @input="nameValidate"
      ></ui-textbox>

      <ui-select
        icon="favorite"
        label="性別"
        placeholder="請選擇性別"
        :options="genderOptions"
        :value="gender"
        @change="genderHandler"
      ></ui-select>

      <ui-textbox
        help="請輸入電子信箱"
        icon="mail"
        label="Email address"
        type="email"
        floatingLabel
        :invalid="emailContent.isValidEmailAddress === false"
        :error="emailContent.emailErrorMessage"
        :value="emailContent.emailAddress"
        @input="emailValidate"
      ></ui-textbox>

      <ui-button color="primary" @click.prevent="submit">送出 </ui-button>
    </form>

    <ul class="member-info" v-if="showMemberInfo">
      <li
        class="each-info"
        v-for="(key, value, index) in memberInformation"
        :key="index"
      >
        {{ index + 1 }}.{{ value.toUpperCase() }}:
        <span class="show-content"> {{ key }} </span>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions([
      "setAccountText",
      "setAccountValidate",
      "setAccountErrorMessage",
      "setPasswordText",
      "setPasswordtValidate",
      "setPasswordErrorMessage",
      "setConfirmPassword",
      "setConfirmPasswordValidate",
      "setUserName",
      "setNameValidate",
      "setGender",
      "setEmailAddress",
      "setValidEmail",
      "taggleValidMemberInfo",
    ]),

    submit() {
      // account
      if (this.accountContent.isValidAccount !== true) {
        this.setAccountValidate(false);
      }
      // password
      if (this.passwordContent.isValidPassword !== true) {
        this.setPasswordtValidate(false);
      }
      // password confirmation
      if (
        this.passwordContent.passwordText !==
        this.confirmPasswordContent.confirmText
      ) {
        this.setConfirmPasswordValidate(false);
      } else {
        this.setConfirmPasswordValidate(true);
      }
      // name
      if (this.nameContent.isValidName !== true) {
        this.setNameValidate(false);
      }
      // email
      if (this.emailContent.isValidEmailAddress !== true) {
        this.setValidEmail(false);
        return;
      }

      // 所有欄位true, 表單驗證符合。
      let validataListValues = Object.values(this.validateList);
      let finalResult = validataListValues.every((eachResult) => {
        return eachResult === true;
      });

      if (finalResult) {
        this.taggleValidMemberInfo(true);
        return;
      }
      this.taggleValidMemberInfo(false);
    },

    accountValidate(newValue) {
      this.setAccountText(newValue);
      // 驗證字數
      if (newValue.length < 4 || newValue.length > 20) {
        this.setAccountValidate(false);
        this.setAccountErrorMessage("請輸入4-20位英文小寫或數字");
        return;
      }
      // 驗證輸入內容
      let accountRegex = /^[a-z0-9]+$/;
      let contentValidate = accountRegex.test(newValue);

      if (contentValidate === false) {
        this.setAccountValidate(false);
        this.setAccountErrorMessage("內容有誤，僅可輸入英文小寫或數字");
        return;
      }
      this.setAccountValidate(true);
    },

    passwordValidate(newValue) {
      this.setPasswordText(newValue);

      // 驗證位數
      if (newValue.length < 6 || newValue.length > 12) {
        this.setPasswordErrorMessage("字數有誤，請輸入6-12位元");
        this.setPasswordtValidate(false);
        return;
      }
      // 驗證輸入內容
      let isText = /^[a-z0-9]+$/;
      let contentValidate = isText.test(newValue);

      if (contentValidate === false) {
        this.setPasswordtValidate(false);
        this.setPasswordErrorMessage("內容有誤，僅可輸入英文小寫或數字");
        return;
      }
      this.setPasswordtValidate(true);
    },

    confirmPasswordValidate(newValue) {
      this.setConfirmPassword(newValue);
    },

    nameValidate(newValue) {
      this.setUserName(newValue);

      let isName = /^[\u4E00-\u9FA5A-Za-z]+$/g;
      let contentValidate = isName.test(newValue);
      if (contentValidate === false) {
        this.setNameValidate(false);
        return;
      }

      this.setNameValidate(true);
    },

    genderHandler(newValue) {
      this.setGender(newValue);
    },

    emailValidate(newValue) {
      this.setEmailAddress(newValue);

      let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (newValue) {
        this.setValidEmail(reg.test(newValue));
        return;
      }

      this.setValidEmail(true);
    },
  },

  computed: {
    ...mapState([
      "accountContent",
      "passwordContent",
      "confirmPasswordContent",
      "nameContent",
      "genderOptions",
      "gender",
      "emailContent",
      "showMemberInfo",
    ]),
    ...mapGetters(["validateList", "memberInformation"]),
  },
};
</script>

<style lang="scss">
.wrapper {
  display: relative;
  width: 100%;
  height: 98vh;
  background: #eeeeee;
}
.form {
  width: 50vw;
  margin: auto;
}
.member-info {
  display: absolute;
  margin-left: 50%;
  width: 30%;
  padding: 1rem;
  list-style: none;
  border-radius: 5px;
  background: linear-gradient(
    to Right,
    rgba(49, 54, 49, 0.2),
    rgba(189, 189, 36, 0.5)
  );
  transform: translateX(-80%);
}
.each-info {
  font-size: 1rem;
  padding: 0.5rem 0;
  border-bottom: 2px solid black;
}
.show-content {
  font-weight: 500;
  font-size: 1.5rem;
}
</style>
