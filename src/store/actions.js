let actions = {
  // account
  setAccountText(context, newAccountText){
    context.commit('SET_ACCOUNT_TEXT', newAccountText)
  },

  setAccountValidate(context, validateResult){
    context.commit('SET_ACCOUNT_VALIDATE', validateResult)
  },

  setAccountErrorMessage(context, message){
    context.commit('SET_ACCOUT_ERROR_MESSAGE', message)
  },

  // password
  setPasswordText(context, newPasswordText){
    context.commit('SET_PASSWORD_TEXT', newPasswordText)
  },

  setPasswordtValidate(context, validateResult){
    context.commit('SET_PASSWORD_VALIDATE', validateResult)
  },

  setPasswordErrorMessage(context, message){
    context.commit('SET_PASSWORD_ERROR_MESSAGE', message)
  },

  // confirmPassword
  setConfirmPassword(context, confirmPassword){
    context.commit('SET_CONFIRM_PASSWORD_TEXT', confirmPassword)
  },

  setConfirmPasswordValidate(context, validateResult){
    context.commit('SET_CONFIRM_PASSWORD_VALIDATE', validateResult)
  },

  // userName
  setUserName(context, name){
    context.commit('SET_USER_NAME', name)
  },
  setNameValidate(context, validateResult){
    context.commit('SET_NAME_VALIDATE', validateResult)
  },

}

export default actions