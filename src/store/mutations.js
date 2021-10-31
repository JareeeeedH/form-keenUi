let mutations = {
  // account
  SET_ACCOUNT_TEXT(state, newAccountText){ 
    state.accountContent.accountText = newAccountText;
    // vue.ser()?
  },
  SET_ACCOUNT_VALIDATE(state, validResult){
    if(validResult){
      state.accountContent.isValidAccount = true;
      return
    }
    state.accountContent.isValidAccount = false;
  },
  SET_ACCOUT_ERROR_MESSAGE(state, message){
    state.accountContent.accountErrorMessage = message;
  },
  // password
  SET_PASSWORD_TEXT(state, newPasswordText){ 
    state.passwordContent.passwordText = newPasswordText
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
  }


}

export default mutations