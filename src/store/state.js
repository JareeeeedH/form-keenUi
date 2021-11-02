let state = {

  showMemberInfo:false,

  accountContent:{
    accountText:'',
    accountErrorMessage:'字數有誤，請輸入4-20位元',
    isValidAccount:null,
  },

  passwordContent:{
    passwordText:'',
    passwordErrorMessage:'字數有誤，請輸入6-12位元',
    isValidPassword:null,
  },

  confirmPasswordContent:{
    confirmText:'',
    confirmErrorMessage:'密碼確認有誤',
    isValidConfirm:null,
  },

  nameContent:{
    name:'',
    isValidName:null,
  },

  gender:'',
  genderOptions:['-','男','女'],

  emailContent:{
    emailAddress:'',
    isValidEmailAddress:true,
    emailErrorMessage:'格式有誤'
  },

}

export default state
