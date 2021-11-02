let mutations = {
  // account
  SET_ACCOUNT_TEXT(state, newAccountText){ 
    state.accountContent.accountText = newAccountText;
  },
  SET_ACCOUNT_VALIDATE(state, validResult){
    if(validResult){
      state.accountContent.isValidAccount = true;
      return
    }
    state.accountContent.isValidAccount = false;
  },
  SET_ACCOUNT_ERROR_MESSAGE(state, message){
    state.accountContent.accountErrorMessage = message;
  },

  // password
  SET_PASSWORD_TEXT(state, newPasswordText){ 
    state.passwordContent.passwordText = newPasswordText;
  },
  SET_PASSWORD_VALIDATE(state, validResult){
    if(validResult){
      state.passwordContent.isValidPassword = true;
      return
    }
    state.passwordContent.isValidPassword = false;
  },
  SET_PASSWORD_ERROR_MESSAGE(state, message){
    state.passwordContent.passwordErrorMessage = message;
  },

  // password confirmation
  SET_CONFIRM_PASSWORD_TEXT(state, newPasswordText){ 
    state.confirmPasswordContent.confirmText = newPasswordText;
  },

  SET_CONFIRM_PASSWORD_VALIDATE(state, validResult){
    state.confirmPasswordContent.isValidConfirm = validResult;
  },

  // userName
  SET_USER_NAME(state, name){
    state.nameContent.name = name;
  },
  SET_NAME_VALIDATE(state, validResult){
    state.nameContent.isValidName = validResult;
  },

  // gender
  SET_GENDER(state, gender){
    state.gender = gender;
  },

  // email
  SET_EMAIL(state, emailAddress){
    state.emailContent.emailAddress = emailAddress;
  },
  SET_EMAIL_VALIDATE(state, validResult){
    state.emailContent.isValidEmailAddress = validResult;
  },
  
  TAGGLE_INFORMATION(state, result){
    state.showMemberInfo = result;
  },


}

export default mutations